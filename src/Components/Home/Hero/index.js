import { Container } from "@mui/system";
import Moviecard from "./Moviecard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

// const infos = [
//   {
//     title: "Thor",
//     description:
//       "The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
//     duration: "124",
//     year: "2011",
//     director: "Kenneth Branagh",
//     cast: ["Chris Hemsworth", "Anthony Hopkins", "Natalie Portman"],
//     rating: 3.5,
//     imdbLink: "https://www.imdb.com/title/tt0800369/",
//     poster:
//       "http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
//   },
//   {
//     title: "The Silence of the Lambs",
//     description:
//       "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
//     duration: "118",
//     year: "1991",
//     director: "Jonathan Demme",
//     cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
//     rating: 8.6,
//     imdbLink: "https://www.imdb.com/title/tt0102926/",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
//   },
//   {
//     title: "Starship Troopers",
//     description:
//       "Humans in a fascistic, militaristic future do battle with giant alien bugs in a fight for survival.",
//     duration: "129",
//     year: "1997",
//     director: "Paul Verhoeven",
//     cast: ["Casper Van Dien", "Denise Richards", "Dina Meyer"],
//     rating: 7.2,
//     imdbLink: "https://www.imdb.com/title/tttt0120201/",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BNThlOTFhOGEtZjE2NC00MzMzLThkYWItZjlkNWNlMDAzMGZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,732,1000_AL_.jpg",
//   },
// ];

const API_KEY = "api_key=8af676c968edd09419e7361d6dcd4805";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const Index = () => {
  // const [post, setPost] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}`).then((res) => {
      setPopularMovies(res.data.results);
    });
  }, []);

  // useEffect(() => {
  //   console.log(popularMovies);
  // }, []);

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
        {popularMovies &&
          popularMovies.map((item) => (
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
