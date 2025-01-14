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

const cards = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Delivering responsive, intuitive, and visually stunning user interfaces.",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Building reliable, scalable, and efficient server-side solutions.",
  },
  {
    id: 3,
    title: "Full-Stack Engineering",
    description:
      "End-to-end application development for a seamless user journey.",
  },
  {
    id: 4,
    title: "Code Audits & Optimization",
    description:
      "Improving the performance, readability, and maintainability of your codebase.",
  },
  {
    id: 5,
    title: "Custom Software Solutions",
    description: "Tailored solutions to meet your unique business needs.",
  },
  {
    id: 6,
    title: "Technical Leadership & Mentorship",
    description: "Building and guiding engineering teams to success",
  },
  {
    id: 7,
    title: "Consulting & Strategy",
    description: "Building and guiding engineering teams to success. ",
  },
];

export default function Home() {
  const [selectedCard, setSelectedCard] = React.useState(0);
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
            <Grid>
              <Box>
                <Typography variant="h2" component="h1">
                  Services
                </Typography>

                <Typography variant="h6" component="h2">
                  I specialize in designing and building high-performance,
                  user-focused applications that scale effortlessly. My
                  extensive experience ensures that your project is not only
                  functional but also optimized for success. Here’s how I can
                  help:
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
                  {cards.map((card, index) => (
                    <Card key={card.id}>
                      <CardActionArea
                        onClick={() => setSelectedCard(index)}
                        data-active={selectedCard === index ? "" : undefined}
                        sx={{
                          height: "100%",
                          "&[data-active]": {
                            backgroundColor: "action.selected",
                            "&:hover": {
                              backgroundColor: "action.selectedHover",
                            },
                          },
                        }}
                      >
                        <CardContent sx={{ height: "100%" }}>
                          <Typography variant="h5" component="div">
                            {card.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {card.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
                </Box>
                <Typography variant="h6" component="h2" mt={8}>
                  Contact me today on{" "}
                  <Link href="https://www.linkedin.com/in/davidmascia/">
                    Linkedin
                  </Link>{" "}
                  to discuss your project or explore how I can bring value to
                  your team.
                </Typography>
              </Box>

              <Box pt={4}>
                <LetsConnect />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
