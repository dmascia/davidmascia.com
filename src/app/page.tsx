"use client";
import { useState } from "react";
import Layout from "@/components/Layout/layout";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function Home() {
  const [value, setValue] = useState(0);
  return (
    <Layout>
      <Container>
        <Box display="flex" justifyContent="center" mt={8}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid size={6}>
              <Typography variant="h1" component="h1">
                Hi, I’m David Mascia.
              </Typography>
              <Typography variant="h6" component="h2">
                Software Engineer | Problem Solver | Innovator
              </Typography>
              <Typography variant="p" component="p">
                I am a seasoned Lead Software Engineer with a proven track
                record of improving user engagement, performance, and
                operational efficiency. At Volume, I boosted engagement by 85%
                and frontend performance by 75% through optimized UI/UX with
                Next.js and TypeScript and backend improvements with Python and
                Django. At CardCash, I spearheaded the transition to
                microservices, achieving a 4x user growth and an 80% revenue
                increase. Passionate about building scalable, user-centric
                applications, I excel at driving innovation, mentoring teams,
                and delivering measurable results.
              </Typography>
            </Grid>
            <Grid size={6}>
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
              <Box sx={{ display: { xs: "flex", md: "none" }, mt: 6, ml: 2 }}>
                <Image
                  src={
                    "https://media.licdn.com/dms/image/v2/D4E03AQH2YwOvFWBL4A/profile-displayphoto-shrink_800_800/B4EZRNjlKuGwAc-/0/1736467961931?e=1742428800&v=beta&t=64e_qMWpJ4wzltQqKS2cb-jEyGgksRGP-KMjv2R_XKI"
                  }
                  alt="David Mascia"
                  sizes="100vw"
                  width="150"
                  height="150"
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
