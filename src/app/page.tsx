"use client";
import { useState } from "react";
import Layout from "@/components/Layout/layout";
import Paper from "@mui/material/Paper";
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
          <Container maxWidth="sm">
            <Box sx={{ height: "100vh" }}> </Box>
          </Container>
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
