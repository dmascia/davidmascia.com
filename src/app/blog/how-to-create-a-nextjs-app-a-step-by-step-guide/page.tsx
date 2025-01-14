"use client";
import Layout from "@/components/Layout/layout";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LetsConnect from "@/components/LetsConnect/";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

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
              <Box>
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
                  on your system:<br/> 1. Node.js: Download and install the latest
                  stable version from Node.js. <be2. npm or Yarn: npm comes with
                  Node.js by default, or you can install Yarn. 3. Code Editor:
                  Use a code editor like Visual Studio Code.
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
