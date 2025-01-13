"use client";
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
import { red, grey } from "@mui/material/colors";
import Link from "next/link";

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
                  Crafting Scalable Solutions, Driving Innovation, Delivering
                  Impact.
                </Typography>
                <Typography variant="p" component="p">
                  <br />
                  Hi, I’m David Mascia, a seasoned Software Engineer from New
                  Jersey, with over 20 years of hands-on experience creating
                  impactful, scalable, and user-centric applications.
                  <br /> <br />
                  Throughout my career, I’ve delivered measurable results in
                  performance optimization, user engagement, and operational
                  efficiency. At Volume Media, I enhanced user engagement by 85%
                  and improved frontend performance by 75% with Next.js,
                  TypeScript, Python, and Django. At CardCash, I successfully
                  led the migration to a microservices architecture, driving a
                  4x growth in users and an 80% revenue boost.
                  <br /> <br />
                  My expertise spans modern web technologies, including React,
                  Redux, Django, and Docker, paired with a deep passion for
                  fostering team collaboration and mentoring the next generation
                  of developers. <br /> <br />
                  Explore my website to see the projects I’ve brought to life
                  and learn more about my journey in software engineering.
                  Whether it’s crafting a seamless user experience or driving
                  architectural innovation, I’m committed to delivering
                  solutions that make an impact.
                </Typography>
              </Box>
              <Box pt={4}>
                <Typography variant="h6" component="h4">
                  Let’s build something amazing together!
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Link href="https://www.linkedin.com/in/davidmascia/">
                    <LinkedInIcon color="primary" fontSize="large" />
                  </Link>
                  <Link href="https://github.com/dmascia">
                    <GitHubIcon fontSize="large" sx={{ color: grey[900] }} />
                  </Link>
                  <Link href="https://www.youtube.com/@davidmasciatutorials">
                    <YouTubeIcon sx={{ color: red[500] }} fontSize="large" />
                  </Link>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
