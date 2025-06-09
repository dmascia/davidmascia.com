import MermaidChart from "../../MermaidChart";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6 max-w-7xl mx-auto font-sans">
      <div className="mb-6">
        <Link href="/" passHref>
          <span className="inline-block px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer transition">
            ← Back to Home
          </span>
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        📈 Real-Time Trading Dashboard
      </h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Business Impact
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>📈 $10B+ assets visualized in real-time</li>
          <li>⚡ 40% faster rendering vs legacy system</li>
          <li>🛡️ 100% uptime during market hours</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Architecture Diagrams
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-1">
            1. High-Level System Design
          </h3>
          <div className="bg-gray-100 p-4 rounded border border-gray-300 text-gray-500 italic">
            <MermaidChart
              chart={`graph TD
                  A[Trader UI] -->|WebSocket| B[Market Data Gateway]
                  A -->|CloudFront Edge| C[Static Assets]
                  B --> D[Web Worker]
                  D --> E[D3.js Renderer]
                  E --> F[Canvas Optimization]
                  A --> G[Local Cache]
                  C -->|SRI Hashes| A`}
            />
          </div>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Key Decisions
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Dual WebSocket fallback (primary + backup connection)</li>
            <li>Edge caching for static bundles with SRI</li>
            <li>Web Workers for off-thread data normalization</li>
          </ul>
        </section>
        <div>
          <h3 className="text-xl font-medium text-gray-700 mb-1">
            2. Data Flow Optimization
          </h3>
          <div className="bg-gray-100 p-4 rounded border border-gray-300 text-gray-500 italic">
            <MermaidChart
              chart={`sequenceDiagram
                  participant T as Trader
                  participant C as Client
                  participant W as WebWorker
                  participant D as D3

                  T->>C: Opens dashboard
                  C->>W: Spawn worker
                  W->>D: Pre-warm cache
                  loop Market Hours
                      B->>W: Stream quotes (50ms)
                      W->>D: Diff update
                      D->>C: RAF render
                  end`}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Innovations
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            Predictive rendering (pre-render common price movement patterns)
          </li>
          <li>Delta compression (reduced WS payloads by 65%)</li>
          <li>
            Canvas dirty rect tracking (only redraw changed chart regions)
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-10">Technical Leadership</h2>

        {/* 1. Performance Breakthroughs */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            1. Performance Breakthroughs
          </h3>

          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border border-gray-200 text-left text-sm">
              <thead className="bg-gray-100 font-semibold">
                <tr>
                  <th className="py-2 px-4 border-b">Metric</th>
                  <th className="py-2 px-4 border-b">Before</th>
                  <th className="py-2 px-4 border-b">After</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Data → Paint</td>
                  <td className="py-2 px-4 border-b">320ms</td>
                  <td className="py-2 px-4 border-b">92ms</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">WS Bandwidth</td>
                  <td className="py-2 px-4 border-b">12MB/hr</td>
                  <td className="py-2 px-4 border-b">4.2MB/hr</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Crash Rate</td>
                  <td className="py-2 px-4 border-b">2.1%</td>
                  <td className="py-2 px-4 border-b">0.03%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2">How:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-800">
              <li>WebAssembly for price normalization</li>
              <li>Canvas pooling to avoid GC spikes</li>
              <li>
                Volatility-based throttling (render less during calm markets)
              </li>
            </ul>
          </div>
        </div>

        {/* 2. Cross-Team Leadership */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            2. Cross-Team Leadership
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>
              <span className="font-medium">Backend:</span> Co-designed binary
              WS protocol (replaced JSON)
            </li>
            <li>
              <span className="font-medium">QA:</span> Implemented visual
              regression testing with 0.1px tolerance
            </li>
            <li>
              <span className="font-medium">Security:</span> Enforced SRI + CSP
              for all edge assets
            </li>
          </ul>
        </div>

        {/* 3. Crisis Management */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">3. Crisis Management</h3>
          <p className="mb-2 font-semibold">Black Monday Scenario:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Detected 10x message volume spike</li>
            <li>Activated degraded mode (1s candles → 5s candles)</li>
            <li>Maintained core functionality during 300% traffic surge</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Artifacts</h3>

          <div>
            <h4 className="text-lg font-medium mb-2">
              Architecture Decision Record
            </h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
              {`# ADR 015: Canvas vs SVG

        **Chose Canvas because:**
        - 8x faster for 500+ moving elements
        - Better memory control for 12h sessions

        **Tradeoff:**
        - Lost built-in a11y (added ARIA overlays)`}
            </pre>
          </div>
        </div>
      </section>
      <div className="mb-6">
        <Link href="/" passHref>
          <span className="inline-block px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer transition">
            ← Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
