import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Theme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleBurgerClick = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.84)",
        ...(isMobile && {
          backgroundColor: "#FFFFFF",
          "&.MuiAppBar-root": {
            transform: "scale(1, 1)",
            transition: "transform 0.3s ease",
          },
        }),
        ...(!isMobile && {
          "&.MuiAppBar-root": {
            transform: "scale(1, 1.2)",
          },
        }),
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleBurgerClick}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={handleDrawerClose}
            >
              <List>
                <ListItem
                  button
                  onClick={handleDrawerClose}
                  sx={{ cursor: "pointer" }}
                >
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem
                  button
                  onClick={handleDrawerClose}
                  sx={{ cursor: "pointer" }}
                >
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem
                  button
                  onClick={handleDrawerClose}
                  sx={{ cursor: "pointer" }}
                >
                  <ListItemText primary="Services" />
                </ListItem>
                <ListItem
                  button
                  onClick={handleDrawerClose}
                  sx={{ cursor: "pointer" }}
                >
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <List sx={{ display: "flex", alignItems: "center" }}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
