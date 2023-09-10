import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fafafa' , color:"black" }}>
      <Toolbar>
        <Typography variant="h6">
          Our Store
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
