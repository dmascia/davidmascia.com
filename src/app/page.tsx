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
export default function Home() {
  const [value, setValue] = useState(0);
  return (
    <>
      <Layout>
        <>
          {/* <Container maxWidth="m"> */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 6, md: 8 }}>
                <p>xs=6 md=8</p>
              </Grid>
              <Grid size={{ xs: 6, md: 4 }}>
                <p>xs=6 md=4</p>
              </Grid>
              <Grid size={{ xs: 6, md: 4 }}>
                <p>xs=6 md=4</p>
              </Grid>
              <Grid size={{ xs: 6, md: 8 }}>
                <p>xs=6 md=8</p>
              </Grid>
            </Grid>
          </Box>
          {/* </Container> */}
          <Box sx={{ width: 500 }}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
              <BottomNavigationAction
                label="Favorites"
                icon={<FavoriteIcon />}
              />
              <BottomNavigationAction
                label="Nearby"
                icon={<LocationOnIcon />}
              />
            </BottomNavigation>
          </Box>
        </>
      </Layout>
    </>
  );
}
