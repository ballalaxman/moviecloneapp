import React, { useState } from "react";
import { Button, Drawer, Typography, Divider } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";
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
          MOVIEHUNT
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
          zIndex="7"
          width="100%"
          sx={{
            background: "#000",
            color: "#fff",
            boxShadow: 4,
            height: "75px",
            position: "fixed",
            top: "0px",
          }}
        >
          <Stack
            direction={{ sm: "row", xs: "column" }}
            // justifyContent="space-evenly"
            spacing={160}
            flex="start"
            alignItems="center"
            alignContent="center"
            sx={{
              py: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                mx: 6,
                cursor: "pointer",
                display: { xs: "none", sm: "block" },
              }}
              onClick={() => navigate("/")}
            >
              MOVIEHUNT
            </Typography>

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
                    fontSize: "1.1rem",
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
