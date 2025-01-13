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
import Image from "next/image";

export default function Home() {
  const [value, setValue] = useState(0);
  return (
    <>
      <Layout>
        <>
          <Box
            display="flex"
            justifyContent="center"
            minWidth="100vw"
            m={8}
            pt={3}
          >
            <Grid container spacing={2}>
              <Grid>
                <Typography variant="h1" component="h3">
                  Hi, I’m David Mascia.
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, md: 4 }}>
                <Box sx={{ display: { xs: "flex", md: "flex" }, mr: 2 }}>
                  <Image
                    src={
                      "https://media.licdn.com/dms/image/v2/D4E03AQH2YwOvFWBL4A/profile-displayphoto-shrink_800_800/B4EZRNjlKuGwAc-/0/1736467961931?e=1742428800&v=beta&t=64e_qMWpJ4wzltQqKS2cb-jEyGgksRGP-KMjv2R_XKI"
                    }
                    alt="David Mascia"
                    sizes="100vw"
                    width="100"
                    height="100"
                    style={{ borderRadius: "50px" }}
                  />
                </Box>
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
