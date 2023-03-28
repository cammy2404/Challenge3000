import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Footer from "./Footer";
import Header from "./Header";
import Content from './Content';

function Challenge3000() {

  const style_top = {
    width: '100%'
  }

  return (
    <Content />
    // <Box sx={{ width: '100%' }}>
    //   <Stack direction="column"
    //     justifyContent="space-between"
    //     alignItems="flex-start"
    //     spacing={2}
    //     height='100vh'
    //   >
    //     <div style={style_top}>
    //       <Header />
    //       <Content />
    //     </div>
    //     <Footer />
    //   </Stack>
    // </Box>
  )

}

export default Challenge3000;