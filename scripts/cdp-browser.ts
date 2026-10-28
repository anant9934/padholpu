import { spawn } from "child_process";
import WebSocket from "ws";
import http from "http";
import fs from "fs";

export class ChromeCDP {
  private chromeProcess: any;
  private ws: WebSocket | null = null;
  private msgId = 0;
  private callbacks = new Map<number, (res: any) => void>();

  async start() {
    this.chromeProcess = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
      "--headless",
      "--remote-debugging-port=9222",
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-gpu",
      "--window-size=1280,900",
      "--user-data-dir=/tmp/chrome-prod-verify-" + Date.now(),
    ]);

    // Wait for CDP endpoint to be ready
    let targetWsUrl = "";
    for (let i = 0; i < 30; i++) {
      try {
        const pageJson = await this.httpPut("http://127.0.0.1:9222/json/new");
        const page = JSON.parse(pageJson);
        if (page && page.webSocketDebuggerUrl) {
          targetWsUrl = page.webSocketDebuggerUrl;
          break;
        }
      } catch (_) {
        await new Promise((r) => setTimeout(r, 200));
      }
    }

    if (!targetWsUrl) {
      throw new Error("Failed to create and connect to headless Google Chrome page target");
    }

    await this.connectWs(targetWsUrl);
    await this.send("Page.enable");
    await this.send("Runtime.enable");
    await this.send("DOM.enable");
    await this.send("Network.enable");
  }

  private connectWs(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(url);
      this.ws.on("open", () => resolve());
      this.ws.on("error", reject);
      this.ws.on("message", (raw) => {
        const data = JSON.parse(raw.toString());
        if (data.id && this.callbacks.has(data.id)) {
          this.callbacks.get(data.id)!(data);
          this.callbacks.delete(data.id);
        }
      });
    });
  }

  send(method: string, params: any = {}): Promise<any> {
    return new Promise((resolve) => {
      const id = ++this.msgId;
      this.callbacks.set(id, resolve);
      this.ws?.send(JSON.stringify({ id, method, params }));
    });
  }

  async navigate(url: string, waitMs = 3000): Promise<void> {
    await this.send("Page.navigate", { url });
    await new Promise((r) => setTimeout(r, waitMs));
  }

  async evaluate(expression: string): Promise<any> {
    const res = await this.send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true,
    });
    return res?.result?.result?.value;
  }

  async screenshot(filePath: string): Promise<void> {
    const res = await this.send("Page.captureScreenshot", { format: "png" });
    if (res?.result?.data) {
      fs.writeFileSync(filePath, Buffer.from(res.result.data, "base64"));
    }
  }

  async close() {
    try {
      this.ws?.close();
      this.chromeProcess?.kill();
    } catch (_) {}
  }

  private httpPut(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const req = http.request(url, { method: "PUT" }, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      });
      req.on("error", reject);
      req.end();
    });
  }
}
