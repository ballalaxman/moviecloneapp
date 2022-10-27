import Moviecard from "./Moviecard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Typography,
  Box,
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Container } from "@mui/system";

const API_KEY = "api_key=8af676c968edd09419e7361d6dcd4805";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/tv?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const Index = () => {
  const [popularTvshows, setpopularTvshows] = useState(null);
  const [sort, setSort] = useState("");

  // useEffect(() => {
  //   if (sort == popularity.desc) {
  //     axios
  //       .get(`${BASE_URL}` + "/discover/tv?sort_by="`${sort}` + `${API_KEY}`)
  //       .then((res) => {
  //         setpopularTvshows(res.data.results);
  //       });
  //   } else if (sort == first_air_date.desc) {
  //     axios
  //       .get(`${BASE_URL}` + "/discover/tv?sort_by="`${sort}` + `${API_KEY}`)
  //       .then((res) => {
  //         setpopularTvshows(res.data.results);
  //       });
  //   } else if (sort == vote_average.desc) {
  //     axios
  //       .get(`${BASE_URL}` + "/discover/tv?sort_by="`${sort}` + `${API_KEY}`)
  //       .then((res) => {
  //         setpopularTvshows(res.data.results);
  //       });
  //   }
  // }, [sort]);

  useEffect(() => {
    if (sort == 1) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=8af676c968edd09419e7361d6dcd4805"
        )
        .then((res) => {
          setpopularTvshows(res.data.results);
        });
    } else if (sort == 2) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/tv?sort_by=first_air_date.desc&api_key=8af676c968edd09419e7361d6dcd4805"
        )
        .then((res) => {
          setpopularTvshows(res.data.results);
        });
    } else if (sort == 3) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/tv?sort_by=vote_average.desc&api_key=8af676c968edd09419e7361d6dcd4805"
        )
        .then((res) => {
          setpopularTvshows(res.data.results);
        });
    }
  }, [sort]);

  // useEffect(() => {
  //   console.log(sort);
  // }, [sort]);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Box
      sx={{
        py: 15,
      }}
    >
      <Container maxWidth="sx">
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            p: 4,
          }}
        >
          <Typography
            align="center"
            sx={{
              fontSize: "2.2rem",
              fontWeight: "550",
            }}
          >
            Popular shows
          </Typography>
          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sort by"
                onChange={handleChange}
                value={sort}
              >
                <MenuItem value={1}>Popular</MenuItem>
                <MenuItem value={2}>New Arrivals</MenuItem>
                <MenuItem value={3}>Top Rated</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Container>
      <Grid container columnSpacing={3} rowSpacing={10}>
        {popularTvshows &&
          popularTvshows.map((item) => (
            <Grid
              item
              xs={2}
              sm={3}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Moviecard item={item} image={IMG_URL} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
export default Index;
