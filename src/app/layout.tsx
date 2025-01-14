"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>David Mascia | Software Engineer & Fullstack Developer</title>
        <meta
          name="keywords"
          content="David Mascia, Software Engineer, Fullstack Developer, Programming Services, Web Development, React Developer, Next.js Expert, Python Developer, Django Backend, Mobile App Development, React Native Developer, Scalable Web Applications, Custom Web Development, Resume of Software Engineer, Developer Portfolio, Programming Services Keyport NJ, Hire Software Engineer, Senior Developer, UI/UX Optimization, Microservices Architecture, Backend Solutions, Frontend Developer, Freelance Web Developer, Software Engineer Portfolio, Resume Developer, Web App Developer, Tech Consultant, JavaScript Expert, TypeScript Developer, Fullstack Programming Services"
        />
        <meta
          property="og:title"
          content="David Mascia | Software Engineer & Fullstack Developer"
        />
        <meta
          property="og:description"
          content="Explore my portfolio, programming services, and resume. Over 20 years of experience building scalable, high-performance web applications using React, Python, Django, and more."
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/D4E03AQH2YwOvFWBL4A/profile-displayphoto-shrink_200_200/B4EZRNjlKuGwAY-/0/1736467961905?e=1742428800&v=beta&t=mpEMTbR1XMwL-FbpWN64zazmsIQe1htqZVbrPcdBCd8"
        />
        <meta property="og:url" content="https://www.davidmascia.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="David Mascia | Software Engineer & Fullstack Developer"
        />
        <meta
          name="twitter:description"
          content="Discover my professional journey, innovative projects, and programming services. Specializing in scalable web and mobile app development."
        />
        <meta
          name="twitter:image"
          content="https://media.licdn.com/dms/image/v2/D4E03AQH2YwOvFWBL4A/profile-displayphoto-shrink_200_200/B4EZRNjlKuGwAY-/0/1736467961905?e=1742428800&v=beta&t=mpEMTbR1XMwL-FbpWN64zazmsIQe1htqZVbrPcdBCd8"
        />

        <meta
          name="description"
          content="Welcome to David Mascia's professional website. View my resume, portfolio, and programming services for scalable web and mobile applications."
        />
        <link rel="icon" type="image/x-icon" href="/myicon.ico"></link>
      </head>
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
