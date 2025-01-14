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
        <link rel="icon" type="image/x-icon" href="./myicon.ico"></link>
      </head>
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
