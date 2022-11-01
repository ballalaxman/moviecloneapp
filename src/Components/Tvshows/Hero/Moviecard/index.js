import React from "react";
import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import poster from "../../../../Images/poster.jpg";
import star from "../../../../Images/star.png";
import { useNavigate } from "react-router-dom";

export const Moviecard = ({ item, image }) => {
  const navigate = useNavigate();
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
        data-aos="zoom-in"
        sx={{
          backgroundImage: item.poster_path
            ? `url(${image + item.poster_path})`
            : `url(${poster})`,

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
            data-aos="zoom-in"
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
              {item.original_name ? item.original_name : item.original_title}
            </Typography>
            <Typography
              align="center"
              sx={{
                fontSize: "0.9rem",
                color: "white",
              }}
            >
              {item.overview
                ? item.overview.slice(0, 180) + "..."
                : "No Description Avilable"}
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
                <br /> {item.first_air_date}
              </Typography>
              <Typography
                align="center"
                sx={{
                  fontSize: "1.1rem",
                  color: "white",
                }}
              >
                Votes
                <br />
                {item.vote_count}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={17}>
              {/* <Rating name="read-only" value={item.vote_average} readOnly /> */}
              <Stack direction="row" spacing={1}>
                <img src={star} width="20px" height="20px" />
                <Typography
                  sx={{
                    color: "#fff",
                  }}
                >
                  {item.vote_average}
                </Typography>
              </Stack>
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
            <Button
              sx={{
                background: "yellow",
                ":hover": {
                  background: "yellow",
                },
                fontSize: "1rem",
                color: "#000",
                fontWeight: "bold",
                borderRadius: "5px",
              }}
              onClick={() => {
                navigate(`/tvshows/${item.id}`);
              }}
            >
              Show Details
            </Button>
          </Stack>
        )}
      </Box>
    </div>
  );
};
export default Moviecard;
