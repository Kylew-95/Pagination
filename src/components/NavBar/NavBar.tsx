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
  createTheme,
  ThemeProvider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const theme = createTheme({
  // Define your theme configuration here
});

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
    <AppBar position="fixed">
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
                <ListItem onClick={handleDrawerClose}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem onClick={handleDrawerClose}>
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem onClick={handleDrawerClose}>
                  <ListItemText primary="Services" />
                </ListItem>
                <ListItem onClick={handleDrawerClose}>
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <List sx={{ display: "flex", alignItems: "center" }}>
            <ListItem>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
