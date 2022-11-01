import { Typography } from "@mui/material";
import { borderRadius, Box, Container, Stack } from "@mui/system";
import React from "react";
import bgimg from "../../Images/1.png";
import Image2 from "../../Images/image2.jpg";
import Image3 from "../../Images/Image3.jpg";
import Profile from "../../Images/profile.jpeg";

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
          <img src={bgimg} width="100%" height="100%" />
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
            data-aos-anchor-placement="bottom-bottom"
          >
            Get the full details of the movies and Tvshows.
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: "50%",
          }}
        >
          <img
            src={Image2}
            width="100%"
            height="100%"
            data-aos="flip-left"
            data-aos-duration="1500"
          />
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
          <img
            src={Image3}
            width="100%"
            height="100%"
            data-aos="flip-left"
            data-aos-duration="1500"
          />
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
            data-aos-anchor-placement="bottom-bottom"
          >
            Quisque velit nisi, pretium ut lacinia in, elementum id enim.
          </Typography>
        </Stack>
      </Stack>
      <Box
        width="100%"
        height="80px"
        sx={{
          background: "#D3D3D3",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"flex-end"}
          spacing={2}
          sx={{
            py: 1,
            px: 6,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontWeight: "bold",
            }}
          >
            Thankyou for visiting
          </Typography>
          <Box
            sx={{
              width: "60px",
              height: "60px",
              backgroundImage: `url(${Profile})`,
              backgroundSize: "cover",
              border: "3px solid #fff",
              borderRadius: "50%",
            }}
          >
            {/* <img src={Profile} width="100%" /> */}
          </Box>
        </Stack>
      </Box>
    </div>
  );
};
export default Index;
