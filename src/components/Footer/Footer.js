import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

const Footer = () => {
  const theme=useTheme();
  return (
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column'
    },
    py:3,
    my:2
    }}>
<Box>
<Typography variant="caption" sx={{fontSize:'0.62rem'}}>4.3 GB of 15 GB used</Typography>
</Box>
<Box>
  <Typography variant="caption" sx={{fontSize:'0.62rem'}}>Terms <span>&#x2022; </span> Privacy <span>&#x2022; </span> Program Policies</Typography>
</Box>
<Box>
<Typography variant="caption" sx={{fontSize:'0.62rem'}}>Last Account Activity: 1 hour ago</Typography>

</Box>
    </Box>
  )
}

export default Footer