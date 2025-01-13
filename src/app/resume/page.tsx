"use client";
import Layout from "@/components/Layout/layout";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LetsConnect from "@/components/LetsConnect/";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function Home() {
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
            <Grid size={{ xs: 12, md: 10 }}>
              <Box>
                <Typography variant="h6" component="h1">
                  David Mascia
                </Typography>

                <Typography variant="h6" component="h2">
                  PROFESSIONAL SUMMARY
                </Typography>
                <Typography variant="p" component="p">
                  I am a seasoned Lead Software Engineer with a proven track
                  record of improving user engagement, performance, and
                  operational efficiency. At Volume, I boosted engagement by 85%
                  and frontend performance by 75% through optimized UI/UX with
                  Next.js and TypeScript and backend improvements with Python
                  and Django. At CardCash, I spearheaded the transition to
                  microservices, achieving a 4x user growth and an 80% revenue
                  increase. Passionate about building scalable, user-centric
                  applications, I excel at driving innovation, mentoring teams,
                  and delivering measurable results.
                </Typography>
                <Typography variant="h6" component="h2">
                  <br />
                  WORK EXPERIENCE
                </Typography>
                <Timeline position="alternate">
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Eat</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Code</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Sleep</TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Repeat</TimelineContent>
                  </TimelineItem>
                </Timeline>
                <Typography variant="p" component="p">
                  Lead Software Engineer, Volume Media SEP 2022 – OCT 2024
                  <br />
                  Lead Software Engineer, CardCash.com JUL 2015 – SEP 2022
                  <br />
                  Software Engineer, Scivantage SEP 2012 – APR 2015
                  <br />
                  Software Engineer (Contract), Digital Music Pool MAY 2008 –
                  JUL 2012
                  <br />
                  Software Engineer, Focus Camera JUL 2005 – APR 2008
                  <br />
                </Typography>
                <Typography variant="h6" component="h2">
                  <br />
                  SKILLS
                </Typography>
                <Typography variant="p" component="p">
                  Languages: JavaScript, Python3, TypeScript, HTML5, CSS3
                  <br />
                  Technologies: Django, Next.js, SQL, Postgres, React, Redux,
                  Storybook, Jest, ESLint, Webpack, Docker, Git
                  <br />
                </Typography>
                <Typography variant="h6" component="h2">
                  <br />
                  EDUCATION
                </Typography>
                <Typography variant="p" component="p">
                  Information Technology, Bachelor of Science, Capella
                  University DEC 2012
                  <br />
                </Typography>
                <Typography variant="h6" component="h2">
                  <br />
                  AWARDS AND ACCOLADES
                </Typography>
                <Typography variant="p" component="p">
                  Project MVP for Wealth Management during the TIAA
                  implementation at Scivantage. 2014
                  <br />
                  “Among the Best” recognition (Highest Level) in Performance
                  Review at CardCash 2017-2022
                  <br />
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
