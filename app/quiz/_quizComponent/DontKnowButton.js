import { Box, Button } from '@mui/material'
import React from 'react'

export default function DontKnowButton() {
  return (
    <Box width='100%' display='flex' justifyContent='flex-end'>
    <Button
    sx={{
      padding: '0.3rem',
      fontSize: '1rem',
      backgroundColor: "#007bff",  // Initial background color
      color: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        backgroundColor: '#0056b3',  // Hover background color
      },
    }}
  >
    Don't Know
  </Button>
  
                          </Box>
  )
}
