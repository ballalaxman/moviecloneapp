import Moviecard from "./Moviecard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

const API_KEY = "api_key=8af676c968edd09419e7361d6dcd4805";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/tv?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const Index = () => {
  const [popularTvshows, setpopularTvshows] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}`).then((res) => {
      setpopularTvshows(res.data.results);
    });
  }, []);

  // useEffect(() => {
  //   console.log(popularTvshows);
  // }, [popularTvshows]);
  return (
    <React.Fragment>
      <Grid
        container
        // spacing={3}
        columnSpacing={3}
        rowSpacing={10}
        sx={{
          py: 15,
        }}
      >
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
    </React.Fragment>
  );
};
export default Index;
