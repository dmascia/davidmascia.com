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
                  In this blog post, i’ll walk you through the process of
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
                  Step 5: Adding API Routes
                </Typography>
                <Typography variant="p" component="p">
                  Next.js allows you to create backend endpoints directly within
                  the pages/api folder.
                  <br />
                  1. Open pages/api/hello.js.
                  <br />
                  2. Modify the code as follows:
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography variant="p" sx={{ color: grey[50] }}>
                        <code>
                          export default function handler(req, res) &#123;
                          res.status(200).json(&#123; message: 'Hello, world!'
                          &#125;); &#125;
                        </code>
                      </Typography>
                    </Box>
                  </Paper>
                  3. Start the server and visit http://localhost:3000/api/hello
                  to see your API response.
                </Typography>
                <Typography variant="h6" component="p">
                  Step 6: Building for Production
                </Typography>
                <Typography variant="p" component="p">
                  When your app is ready for deployment:
                  <br /> 1. Build your application:
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography variant="p" sx={{ color: grey[50] }}>
                        <code>$ npm run build</code>
                      </Typography>
                    </Box>
                  </Paper>
                  2. Start the production server:
                  <Paper sx={{ backgroundColor: grey[900] }}>
                    <Box p={1}>
                      <Typography variant="p" sx={{ color: grey[50] }}>
                        <code>$ npm start</code>
                      </Typography>
                    </Box>
                  </Paper>
                </Typography>
                <Typography variant="h6" component="p">
                  Conclusion
                </Typography>
                <Typography variant="p" component="p">
                  Congratulations! <br /> You’ve created a fully functional
                  Next.js application, explored the file structure, and built
                  your first page. Next.js offers endless possibilities for
                  creating fast, SEO-friendly, and scalable web applications.
                  Dive deeper into its documentation to unlock even more
                  features, like dynamic routing, middleware, and advanced API
                  integrations.
                  <br />
                  <br />
                  <br />
                  Ready to get started? Build something amazing with Next.js
                  today! 🎉
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
