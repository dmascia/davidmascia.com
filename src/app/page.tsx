"use client";
import { useState } from "react";
import Layout from "@/components/Layout/layout";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box mt={8}>
          <Grid
            container
            spacing={6}
            columns={12}
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography variant="h1" component="h1">
                  Hi, I’m ...
                </Typography>
                <Typography variant="h1" component="h1">
                  David Mascia
                </Typography>
                <Typography variant="h6" component="h2">
                  Software Engineer | Problem Solver
                </Typography>
                <Typography variant="p" component="p">
                  I am an experienced Software Engineer with over 20 years of
                  hands-on expertise and a proven history of enhancing user
                  engagement, optimizing performance, and improving operational
                  efficiency. At Volume, I increased user engagement by 85% and
                  improved frontend performance by 75% by refining the UI/UX
                  with Next.js and TypeScript, alongside backend enhancements
                  using Python and Django. At CardCash, I led the migration to a
                  microservices architecture, driving a 4x growth in users and
                  an 80% revenue boost. Committed to developing scalable,
                  user-focused applications, I thrive on fostering innovation,
                  mentoring teams, and delivering impactful, measurable
                  outcomes.
                </Typography>
              </Box>
              <Box pt={4}>
                <Typography variant="h6" component="h4">
                  Let's Connect!
                </Typography>
                <Stack direction="row" spacing={2}>
                  <p>
                    <LinkedInIcon color="primary" />
                  </p>
                  <p>
                    <GitHubIcon />
                  </p>
                  <p>
                    <YouTubeIcon color="danger" />
                  </p>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 0, md: 4 }}>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Image
                  src={
                    "https://media.licdn.com/dms/image/v2/D4E03AQH2YwOvFWBL4A/profile-displayphoto-shrink_800_800/B4EZRNjlKuGwAc-/0/1736467961931?e=1742428800&v=beta&t=64e_qMWpJ4wzltQqKS2cb-jEyGgksRGP-KMjv2R_XKI"
                  }
                  alt="David Mascia"
                  sizes="100vw"
                  width="400"
                  height="400"
                  style={{ borderRadius: "50px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
