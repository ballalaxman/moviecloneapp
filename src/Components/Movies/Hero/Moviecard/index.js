import React from "react";
import Rating from "@mui/material/Rating";
import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

export const Moviecard = ({ item, image }) => {
  const [mouseHover, setMouseHover] = React.useState(false);

  const onmouseOver = () => {
    setMouseHover(true);
  };
  const onmouseLeave = () => {
    setMouseHover(false);
  };
  return (
    <div>
      <Box
        onMouseOver={onmouseOver}
        onMouseOut={onmouseLeave}
        sx={{
          backgroundImage: `url(${image + item.poster_path})`,

          width: "280px",
          height: "450px",
          backgroundSize: "cover",
          ":hover": {
            boxShadow: "inset 140px 225px 140px 225px rgba(0, 0, 0, 0.8)",
          },
          borderRadius: "10px",
          p: 3,
        }}
      >
        {mouseHover && (
          <Stack
            direction="column"
            justifyContent="space-between"
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <Typography
              align="center"
              sx={{
                fontSize: "1.7rem",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {item.original_title}
            </Typography>
            <Typography
              align="center"
              sx={{
                fontSize: "0.9rem",
                color: "white",
              }}
            >
              {item.overview}
            </Typography>
            <Stack direction="row" spacing={14}>
              <Typography
                align="center"
                sx={{
                  fontSize: "1.1rem",
                  color: "white",
                }}
              >
                Release Dt
                <br /> {item.release_date}
              </Typography>
              <Typography
                align="center"
                sx={{
                  fontSize: "1.1rem",
                  color: "white",
                }}
              >
                Director
                <br />
                {item.vote_count}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={8}>
              <Rating name="read-only" value={item.vote_average} readOnly />
              <Button
                sx={{
                  width: "60px",
                  height: "30px",
                  background: "yellow",
                  ":hover": {
                    background: "yellow",
                  },
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "5px",
                }}
              >
                <a
                  href={item.imdbLink}
                  target="blank"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  {" "}
                  IMDb{" "}
                </a>
              </Button>
            </Stack>
          </Stack>
        )}
      </Box>
    </div>
  );
};
export default Moviecard;
