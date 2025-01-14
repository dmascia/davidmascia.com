"use client";
import * as React from "react";
import Layout from "@/components/Layout/layout";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LetsConnect from "@/components/LetsConnect/";
import Image from "next/image";
import blossm1 from "./blossm/image2.png";
import blossm2 from "./blossm/image4.png";
import blossm4 from "./blossm/image5.png";
import volume1 from "./volume/image1.png";
import volume2 from "./volume/image2.png";
import volume3 from "./volume/image3.png";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box mt={8}>
          <Typography variant="h2" component="h1">
            Portfolio
          </Typography>
          <Grid
            mt={6}
            container
            spacing={6}
            columns={12}
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid size="12">
              <Typography variant="h4" component="h2">
                Blossm Chrome Extension
              </Typography>
              <Typography variant="p" component="p">
                The Blossm Extension is a tool installed directly onto the
                Google Chrome web browser. It is a simple and alternative method
                for Blossm users to securely verify their OnlyFans account
                ownership to display the stats on their Blossm profile: <br />•
                Top % <br />• # of Fans (Subscribers) <br />• # of Profiles
                Following. <br />
                <br /> The extension uses an API Key to get the information. API
                stands for Application Programming Interface and this provides a
                secure and standardized way for applications to work together.
                Simply put, the API key allows your OnlyFans page to talk
                directly to your Blossm account! This does not require you to
                enter your login credentials on Blossm.com, but you do need to
                be signed into your OnlyFans account within your browser for the
                extension to work.
              </Typography>
              <Box
                mt={8}
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(min(285px, 100%), 1fr))",
                  gap: 2,
                }}
              >
                <Image src={blossm1} height="300" />
                <Image src={blossm2} height="300" />
                <Image src={blossm4} height="300" />
              </Box>
            </Grid>
            <Grid size="12">
              <Typography variant="h4" component="h2">
                Volume.com
              </Typography>
              <Typography variant="p" component="p">
                Explore the innovative redesign of the Volume.com profile stream
                page, crafted to deliver an intuitive and engaging user
                experience. The new design highlights:
                <br />
                <br />• Enhanced Video Player: Stream videos with high-quality
                options, complete with seamless Chromecast and Apple AirPlay
                integration for versatile viewing across devices.
                <br />• Interactive Chat Feature: A collapsible chat panel lets
                you connect with other viewers while keeping the video in focus
                or switch to full-screen mode for an immersive experience.
                <br />• Dynamic Profile Integration: Scroll down effortlessly to
                explore detailed user profiles, fostering connections and
                community engagement right from the stream page.
                <br />
                <br />
                This redesign prioritizes accessibility, performance, and user
                satisfaction, making streaming and interaction smoother and more
                enjoyable than ever.
              </Typography>
              <Image src={volume1} height="300" />
              <Image src={volume2} height="300" />
              <Image src={volume3} height="300" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
