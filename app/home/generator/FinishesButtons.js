import { Box, Button } from '@mui/material'
import React from 'react'

export default function FinishesButtons({
    handlePrev,
    handleGenerate, initial
}) {
    if(!initial){
    return;
  }
  return (
    <Box height='60vh' alignContent='center'>
          
          <Button
  variant='outlined'
  onClick={handlePrev}
  sx={{
    color: '#424242', // Dark grey text color
    borderColor: '#424242', // Dark grey border
    '&:hover': {
      backgroundColor: '#bdbdbd', // Medium grey on hover
      borderColor: '#424242',
    },
    borderRadius: 8,
    px: 2,
    py: 1,
  }}
>
  Back
</Button>

<Button
  variant='outlined'
  onClick={handleGenerate}
  sx={{
    mx: 3,
    color: '#1e88e5', // Medium blue text color
    borderColor: '#1e88e5', // Medium blue border
    '&:hover': {
      backgroundColor: '#90caf9', // Light blue on hover
      borderColor: '#1e88e5',
    },
    borderRadius: 8,
    px: 2,
    py: 1,
  }}
>
  Regenerate
</Button>
        </Box>
  )
}

