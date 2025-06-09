import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-black">
      <h1 className="text-4xl font-bold mb-4">David Mascia</h1>
      <p className="text-lg mb-6">
        Senior Frontend Engineer — React | Next.js | Micro-Frontends
      </p>
      <div className="mb-8">
        <a
          className="text-blue-400 underline mr-4"
          href="https://linkedin.com/in/davidmascia/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="text-blue-400 underline mr-4"
          href="https://github.com/dmascia"
          target="_blank"
        >
          GitHub
        </a>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I'm a senior frontend engineer with 15+ years of experience building
          high-scale, user-focused interfaces that are fast, accessible, and
          impactful. I specialize in React, Next.js, and micro-frontend
          architecture. From launching real-time apps to modularizing massive
          frontend systems, I consistently deliver performance gains, faster
          shipping cycles, and better user outcomes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Core Skills</h2>
        <ul className="list-disc ml-5">
          <li>
            React, Next.js, TypeScript, Redux, Webpack Module Federation,
            TailwindCSS
          </li>
          <li>
            Performance: Lighthouse 100s, Web Vitals, Lazy Loading, Code
            Splitting
          </li>
          <li>Testing: Jest, React Testing Library, Playwright</li>
          <li>Node.js, Express, AWS (S3, EC2, CloudFront), Docker, CI/CD</li>
          <li>Mentorship, Tech Roadmaps, Agile/Scrum</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Selected Projects</h2>
        <div className="mb-4">
          <h3 className="font-bold">Tech With Big D (2024 – Present)</h3>
          <p>
            Built AI-driven frontend tools with 100% Lighthouse accessibility.
            Maintained internal design system using Storybook.
          </p>
          <section className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🧠 Next.js AI Website Builder
            </h2>

            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-semibold text-gray-900">Impact:</span> 40%
                faster development cycles
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-gray-900">Tech Stack:</span>{" "}
                Next.js 14, AI APIs, Accessibility Automation
              </p>
            </div>

            <div className="space-y-4 border-l-4 border-blue-600 pl-4 mb-8">
              <div>
                <h3 className="font-semibold text-blue-600">Highlights:</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Pioneered AI-a11y auditor that auto-fixes WCAG issues (100%
                  compliance).
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/case-studies/techwithbigd-ai-white-builder" passHref>
                <span className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-medium cursor-pointer">
                  View Case Study
                </span>
              </Link>
            </div>
          </section>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Volume Media (2022 – 2024)</h3>
          <p>
            Migrated monolith to modular SSR in Next.js. Replaced jQuery with
            React + Playwright E2E tests. Built real-time chat.
          </p>
          <section className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🧱 Monolith to Modular SSR Migration
            </h2>

            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-semibold text-gray-900">Impact:</span> 75%
                faster page loads (3.2s → 0.8s p95)
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-gray-900">Tech Stack:</span>{" "}
                Next.js, React 18, Module Federation, GCP
              </p>
            </div>

            <div className="space-y-4 border-l-4 border-blue-600 pl-4 mb-8">
              <div>
                <h3 className="font-semibold text-blue-600">Highlights:</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Next.js SSR + Module Federation for independent deploys</li>
                <li>Used Web Workers for off-thread data processing</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/case-studies/volume-monolith-to-modular-ssr"
                passHref
              >
                <span className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-medium cursor-pointer">
                  View Case Study
                </span>
              </Link>
            </div>
          </section>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">CardCash (2015 – 2022)</h3>
          <p>
            Architected micro-frontends, rebuilt with React/Redux, scaled
            partner portals. Launched React Native app and Storybook design
            system.
          </p>
          <section className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🛒 CardCash Micro-Frontend E-Commerce Platform
            </h2>

            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-semibold text-gray-900">Impact:</span>{" "}
                Scaled to 4M users across 300+ brands including Uber and Amazon.
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-gray-900">Tech Stack:</span>{" "}
                React, Webpack Module Federation, Redux, Playwright.
              </p>
            </div>
            <div className="space-y-4 border-l-4 border-blue-600 pl-4 mb-8">
              <div>
                <h3 className="font-semibold text-blue-600">Highlights:</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Architected federated build system enabling 5+ teams to deploy
                  independently —{" "}
                  <span className="text-gray-900 font-medium">
                    35% faster CI/CD
                  </span>
                  .
                </li>
                <li>
                  Designed cross-team design system with SSR support —{" "}
                  <span className="text-gray-900 font-medium">
                    reduced UI bugs by 70%
                  </span>
                  .
                </li>
                <li>
                  Led RFC process for WebSocket → Server-Sent Events migration —{" "}
                  <span className="text-gray-900 font-medium">
                    22% higher transaction success
                  </span>
                  .
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/case-studies/cardcash-micro-frontends" passHref>
                <span className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-medium cursor-pointer">
                  View Case Study
                </span>
              </Link>
            </div>
          </section>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Scivantage (2012 – 2015)</h3>
          <p>
            Led Angular migration, built real-time dashboards, achieved 100%
            uptime across releases.
          </p>
          <section className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              📈 Real-Time Trading Dashboard
            </h2>

            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-semibold text-gray-900">Impact:</span>{" "}
                {`Visualized $10B+ assets with <100ms latency using WebSocket streams`}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-gray-900">Tech Stack:</span>{" "}
                Angular, WebSockets, AWS CloudFront
              </p>
            </div>

            <div className="space-y-4 border-l-4 border-blue-600 pl-4 mb-8">
              <div>
                <h3 className="font-semibold text-blue-600">Highlights:</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Achieved 40% faster rendering vs legacy jQuery system.</li>
                <li>Used Web Workers for off-thread data processing</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/case-studies/scivantage-Real-time-trading-dashboard"
                passHref
              >
                <span className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-medium cursor-pointer">
                  View Case Study
                </span>
              </Link>
            </div>
          </section>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">
            Beatmash / Digital Music Pool (2007 – 2012)
          </h3>
          <p>
            Reduced mobile bounce by 35%, pioneered low-latency streaming using
            HTML5.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Awards & Education</h2>
        <ul className="list-disc ml-5">
          <li>CardCash “Among the Best” (2017–2022)</li>
          <li>Scivantage Project MVP (2014)</li>
          <li>B.S. in Information Technology, Capella University (GPA: 3.6)</li>
          <li>Google Cloud Skill Badge – Load Balancing (2024)</li>
        </ul>
      </section>
    </main>
  );
}
