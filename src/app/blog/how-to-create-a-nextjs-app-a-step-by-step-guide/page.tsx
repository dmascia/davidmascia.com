"use client";
import Layout from "@/components/Layout/layout";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LetsConnect from "@/components/LetsConnect/";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import { grey } from "@mui/material/colors";

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
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography variant="p" sx={{ color: grey[50] }}>
                        $ npx create-next-app@latest my-nextjs-app
                      </Typography>
                    </Box>
                  </Paper>
                  Alternatively, if you’re using Yarn:
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography variant="p" sx={{ color: grey[50] }}>
                        $ yarn create next-app my-nextjs-app
                      </Typography>
                    </Box>
                  </Paper>
                  Replace my-nextjs-app with your desired project name. You will
                  be prompted to select some configuration options, such as
                  TypeScript support, ESLint setup, or Tailwind CSS. Select the
                  ones that fit your project needs.
                </Typography>
                <Typography variant="h7" component="p">
                  2. Navigate to Your Project Directory
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography variant="p" sx={{ color: grey[50] }}>
                        $ cd my-nextjs-app
                      </Typography>
                    </Box>
                  </Paper>
                </Typography>
                <Typography variant="h7" component="p">
                  3. Start the Development Server Run the following command to
                  start the development server:
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography variant="p" sx={{ color: grey[50] }}>
                        npm run dev
                      </Typography>
                    </Box>
                  </Paper>
                  By default, your app will be accessible at
                  http://localhost:3000.
                </Typography>
                <Typography variant="h6" component="p">
                  Step 3: Exploring the Project Structure
                </Typography>
                <Typography variant="p" component="p">
                  Here’s what the basic folder structure looks like:
                  <br /> • pages/: Contains the application’s pages. Files here
                  automatically map to routes. <br />• public/: Static files
                  like images and fonts. <br />• styles/: CSS modules and global
                  styles.
                </Typography>
                <Typography variant="h6" component="p">
                  Step 4: Creating Your First Page
                </Typography>
                <Typography variant="p" component="p">
                  1. Open the pages folder.
                  <br />
                  2. Create a new file, about.js.
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography variant="p" sx={{ color: grey[50] }}>
                        <code>
                          export default function About() &#123; return (
                          &lt;div&gt;&lt;h1&gt;About Us&lt;/h1&gt;&lt;p&gt;This
                          is the about page of our Next.js
                          app.&lt;/p&gt;&lt;/div&gt; )&#125;
                        </code>
                      </Typography>
                    </Box>
                  </Paper>
                  3. Save the file and navigate to http://localhost:3000/about
                  to see your new page in action.
                </Typography>
                <Typography variant="h6" component="p">
                  Step 5: Styling Your Application
                </Typography>
                <Typography variant="p" component="p">
                  1. Open styles/Home.module.css.
                  <br />
                  2. Add the following styles:
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography variant="p" sx={{ color: grey[50] }}>
                        <code>
                        .container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

h1 {
  color: #0070f3;
  font-size: 2.5rem;
  text-align: center;
}
                        </code>
                      </Typography>
                    </Box>
                  </Paper>
                  3. Save the file and navigate to http://localhost:3000/about
                  to see your new page in action.
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
