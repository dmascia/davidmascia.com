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
const cards = [
  {
    id: 1,
    title: "Plants",
    description: "Plants are essential for all life.",
  },
  {
    id: 2,
    title: "Animals",
    description: "Animals are a part of nature.",
  },
  {
    id: 3,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
];

export default function Home() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Layout>
      <Container>
        <Box mt={8}>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
              gap: 2,
            }}
          >
            {cards.map((card, index) => (
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
            ))}
          </Box>
          <Box pt={4}>
            <LetsConnect />
          </Box>{" "}
        </Box>
      </Container>
    </Layout>
  );
}
