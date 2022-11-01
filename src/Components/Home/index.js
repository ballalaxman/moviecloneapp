import { Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import bgimg from "../../Images/2.jpg";
import { motion } from "framer-motion";
import Image2 from "../../Images/Image2.jpg";
import Image1 from "../../Images/Image1.jpg";
import Image3 from "../../Images/Image3.jpg";

export const Index = () => {
  return (
    <div>
      <Stack
        direction="row"
        width="100%"
        sx={{
          height: "915px",
          mt: 9,
        }}
      >
        <Stack
          sx={{
            width: "50%",
          }}
        >
          <img src={Image1} width="100%" height="100%" />
        </Stack>
        <Stack
          justifyContent="center"
          sx={{
            width: "50%",
            height: "100%",
          }}
        >
          <Typography
            align="center"
            sx={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              color: "#000",
            }}
            data-aos="fade-up"
          >
            A forest to hunt your favourite movies and tvshows
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        width="100%"
        sx={{
          height: "845px",
        }}
      >
        <Stack
          justifyContent="center"
          sx={{
            width: "50%",
            height: "100%",
          }}
        >
          <Typography
            align="center"
            sx={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              color: "#000",
            }}
            data-aos="fade-up"
          >
            A forest to hunt your favourite movies and tvshows
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: "50%",
          }}
        >
          <img src={Image2} width="100%" height="100%" />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        width="100%"
        sx={{
          height: "915px",
        }}
      >
        <Stack
          sx={{
            width: "50%",
          }}
        >
          <img src={Image3} width="100%" height="100%" />
        </Stack>
        <Stack
          justifyContent="center"
          sx={{
            width: "50%",
            height: "100%",
          }}
        >
          <Typography
            align="center"
            sx={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              color: "#000",
            }}
            data-aos="fade-up"
          >
            A forest to hunt your favourite movies and tvshows
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};
export default Index;
