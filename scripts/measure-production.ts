/**
 * Live Production Latency Benchmark & Verification Script
 * Measures Cold Start (1st request) vs Warm Latency (subsequent requests: p50, p95, max, error rate).
 */

import https from "https";
import fs from "fs";

export interface EndpointBenchmark {
  endpoint: string;
  coldTimingMs: number;
  warmSamples: number;
  warmP50Ms: number;
  warmP95Ms: number;
  warmMinMs: number;
  warmMaxMs: number;
  errorRate: number;
  status: number;
  payloadBytes: number;
}

function requestTime(url: string): Promise<{ durationMs: number; status: number; bodyLength: number }> {
  return new Promise((resolve) => {
    const start = Date.now();
    const req = https.get(url, { headers: { "User-Agent": "PadhoLPU-Telemetry-Benchmark/1.0" } }, (res) => {
      let data = "";
      res.on("data", chunk => { data += chunk; });
      res.on("end", () => {
        const durationMs = Date.now() - start;
        resolve({ durationMs, status: res.statusCode || 0, bodyLength: data.length });
      });
    });
    req.on("error", () => {
      resolve({ durationMs: Date.now() - start, status: 500, bodyLength: 0 });
    });
    req.setTimeout(15000, () => {
      req.destroy();
      resolve({ durationMs: 15000, status: 504, bodyLength: 0 });
    });
  });
}

export async function benchmarkEndpoint(endpoint: string, totalSamples: number = 10): Promise<EndpointBenchmark> {
  const url = `https://padholpu.online${endpoint}`;
  
  // 1. Cold start timing (sample 0)
  const coldRes = await requestTime(url);
  const coldTimingMs = coldRes.durationMs;
  let errorCount = coldRes.status >= 400 ? 1 : 0;
  let lastStatus = coldRes.status;
  let payloadBytes = coldRes.bodyLength;

  // Short pause before warm runs
  await new Promise(r => setTimeout(r, 300));

  // 2. Warm samples
  const warmDurations: number[] = [];
  for (let i = 1; i < totalSamples; i++) {
    const res = await requestTime(url);
    warmDurations.push(res.durationMs);
    lastStatus = res.status;
    payloadBytes = res.bodyLength;
    if (res.status >= 400) errorCount++;
    await new Promise(r => setTimeout(r, 150));
  }

  warmDurations.sort((a, b) => a - b);
  const warmMinMs = warmDurations[0];
  const warmMaxMs = warmDurations[warmDurations.length - 1];
  const warmP50Ms = warmDurations[Math.floor(warmDurations.length * 0.5)];
  const warmP95Ms = warmDurations[Math.floor(warmDurations.length * 0.95)];
  const errorRate = Math.round((errorCount / totalSamples) * 100);

  return {
    endpoint,
    coldTimingMs,
    warmSamples: warmDurations.length,
    warmP50Ms,
    warmP95Ms,
    warmMinMs,
    warmMaxMs,
    errorRate,
    status: lastStatus,
    payloadBytes,
  };
}

export async function runBenchmarks() {
  console.log("================================================================================");
  console.log("            STUDY LPU — PRODUCTION COLD VS WARM LATENCY BENCHMARK               ");
  console.log("================================================================================");

  const targets = [
    "/api/courses",
    "/api/quizzes",
    "/api/resources",
    "/api/search?q=CSE",
    "/api/wallet/config",
  ];

  const results: EndpointBenchmark[] = [];
  for (const target of targets) {
    process.stdout.write(`Benchmarking ${target.padEnd(25)} ... `);
    const metric = await benchmarkEndpoint(target, 10);
    results.push(metric);
    console.log(`HTTP ${metric.status} | Cold: ${metric.coldTimingMs}ms | Warm p50: ${metric.warmP50Ms}ms | Warm p95: ${metric.warmP95Ms}ms | Payload: ${metric.payloadBytes}B`);
  }

  console.log("\n------------------------------------------------------------------------------------------------------------------");
  console.log("PRODUCTION API BENCHMARK: COLD VS WARM BREAKDOWN");
  console.log("------------------------------------------------------------------------------------------------------------------");
  console.log("Endpoint                  | Cold Timing | Warm p50 | Warm p95 | Warm Max | Error Rate | Payload  | Evaluation");
  console.log("--------------------------|-------------|----------|----------|----------|------------|----------|-------------");
  for (const r of results) {
    const ep = r.endpoint.padEnd(25);
    const cold = `${r.coldTimingMs}ms`.padEnd(11);
    const p50 = `${r.warmP50Ms}ms`.padEnd(8);
    const p95 = `${r.warmP95Ms}ms`.padEnd(8);
    const max = `${r.warmMaxMs}ms`.padEnd(8);
    const err = `${r.errorRate}%`.padEnd(10);
    const size = `${(r.payloadBytes / 1024).toFixed(1)}KB`.padEnd(8);
    const evalLabel = r.warmP95Ms <= 700 ? "OPTIMAL" : r.warmP95Ms <= 1000 ? "ACCEPTABLE" : "NEEDS_OPTIMIZATION";
    console.log(`${ep} | ${cold} | ${p50} | ${p95} | ${max} | ${err} | ${size} | ${evalLabel}`);
  }

  fs.writeFileSync("scripts/production-api-benchmark.json", JSON.stringify(results, null, 2));
  console.log("\nResults written to scripts/production-api-benchmark.json");
}

runBenchmarks().catch(console.error);
