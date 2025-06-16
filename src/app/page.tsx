import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
          Hire David Mascia
        </h1>
        <p className="text-lg text-center mb-4">
          <a
            href="https://www.linkedin.com/in/davidmascia/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://davidmascia.com/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </p>

        <section className="my-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Professional Summary
          </h2>
          <p>
            David Mascia is a Senior Backend Engineer with 15+ years of
            experience architecting and scaling distributed systems. He
            specializes in high-throughput APIs, real-time communication, and
            cloud-native applications using Java 11, Python 3, Django, and
            Spring Boot. David has led engineering teams and modernized
            monolithic platforms into microservices, helping scale products from
            startup to acquisition.
          </p>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Core Skills
          </h2>
          <ul className="grid grid-cols-2 gap-4 list-disc list-inside">
            <li>Java 11 / Spring Boot</li>
            <li>Python 3 / Django / Celery</li>
            <li>Microservices & Distributed Systems</li>
            <li>AWS & GCP Cloud Infrastructure</li>
            <li>CI/CD with GitHub Actions & Docker</li>
            <li>PostgreSQL / Redis / RabbitMQ</li>
            <li>WebSockets & Real-time APIs</li>
            <li>React / Next.js Frontend Integration</li>
            <li>Node.js & Express.js</li>
            <li>Native Mobile Application Integration</li>
          </ul>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Recent Experience
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">Founder – Tech With Big D</h3>
              <p className="text-sm text-gray-600">
                Nov 2024 – Present | Keyport, NJ
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Built serverless platforms using Java 11, Python, AWS Lambda &
                  DynamoDB
                </li>
                <li>
                  Implemented GitHub Actions CI/CD with Docker and blue-green
                  deployments
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Lead Software Engineer – Volume Media
              </h3>
              <p className="text-sm text-gray-600">
                Aug 2022 – Nov 2024 | Remote
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Led team building real-time video streaming with GCP Media
                  CDN, Django & Redis
                </li>
                <li>
                  Developed scalable APIs and mobile backend integration for
                  Kotlin and Swift apps
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Lead Software Engineer, CardCash, inc (Acquired by RDE, Inc.)
              </h3>
              <p className="text-sm text-gray-600">
                Jul 2015 – Aug 2022 | Brick, NJ / Remote
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Migrated monolithic PHP system to microservices (Java 8,
                  Python, Docker, AWS)
                </li>
                <li>
                  Scaled revenue from $16M to $200M and led acquisition
                  transition to RDE, Inc.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Senior Software Engineer, Scivantage, inc (Acquired by
                Refinitiv, Inc.)
              </h3>
              <p className="text-sm text-gray-600">
                Sept 2012 – Jul 2015 | Jersey City, NJ
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Engineered a secure Single Sign-On (SSO) system using Java,
                  PHP5, and Oracle to support 3M+ users, enabling seamless
                  access across services and playing a pivotal role in a $120M
                  acquisition.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Software Engineer, Beatmash, inc (Acquired by Digital Music
                Pool, LLC.)
              </h3>
              <p className="text-sm text-gray-600">
                July 2007 – Sept 2012 | Staten Island, NY
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Built a low-latency streaming solution using PHP5 with AWS S3
                  and CloudFront, handling 1M+ daily downloads and improving
                  throughput by 50%, significantly enhancing user experience and
                  platform scalability.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Hire David?
          </h2>
          <p>
            David blends startup agility with enterprise-grade scalability. His
            work has driven performance gains of 60%, release velocity increases
            of 40%, and supported millions of users with secure, low-latency
            systems. He's ready to bring that experience to a high-impact
            engineering team.
          </p>
        </section>
      </section>
    </main>
  );
}
