import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: "#fafafa", color: "black" }}
      elevation={4}
    >
      <Toolbar>
        <Grid container>
          <Grid item xs={true}>
            <Button href="/" color="inherit">
              <Typography variant="h4">Our Store</Typography>
            </Button>
          </Grid>
          <Grid item xs={true}>
            <Button href="/cart" color="inherit">
              Cart (0)
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
