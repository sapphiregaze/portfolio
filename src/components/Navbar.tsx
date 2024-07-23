import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import Link from "next/link";

export const Navbar = () => {
  const items = [
    { label: "About", link: "/about" },
    { label: "Projects", link: "/project" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <AppBar elevation={0} sx={{ backgroundColor: "transparent" }}>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex" }}>
          <Box
            component="img"
            alt="A PNG of the word SapphireGaze."
            src="/sapphiregaze.png"
            sx={{
              padding: 3,
              height: "auto",
              width: "100%",
              maxWidth: 300,
            }}
          />
          <Toolbar sx={{ marginLeft: "auto" }}>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {items.map((item) => (
                <Button
                  key={item.label}
                  variant="text"
                  sx={{ color: "#002F00", margin: 1, fontSize: 20 }}
                >
                  <Link href={item.link}>{item.label}</Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};
