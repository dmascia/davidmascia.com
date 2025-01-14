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
    title: "How to Create a Next.js App: A Step-by-Step Guide",
    uri: "/blog/how-to-create-a-nextjs-app-a-step-by-step-guide",
    description:
      "I will walk you through the process of creating a new Next.js application from scratch.",
  },
  {
    id: 2,
    title: "How to Create Your First Django App",
    uri: "/blog/how-to-create-your-first-django-app",
    description:
      "I will walk you through the process of creating a new Django application from scratch.",
  },
];

export default function Home() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Layout>
      <Container>
        <Box mt={8}>
          <Typography variant="h2" component="h1">
            Blog
          </Typography>
          <Grid
            mt="8"
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
                <Typography variant="p" component="p">
                  Welcome to my blog! Here, I share insights, tutorials, and
                  tips on software development, programming, and building modern
                  web applications. From mastering frameworks like Next.js and
                  React to solving challenging coding problems with Python and
                  JavaScript, you’ll find a wealth of knowledge to help sharpen
                  your skills and inspire your next project. Whether you’re a
                  seasoned developer or just starting your coding journey,
                  there’s something here for everyone. Let’s learn, build, and
                  innovate together!
                </Typography>
                <Box
                  mt={8}
                  sx={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
                    gap: 2,
                  }}
                >
                  {cards.map((card, index) => (
                    <Link href={card.uri} key={card.id}>
                      <Card>
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
                    </Link>
                  ))}
                </Box>
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
