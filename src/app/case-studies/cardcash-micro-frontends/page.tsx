import MermaidChart from "../../MermaidChart";
import Link from "next/link";

type BrandLink = {
  name: string;
  url: string;
};

const brandLinks: BrandLink[] = [
  { name: "CardCash.com", url: "https://www.cardcash.com/" },
  { name: "Uber", url: "https://uber.cardcash.com/" },
  { name: "Amazon", url: "https://amazon.cardcash.com/" },
  { name: "Gap", url: "https://gap.cardcash.com/" },
  { name: "Wayfair", url: "https://wayfair.cardcash.com/" },
  { name: "Speedway", url: "https://speedway.cardcash.com/" },
  { name: "St. Jude", url: "https://stjude.cardcash.com/" },
  { name: "Topgolf", url: "https://topgolf.cardcash.com/" },
];

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
        🛒 CardCash Micro-Frontend E-Commerce Platform
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        <em>Scaling to 300+ Brands with Independent Deployments</em>
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Live Brand Examples
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {brandLinks.map((brand) => (
          <li key={brand.url}>
            <a
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 rounded-lg shadow hover:bg-gray-100 border border-gray-200 transition text-blue-600 font-medium"
            >
              {brand.name} →
            </a>
          </li>
        ))}
      </ul>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Business Impact
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>🚀 4x user growth (2018-2022)</li>
          <li>🛒 22% higher checkout conversions</li>
          <li>⚡ 35% faster CI/CD pipelines</li>
          <li>🐞 70% reduction in UI bugs</li>
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
                  A[Root Container] -->|Dynamic Loading| B[Checkout MF]
                  A -->|Federated Routes| C[Dashboard MF]
                  A -->|Shared Contracts| D[Design System]
                  B -->|API| E[Node.js BFF]
                  C -->|WebSockets| F[Real-Time Service]
                  D -->|Versioned| G[NPM Private Registry]`}
            />
          </div>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Key Decisions
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Webpack Module Federation for runtime integration</li>
            <li>BFF pattern to avoid direct microservices coupling</li>
            <li>Semver contracts for design system compatibility</li>
          </ul>
        </section>
        <div>
          <h3 className="text-xl font-medium text-gray-700 mb-1">
            2. Dependency Management
          </h3>
          <div className="bg-gray-100 p-4 rounded border border-gray-300 text-gray-500 italic">
            <MermaidChart
              chart={`graph LR
                  A["Root"] --> B["checkout@1.2.0"]
                  A --> C["dashboard@2.1.0"]
                  B --> D["shared-components@^3.4.0"]
                  C --> D
                  D --> E["react-router@6.3.0"]
                  F["CI/CD Pipeline"] -->|"Enforces"| G["Dep-Check Bot"]`}
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
            Automated dependency checker (blocked 80% of version conflicts)
          </li>
          <li>Visual regression testing for shared component updates</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Challenges & Solutions
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-700">
            1. Performance at Scale
          </h3>
          <p className="text-gray-700 mt-1">
            Problem: Checkout MF TTI increased 300ms per added brand
          </p>
          <p className="text-gray-700">Solution:</p>
          <ul className="list-disc list-inside text-gray-700 ml-5">
            <li>Implemented brand-specific code splitting</li>
            <li>Prefetching strategy based on user geo/IP</li>
          </ul>
          <p className="text-gray-700">
            Result: Maintained &lt;1.2s TTI across all 300 brands
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-700">
            2. Cross-Team Coordination
          </h3>
          <p className="text-gray-700 mt-1">
            Problem: Design system breaks in 30% of deployments
          </p>
          <p className="text-gray-700">Solution:</p>
          <ul className="list-disc list-inside text-gray-700 ml-5">
            <li>Created "Golden Path" starter templates</li>
            <li>
              Automated upgrade assistant (reduced upgrade time from 2 weeks → 2
              days)
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-700">
            3. Testing Strategy
          </h3>
          <p className="text-gray-700 mt-1">
            Problem: Flaky E2E tests with 40% failure rate
          </p>
          <p className="text-gray-700">Solution:</p>
          <ul className="list-disc list-inside text-gray-700 ml-5">
            <li>Isolated test environments per MF</li>
            <li>Playwright Component Testing for shared modules</li>
          </ul>
          <p className="text-gray-700">Result: 95% test reliability</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Technical Leadership Impact
        </h2>

        <div className="mb-4">
          <h3 className="text-xl font-medium text-gray-700">
            1. Standards & Documentation
          </h3>
          <ul className="list-disc list-inside text-gray-700 ml-5">
            <li>Authored Micro-Frontend Playbook (adopted company-wide)</li>
            <li>Led monthly architecture office hours</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium text-gray-700">2. Mentorship</h3>
          <ul className="list-disc list-inside text-gray-700 ml-5">
            <li>Trained 4 engineers to MF tech lead level</li>
            <li>Onboarded Uber partnership team in 3 weeks</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-700">
            3. Business Alignment
          </h3>
          <ul className="list-disc list-inside text-gray-700 ml-5">
            <li>Partnered with PMs to define SLAs per brand tier</li>
            <li>Reduced AWS bills by 18% through bundle analysis</li>
          </ul>
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
