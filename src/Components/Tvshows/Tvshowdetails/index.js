import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useParams } from "react-router-dom";
import axios from "axios";
import Tvshowrecommendations from "./Tvshowrecommendations";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const Index = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (item) {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=8af676c968edd09419e7361d6dcd4805`
        )
        .then((res) => setItem(res.data));
    }
  }, [item]);

  // useEffect(() => {
  //   console.log(item);
  // }, [item]);

  return (
    <Stack>
      <Container
        maxWidth="xl"
        sx={{
          alignContent: "center",
        }}
      >
        <Grid
          container
          columnSpacing={5}
          mt={10}
          alignItems="center"
          alignContent={"center"}
        >
          <Grid item md={3} sm={12}>
            <img
              src={`${IMG_URL}` + item?.poster_path}
              width="100%"
              height="500px"
            />
          </Grid>
          <Grid item md={9} sm={12}>
            <Stack spacing={3}>
              <Stack direction="row" alignItems="center" spacing={3}>
                <Typography
                  sx={{
                    fontSize: "2.1rem",
                    fontWeight: "550",
                  }}
                >
                  {item?.original_name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: "550",
                  }}
                >
                  {item?.tagline}
                </Typography>
              </Stack>
              <Stack direction={{ sm: "column", md: "row" }} spacing={10}>
                <Stack spacing={3}>
                  <Stack>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "gray",
                      }}
                    >
                      Language
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                      }}
                    >
                      {item?.original_language}
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "gray",
                      }}
                    >
                      Rating
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                      }}
                    >
                      {item?.vote_average}
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "gray",
                      }}
                    >
                      Run time:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                      }}
                    >
                      {item?.episode_run_time + "min"}
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "gray",
                      }}
                    >
                      Number of Seasons
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                      }}
                    >
                      {item?.number_of_seasons}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack spacing={3}>
                  <Stack>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "gray",
                      }}
                    >
                      Premiured on
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                      }}
                    >
                      {item?.first_air_date}
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "gray",
                      }}
                    >
                      No of Ratings
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                      }}
                    >
                      {item?.vote_count}
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "gray",
                      }}
                    >
                      Origin
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        cursor: "pointer",
                      }}
                    >
                      <a href={`${item?.homepage}`} target="_blank">
                        {item?.homepage}
                      </a>
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "gray",
                      }}
                    >
                      Episodes per Season
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                      }}
                    >
                      {item?.number_of_episodes}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack>
                <Typography
                  variant="body1"
                  sx={{
                    color: "gray",
                    pt: 3,
                  }}
                >
                  Description
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1.3rem",
                  }}
                >
                  {item?.overview}
                  {/* <span
              style={{
                padding: "0rem",
              }}
              dangerouslySetInnerHTML={{
                __html: `${item?.show?.summary}`,
              }}
            /> */}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Typography
        sx={{
          fontSize: "3.5rem",
          fontWeight: "bold",
        }}
      >
        Recommended
      </Typography>
      <Tvshowrecommendations />
    </Stack>
  );
};
export default Index;
