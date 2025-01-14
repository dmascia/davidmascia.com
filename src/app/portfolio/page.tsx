"use client";
import * as React from "react";
import Layout from "@/components/Layout/layout";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LetsConnect from "@/components/LetsConnect/";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "next/link";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";
import blossm1 from "./blossm/image2.png";
import blossm2 from "./blossm/image4.png";
import blossm3 from "./blossm/image1.png";
import blossm4 from "./blossm/image5.png";

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
                ownership to display the stats on their Blossm profile: <br />-
                Top % <br />- # of Fans (Subscribers) <br />- # of Profiles
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
                    "repeat(auto-fill, minmax(min(345px, 100%), 1fr))",
                  gap: 2,
                }}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <Image src={blossm1} height="315" />
                    <CardContent>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Select the Blossm Extension to get the pop-up and paste
                        your API key into the field.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <Image src={blossm2} height="315" />
                    <CardContent>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        The API Key for your user is now displaying in the
                        pop-up. Click the icon to the right to copy your API
                        Key.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <Image src={blossm3} height="315" />
                    <CardContent>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        The API Key for your user is now displaying in the
                        pop-up. Click the icon to the right to copy your API
                        Key.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
