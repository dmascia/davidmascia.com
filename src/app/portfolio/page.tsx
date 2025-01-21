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
import amazon from "./cardcash/amazon.png";
import stjude from "./cardcash/stjude.png";
import wayfair from "./cardcash/wayfair.png";
import speedway from "./cardcash/speedway.png";
import ios from "./cardcash/ios.png";
import mobile1 from "./cardcash/mobile1.png";
import mobile2 from "./cardcash/mobile2.png";
import mobile3 from "./cardcash/mobile3.png";
import premier from "./cardcash/premier.png";
import {
  // AppBar,
  // Toolbar,
  // Typography,
  // Container,
  // Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  // Avatar,
  CardMedia,
  // Box,
  IconButton,
} from "@mui/material";
const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1.",
    image: "https://via.placeholder.com/400x200", // Replace with actual image URL
  },
  {
    title: "Project 2",
    description: "A brief description of project 2.",
    image: "https://via.placeholder.com/400x200", // Replace with actual image URL
  },
  {
    title: "Project 3",
    description: "A brief description of project 3.",
    image: "https://via.placeholder.com/400x200", // Replace with actual image URL
  },
];

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
            <Grid>
              <Typography variant="h4" component="h2">
                Blossm Chrome Extension
              </Typography>
              <Typography variant="body1" gutterBottom>
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
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(min(285px, 100%), 1fr))",
                  gap: 2,
                }}
              >
                <Image src={blossm1} height="300" alt="" />
                <Image src={blossm2} height="300" alt="" />
                <Image src={blossm4} height="300" alt="" />
              </Box>
            </Grid>
            <Grid>
              <Typography variant="h4" component="h2">
                Volume Media
              </Typography>
              <Typography variant="body1" gutterBottom>
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
              <Image src={volume1} height="300" alt="" />
              <br />
              <Image src={volume2} height="300" alt="" />
              <br />
              <Image src={volume3} height="300" alt="" />
            </Grid>
            <Grid>
              <Typography variant="h4" component="h2">
                CardCash.com
              </Typography>
              <Typography variant="body1" gutterBottom>
                Explore highlights from our transformative projects and
                partnerships, showcasing innovation and leadership:
                <br />
                • Strategic Partnerships: Proud collaborations with industry
                leaders like Speedway, Wayfair, Amazon, and St. Jude, driving
                impactful solutions and delivering value to diverse audiences.
                <br />
                • React Native Mobile App: A sleek and efficient mobile app
                developed under my leadership, built with React Native to
                provide seamless cross-platform experiences, enhanced usability,
                and modern design.
                <br />
                • Bulk Seller Tool Launch: Introducing a powerful bulk seller
                tool designed for efficiency and scalability, empowering users
                to manage high-volume transactions with ease and precision.
                <br />
                These milestones reflect a commitment to building cutting-edge,
                user-focused solutions that inspire and deliver measurable
                results.
                <br />
              </Typography>
              <Image src={amazon} height="300" alt="" />
              <br />
              <Image src={stjude} height="300" alt="" />
              <br />
              <Image src={wayfair} height="300" alt="" />
              <br />
              <Image src={speedway} height="300" alt="" />
              <br />
              <Image src={premier} height="300" alt="" />
              <Box
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(min(225px, 100%), 1fr))",
                  gap: 2,
                }}
              >
                <Image src={ios} height="300" alt="" />
                <Image src={mobile1} height="300" alt="" />
                <Image src={mobile2} height="300" alt="" />
                <Image src={mobile3} height="300" alt="" />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="#" target="_blank">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box pt={4}>
          <LetsConnect />
        </Box>
      </Container>
    </Layout>
  );
}
