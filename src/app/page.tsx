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
                  Software Engineer | Problem Solver
                </Typography>
                <Typography variant="p" component="p">
                  Empowering Growth Through Scalable Applications and
                  Exceptional User Experiences: 20+ Years of Software
                  Engineering Excellence
                </Typography>
              </Box>
              <Box pt={4}>
                <Typography variant="h6" component="h4">
                  Let's Connect!
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
