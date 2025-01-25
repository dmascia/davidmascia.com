"use client";
import Layout from "@/components/Layout/layout";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import LetsConnect from "@/components/LetsConnect/";

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
                <Typography variant="body1" gutterBottom>
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
                  Redux, Python, Django, Java, and Docker, paired with a deep passion for
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
                <LetsConnect />
              </Box>
            </Grid>
            <Grid size={{ xs: 0, md: 4 }}>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Image
                  src={
                    "https://media.licdn.com/dms/image/v2/D4E03AQEm1cvDKp7pWA/profile-displayphoto-shrink_400_400/B4EZSZuvBUGgAk-/0/1737745953251?e=1743033600&v=beta&t=pOX1T84BJnDXlzeq8YeqlX5avacRXjvy9xrTRpcmNOc"
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
