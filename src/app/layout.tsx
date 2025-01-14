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
        <title>
          David Mascia - Crafting Scalable Solutions, Driving Innovation,
          Delivering Impact.
        </title>
        <meta
          name="keywords"
          content="David Mascia, Software Engineer, Fullstack Developer, Programming Services, Web Development, React Developer, Next.js Expert, Python Developer, Django Backend, Mobile App Development, React Native Developer, Scalable Web Applications, Custom Web Development, Resume of Software Engineer, Developer Portfolio, Programming Services Keyport NJ, Hire Software Engineer, Senior Developer, UI/UX Optimization, Microservices Architecture, Backend Solutions, Frontend Developer, Freelance Web Developer, Software Engineer Portfolio, Resume Developer, Web App Developer, Tech Consultant, JavaScript Expert, TypeScript Developer, Fullstack Programming Services"
        />
        <link rel="icon" type="image/x-icon" href="/myicon.ico"></link>
      </head>
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
