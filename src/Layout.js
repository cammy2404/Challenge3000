import { Outlet, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Footer from "./App/Footer";
import Header from "./App/Header";
import DonateNow from "./App/DonateNow";

const Layout = () => {
  
  const style_top = {
    width: '100%'
  }

  const style_content = {
      backgroundColor: "#f0f0f0",
      paddingLeft: '15%', 
      paddingRight: '15%'
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
      <Stack direction="column"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
          height='100vh'
        >
          <div style={style_top}>
            <Header />
            <div style={style_content}>
              <DonateNow />
              <Outlet />
            </div>
          </div>
          <Footer />
        </Stack>
      </Box>
    </>
  )
};

export default Layout;