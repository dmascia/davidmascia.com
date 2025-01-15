import Link from "next/link";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { red, grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function LetsConnect() {
  return (
    <>
      <Typography variant="h6" component="h4">
        Let’s build something amazing together!
      </Typography>
      <Stack direction="row" spacing={2}>
        <Link href="https://www.linkedin.com/in/davidmascia/">
          <LinkedInIcon color="primary" fontSize="large" />
        </Link>
        <Link href="https://github.com/dmascia">
          <GitHubIcon fontSize="large" sx={{ color: grey[900] }} />
        </Link>
        <Link href="https://www.youtube.com/@davidmasciatutorials">
          <YouTubeIcon sx={{ color: red[500] }} fontSize="large" />
        </Link>
        <Link href="https://www.instagram.com/davidmasciatutorials/?igsh=aWk3bTlsNXdkc3pw&ig_mid=5CD188EE-C08D-466F-9918-8D7AEB8A7676">
          <InstagramIcon fontSize="large" />
        </Link>
      </Stack>
    </>
  );
}
