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
        🧠 Next.js AI Website Builder
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        <em>Technical Leadership Case Study</em>
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Business Impact
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>🚀 40% faster development cycles for client projects</li>
          <li>🛠️ 100% WCAG compliance via AI auditing</li>
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
                  A[Next.js Host] -->|Dynamic Load| B[AI Layout Generator]
                  A -->|API Routes| C[Accessibility Auditor]
                  B --> D[GPT-4 Vision]
                  C --> E[axe-core]
                  A --> F[Preview Engine]
                  F -->|WebSocket| G[Client Browser]`}
            />
          </div>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Key Innovations:
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Hybrid rendering: SSG for marketing pages, SSR for user-specific
              previews
            </li>
            <li>
              AI-as-a-plugin architecture allowing hot-swappable AI providers
            </li>
          </ul>
        </section>
        <div>
          <h3 className="text-xl font-medium text-gray-700 mb-1">
            2. Real-Time Accessibility Pipeline
          </h3>
          <div className="bg-gray-100 p-4 rounded border border-gray-300 text-gray-500 italic">
            <MermaidChart
              chart={`sequenceDiagram
                  participant User
                  participant UI as Next.js UI
                  participant AI as AI Auditor (Worker)
                  participant DB as A11y Findings DB

                  User->>UI: Edits component
                  UI->>AI: POST component HTML
                  AI->>axe-core: Run audit
                  axe-core-->>AI: Violations JSON
                  AI->>DB: Store findings
                  AI->>UI: Stream fixes via WS
                  UI->>User: Auto-apply suggestions`}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Decisions</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Web Workers to prevent UI thread blocking</li>
          <li>Differential auditing (only scans changed DOM nodes)</li>
          <li>{`Fix confidence scoring (only auto-applies >90% confidence fixes)`}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          Technical Leadership Highlights
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Cross-Functional Alignment
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <span className="font-medium text-gray-900">Product:</span>{" "}
                Co-designed{" "}
                <span className="italic">"Fix Confidence Threshold"</span>{" "}
                slider with PM
              </li>
              <li>
                <span className="font-medium text-gray-900">Legal:</span> Built
                audit trail for ADA compliance documentation
              </li>
              <li>
                <span className="font-medium text-gray-900">DevEx:</span>{" "}
                Created VSCode extension for local a11y checks
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Performance Optimization
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-gray-800 text-sm font-semibold">
                  <tr>
                    <th className="py-2 px-4 border-b">Metric</th>
                    <th className="py-2 px-4 border-b">Before</th>
                    <th className="py-2 px-4 border-b">After</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="py-2 px-4 border-b">Audit Time</td>
                    <td className="py-2 px-4 border-b">4.2s</td>
                    <td className="py-2 px-4 border-b">0.8s</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">AI Token Usage</td>
                    <td className="py-2 px-4 border-b">$12/hr</td>
                    <td className="py-2 px-4 border-b">$3/hr</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">TTI (Preview)</td>
                    <td className="py-2 px-4 border-b">3.1s</td>
                    <td className="py-2 px-4 border-b">1.4s</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-medium text-gray-800 mb-2">How:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  DOM diffing with{" "}
                  <code className="bg-gray-100 px-1 rounded text-sm">
                    MutationObserver
                  </code>
                </li>
                <li>Prompt compression for GPT-4 calls</li>
                <li>CDN caching for common component fixes</li>
              </ul>
            </div>
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
