import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function PrevAndNext({index, handleNext, handlePrev, flashcardLength}) {
  return (
    <Box width='60vw' display='flex' justifyContent='space-around' pt={1.1}>
          <Button variant='contained' disabled={index === 0} onClick={handlePrev}>
            Prev
          </Button>
          <Typography sx={{alignContent: 'center'}}>
            Press on space to flip the card or Click on the card to flip
          </Typography>
          <Button variant='contained' disabled={index === flashcardLength} onClick={handleNext}>
            Next
          </Button>
  
        </Box>
  )
}
