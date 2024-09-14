import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function ContinueButton({handleContinue}) {
  return (
    <Box width="100%"
        bgcolor="black"
        position="absolute"  
        bottom={0} 
        left={0}  
        p={2.5}
        display='flex'
        justifyContent='center'
        alignItems='center'
         gap={3}
      >
        <Typography sx={{ color: 'white', fontSize: '1.4rem' }}>
          Press any key to continue or hit
        </Typography>
        <Button variant='contained' sx={{py:1, px:3, fontSize: '1.1rem'}} onClick={handleContinue}>
            Continue
        </Button>
                </Box>
  )
}
