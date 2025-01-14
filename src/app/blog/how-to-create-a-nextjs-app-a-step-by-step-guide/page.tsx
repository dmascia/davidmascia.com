"use client";
import Layout from "@/components/Layout/layout";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LetsConnect from "@/components/LetsConnect/";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box mt={8}>
          <Typography variant="h2" component="h1">
            How to Create a Next.js App: A Step-by-Step Guide
          </Typography>
          <Grid container spacing={3} columns={12}>
            <Grid size="12">
              <Box
                sx={{ display: "flex", gap: "15px", flexDirection: "column" }}
              >
                <Typography variant="p" component="p">
                  Next.js is a powerful React framework for building scalable,
                  production-ready web applications. With built-in features like
                  server-side rendering (SSR), static site generation (SSG), and
                  API routes, it’s a go-to solution for developers looking to
                  enhance the performance and SEO of their projects.
                </Typography>
                <Typography variant="p" component="p">
                  In this blog post, we’ll walk you through the process of
                  creating a new Next.js application from scratch.
                </Typography>
                <Typography variant="h6" component="p">
                  Step 1: Prerequisites
                </Typography>
                <Typography variant="p" component="p">
                  Before starting, ensure you have the following tools installed
                  on your system:
                  <br /> 1. Node.js: Download and install the latest stable
                  version from{" "}
                  <Link href="https://nodejs.org/en">Node.js.</Link> <br />
                  2. npm or Yarn: npm comes with Node.js by default, or you can
                  install <Link href="https://yarnpkg.com/">Yarn</Link>. <br />
                  3. Code Editor: Use a code editor like{" "}
                  <Link href="https://code.visualstudio.com/">
                    Visual Studio Code
                  </Link>
                  .
                </Typography>
                <Typography variant="h6" component="p">
                  Step 2: Setting Up Your Next.js App
                </Typography>
                <Typography variant="p" component="p">
                  Next.js provides a CLI tool to create a new app quickly.
                  Follow these steps:
                </Typography>
                <Typography variant="h7" component="p">
                1. Create a New Project
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box pt={4}>
            <LetsConnect />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
