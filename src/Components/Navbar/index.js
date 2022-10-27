import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  TextField,
  InputAdornment,
  Button,
  Drawer,
  Typography,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Box, IconButton } from "@mui/material";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Stack } from "@mui/system";
const drawerWidth = 240;

const navItems = [
  {
    id: 0,
    name: "MOVIES",
    path: "/movies",
  },
  {
    id: 1,
    name: "TVSHOWS",
    path: "/tvshows",
  },
  {
    id: 2,
    name: "LOGIN",
    path: "/auth",
  },
];

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color="primary"
        variant="h6"
        sx={{ my: 2, cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
      >
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          TMDB
        </span>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item.name}
                onClick={() => {
                  navigate(`${item.path}`);
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <>
        <Box
          width="100%"
          sx={{
            background: "#000",
            color: "#fff",
            boxShadow: 4,
            height: "80px",
            position: "fixed",
            top: "0px",
          }}
        >
          <Stack
            direction={{ sm: "row", xs: "column" }}
            justifyContent="space-evenly"
            flex="start"
            alignItems="center"
            alignContent="center"
            sx={{
              py: 2,
            }}
          >
            <Stack
              flex="start"
              direction="row"
              width="100%"
              sx={{ display: { sm: "none", padding: "0px" } }}
            >
              <IconButton
                size="large"
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon fontSize="32px" />
              </IconButton>
            </Stack>

            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                cursor: "pointer",
                display: { xs: "none", sm: "block" },
              }}
              onClick={() => navigate("/")}
            >
              TMDB
            </Typography>
            <TextField
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
            <Stack
              direction="row"
              spacing={4}
              sx={{
                display: { sm: "block", xs: "none" },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => {
                    navigate(`${item.path}`);
                  }}
                  sx={{
                    borderBottom: location.pathname.includes(item.path) //For the line under the navbar items
                      ? `2px solid #bfbf`
                      : "none",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Stack>
          </Stack>
          <Box component="nav">
            <Drawer
              color="primary"
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </>

      <Outlet />
    </React.Fragment>
  );
};

export default Index;
