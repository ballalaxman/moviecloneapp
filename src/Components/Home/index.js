import { Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import bgimg from "../../Images/2.jpg";

export const Index = () => {
  return (
    <div>
      <Container
        maxWidth="100%"
        sx={{
          backgroundImage: `url(${bgimg})`,
          boxShadow: "inset 140px 225px 140px 225px rgba(0, 0, 0, 0.8)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "915px",
          py: 10,
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          sx={{
            height: "100%",
          }}
        >
          <Typography
            align="center"
            sx={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>
      </Container>
    </div>
  );
};
export default Index;
