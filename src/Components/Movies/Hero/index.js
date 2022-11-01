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
  TextField,
  InputAdornment,
  Button,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/system";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const Index = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  const [sort, setSort] = useState("popularity.desc");
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=${sort}&page=${page}&api_key=8af676c968edd09419e7361d6dcd4805`
      )
      .then((res) => {
        setPopularMovies(res.data.results);
      });
    window.scrollTo(0, 0);
  }, [sort, page]);

  const handleChange = (event, value) => {
    setSort(event.target.value);
    setPage(value);
  };

  const handleClick = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=8af676c968edd09419e7361d6dcd4805`
      )
      .then((res) => {
        setPopularMovies(res.data.results);
      });
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
            Movies
          </Typography>
          <TextField
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            placeholder="Search here for movies and Tv shows..."
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      borderRadius: "25px",
                      height: "50px",
                      width: "100px",
                    }}
                    onClick={handleClick}
                  >
                    Search
                  </Button>
                </InputAdornment>
              ),
              style: {
                backgroundColor: "#737170",
                borderRadius: "25px",
                height: "50px",
                width: "800px",
                paddingRight: "0px",
              },
            }}
            variant="outlined"
          />
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
                <MenuItem value={"popularity.desc"}>Popular</MenuItem>
                <MenuItem value={"primary_release_date.desc"}>
                  New Arrivals
                </MenuItem>
                <MenuItem value={"vote_average.desc"}>Top Rated</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Container>
      <Grid
        container
        // spacing={3}
        columnSpacing={3}
        rowSpacing={10}
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
      <Stack
        alignItems="center"
        sx={{
          py: 7,
        }}
      >
        <Pagination count={500} page={page} onChange={handleChange} />
      </Stack>
    </Box>
  );
};
export default Index;
