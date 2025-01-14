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
import blossm1 from "@/src/app/portfolio/imgs/image-7.png";

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
                    "repeat(auto-fill, minmax(min(400px, 100%), 1fr))",
                  gap: 2,
                }}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <Image src={blossm1} alt="Picture of the author" />
                    <CardMedia
                      component="img"
                      height="140"
                      image="/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
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
