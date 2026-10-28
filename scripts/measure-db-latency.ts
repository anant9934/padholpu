import { pool } from "../server/db";

async function measureNeonLatency() {
  console.log("================================================================================");
  console.log("          NEON SERVERLESS & DATABASE CONNECTION LATENCY PROFILING               ");
  console.log("================================================================================");

  // 1. Connection acquisition (TCP/WebSocket + TLS + Auth Handshake)
  const connectStart = performance.now();
  const client = await pool.connect();
  const connectDuration = performance.now() - connectStart;

  // 2. Cold First Query Execution (Neon compute spin-up / cold query)
  const q1Start = performance.now();
  await client.query("SELECT id, name, code FROM subjects LIMIT 10");
  const q1Duration = performance.now() - q1Start;

  // 3. Warm Query Executions (Repeated queries on active connection)
  const warmSamples: number[] = [];
  for (let i = 0; i < 5; i++) {
    const start = performance.now();
    await client.query("SELECT id, name, code FROM subjects LIMIT 10");
    warmSamples.push(performance.now() - start);
  }
  client.release();

  const warmAvg = warmSamples.reduce((a, b) => a + b, 0) / warmSamples.length;

  console.log(`Neon Connection Setup (TLS/WebSocket handshake): ${connectDuration.toFixed(1)} ms`);
  console.log(`First Query Execution (Cold query/cache miss):    ${q1Duration.toFixed(1)} ms`);
  console.log(`Warmed Query Execution (Average of 5 runs):       ${warmAvg.toFixed(1)} ms`);
  console.log("--------------------------------------------------------------------------------");

  const results = {
    neonConnectionHandshakeMs: Math.round(connectDuration),
    coldDbQueryMs: Math.round(q1Duration),
    warmDbQueryAvgMs: Math.round(warmAvg),
  };

  console.log("Breakdown Summary:", JSON.stringify(results, null, 2));
  process.exit(0);
}

measureNeonLatency().catch(e => {
  console.error(e);
  process.exit(1);
});
