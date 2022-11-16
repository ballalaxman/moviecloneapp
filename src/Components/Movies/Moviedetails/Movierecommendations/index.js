import Recommendedcard from "./Recommendedcard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

// const API_KEY = "api_key=8af676c968edd09419e7361d6dcd4805";
// const BASE_URL = "https://api.themoviedb.org/3";
// const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const Index = () => {
  const { id } = useParams();
  const [recommendedMovies, setRecommendedMovies] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=8af676c968edd09419e7361d6dcd4805`
      )
      .then((res) => setRecommendedMovies(res.data.results));
  }, [recommendedMovies]);

  return (
    <Box
      sx={{
        py: 3,
      }}
    >
      <Typography
        data-aos="fade-up"
        sx={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          mx: 6,
          py: 8,
        }}
      >
        {" "}
        Recommended
        {/* {recommendedMovies?.results
          ? "Recommended"
          : "No Recommendations found"} */}
      </Typography>
      <Grid
        container
        // spacing={3}
        columnSpacing={3}
        rowSpacing={10}
      >
        {recommendedMovies &&
          recommendedMovies.map((item) => (
            <Grid
              item
              data-aos="zoom-in"
              xs={2}
              sm={3}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Recommendedcard item={item} image={IMG_URL} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
export default Index;
