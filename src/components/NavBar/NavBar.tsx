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
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: "64px", // Adjust the height as per your requirement
  [theme.breakpoints.down("sm")]: {
    height: "90px", // Increase the height for mobile view
  },
}));

const StyledMenuIcon = styled(MenuIcon)(({ theme }) => ({
  fontSize: theme.spacing(3), // Adjust the size as per your requirement
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(6), // Increase the size for mobile view
  },
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  fontSize: "rem", // Adjust the font size as per your requirement
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.6rem", // Increase the font size for mobile view
  },
}));

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
    <StyledAppBar position="fixed">
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
              <StyledMenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={handleDrawerClose}
            >
              <List>
                <ListItem button onClick={handleDrawerClose}>
                  <StyledListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={handleDrawerClose}>
                  <StyledListItemText primary="About" />
                </ListItem>
                <ListItem button onClick={handleDrawerClose}>
                  <StyledListItemText primary="Services" />
                </ListItem>
                <ListItem button onClick={handleDrawerClose}>
                  <StyledListItemText primary="Contact" />
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
    </StyledAppBar>
  );
}

export default NavBar;
