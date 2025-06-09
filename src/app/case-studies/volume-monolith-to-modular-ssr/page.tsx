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
        🧱 Monolith to Modular SSR Migration
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Business Impact
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>🚀 75% faster page loads (3.2s → 0.8s p95)</li>
          <li>📈 50% higher SEO traffic in 6 months</li>
          <li>🛠️ 40% reduced dev cycle time</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Architecture Evolution
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-1">
            Legacy Monolith Architecture
          </h3>
          <div className="bg-gray-100 p-4 rounded border border-gray-300 text-gray-500 italic">
            <MermaidChart
              chart={`graph TD
                  A[Single Next.js App] --> B[API Routes]
                  A --> C[Pages]
                  A --> D[Styles]
                  B --> E[All Microservices]
                  C --> F[All Features]
                  D --> G[Global CSS]`}
            />
          </div>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Pain Points
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>12-minute production builds</li>
            <li>98% unused CSS in most pages</li>
            <li>Coupled deployments causing 30% rollbacks</li>
          </ul>
        </section>
        <div>
          <h3 className="text-xl font-medium text-gray-700 mb-1">
            Modular SSR Solution
          </h3>
          <div className="bg-gray-100 p-4 rounded border border-gray-300 text-gray-500 italic">
            <MermaidChart
              chart={`graph TD
                  A[Host Shell] -->|Dynamic Imports| B[Checkout Module]
                  A -->|SSR Federation| C[Product Module]
                  A -->|Edge Middleware| D[Auth Module]
                  B --> E[checkout.css]
                  C --> F[product.css]
                  D --> G[auth.css]
                  A --> H[Shared Core]`}
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Key Innovations:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Next.js SSR + Module Federation for independent deploys</li>
          <li>CSS Scoping with CSS Modules + PostCSS</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-10">Technical Leadership</h2>

        {/* 1. Performance Wins */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">1. Performance Wins</h3>

          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border border-gray-200 text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b">Metric</th>
                  <th className="py-2 px-4 border-b">Before</th>
                  <th className="py-2 px-4 border-b">After</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">TTI</td>
                  <td className="py-2 px-4 border-b">3.2s</td>
                  <td className="py-2 px-4 border-b">0.8s</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Build Time</td>
                  <td className="py-2 px-4 border-b">12min</td>
                  <td className="py-2 px-4 border-b">2min</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">CSS Payload</td>
                  <td className="py-2 px-4 border-b">218KB</td>
                  <td className="py-2 px-4 border-b">14KB</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-lg font-medium mb-2">How We Did It:</h4>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Bundle splitting by business domain</li>
            <li>React 18 streaming SSR for above-the-fold priority</li>
            <li>Edge caching of shared dependencies</li>
          </ul>
        </div>

        {/* 2. Cross-Team Coordination */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            2. Cross-Team Coordination
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              Created <span className="font-medium">"Golden Path"</span> starter
              templates
            </li>
            <li>
              Automated migration CLI:
              <pre className="bg-gray-100 text-sm p-2 mt-1 rounded w-fit">
                npx migrate --page product --target-module commerce
              </pre>
            </li>
            <li>
              Weekly{" "}
              <span className="font-medium">"Architecture Office Hours"</span>{" "}
              to unblock teams
            </li>
          </ul>
        </div>

        {/* 3. Crisis Management */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">3. Crisis Management</h3>
          <p className="font-semibold mb-2">The CSS Conflict Incident:</p>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Problem: Global CSS leaks after Module A v2 deploy</li>
            <li>Solution:</li>
            <ul className="list-disc list-inside ml-5 space-y-1">
              <li>Rolled back using module federation fallbacks</li>
              <li>Implemented CSS containment enforcement</li>
              <li>Added visual regression tests to CI</li>
            </ul>
          </ul>
        </div>

        {/* Artifacts */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">rtifacts</h3>

          {/* Migration Dashboard */}
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-2">1. Migration Dashboard</h4>
            <img
              src="/migration-dashboard.png"
              alt="Screenshot showing module health: 92/100, 5ms CSS analysis"
              className="rounded shadow border"
            />
            <p className="text-sm text-gray-600 mt-2">
              Caption: "Real-time migration tracker with compatibility scoring"
            </p>
          </div>

          {/* ADR */}
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-2">
              2. Architecture Decision Record
            </h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
              {`# ADR 044: SSR Federation vs Static Extraction

        **Chose SSR Federation because:**
        - Supported dynamic tenant configurations
        - Enabled A/B testing at module level

        **Tradeoffs:**
        - 18% higher cold start times
        - Required shared React singleton`}
            </pre>
          </div>

          {/* Open Source Contributions */}
          <div>
            <h4 className="text-lg font-medium mb-2">
              3. Open Source Contributions
            </h4>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>
                <code>nextjs-module-metrics</code> (1.8K stars)
              </li>
              <li>Webpack Bundle Archaeology toolkit</li>
            </ul>
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
