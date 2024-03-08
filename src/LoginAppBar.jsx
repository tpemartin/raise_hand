import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';


function LoginButton() {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });
  
  return (
    <Button color="inherit" onClick={() => login()}>Login</Button>
  );
}


export default function LoginAppBar() {
  return (
    <Box sx={{ flexGrow: 1,}}>
      <AppBar position="fixed" sx={{position: "fixed",
    top: 0,
    left: 0 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <LoginButton/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}