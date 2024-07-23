import React from "react";
import Image from "next/image";

import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function WoodlandWonders() {
  const contributors = [
    {
      name: "Jasmine Huang",
      role: "Developer",
      linkedin: "https://www.linkedin.com/in/sapphiregaze/",
    },
    {
      name: "Peilu Tu",
      role: "Developer",
      linkedin: "https://www.linkedin.com/in/peilutu/",
    },
    {
      name: "Jared Baze",
      role: "Developer",
      linkedin: "https://www.linkedin.com/in/jared-baze-29b376272/",
    },
    {
      name: "Lidia Pena-Lauria",
      role: "Developer",
      linkedin: "https://www.linkedin.com/in/lidia-p-aab0932aa/",
    },
    {
      name: "Obaid Rashid",
      role: "Developer",
      linkedin: "https://www.linkedin.com/in/obaid-rashid-8b07242b9/",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
      <Box
        sx={{
          textAlign: "center",
          marginBottom: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src="/woodland-wonders.png"
          alt="Woodland Wonders"
          width={100}
          height={100}
        />
        <Typography variant="h4" component="div">
          Woodland Wonders
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ marginTop: 1 }}
        >
          Uncover the secrets of a deserted town and restore harmony as a
          curious cat in Woodland Wonders!!
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 4, display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            maxWidth: 400,
            textAlign: "center",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.05)" },
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              Source Code
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: 1 }}
            >
              The source code for Woodland Wonders is available on GitHub!
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              size="small"
              color="primary"
              href="https://github.com/sapphiregaze/woodland-wonders"
              target="_blank"
            >
              GitHub Repository
            </Button>
          </CardActions>
        </Card>
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {contributors.map((contributor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  {contributor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {contributor.role}
                </Typography>
                <CardActions sx={{ justifyContent: "center", padding: 1 }}>
                  <IconButton
                    size="small"
                    color="secondary"
                    href={contributor.linkedin}
                    target="_blank"
                    sx={{
                      borderRadius: "50%",
                    }}
                  >
                    <Avatar sx={{ bgcolor: "#002F00" }}>
                      <LinkedInIcon />
                    </Avatar>
                  </IconButton>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
