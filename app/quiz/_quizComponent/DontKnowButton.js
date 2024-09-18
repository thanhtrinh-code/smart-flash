import { Box, Button } from '@mui/material'
import React from 'react'

export default function DontKnowButton({handleClick, answer, setOpenCamera, openCamera}) {
  return (
    <Box width='100%' display='flex' sx={{
      justifyContent: {
        xs: 'flex-end',
        md: 'space-between',
      }
    }}>
      <Button variant='contained' onClick={() => setOpenCamera(open => !open)}
      sx={{
      padding: '0.3rem',
      fontSize: '1rem',
      display: {
        xs: 'none',
        md: 'flex',
      }
      }}>
        {openCamera ? 'Close Camera' : 'Open Camera'}
      </Button>
    <Button onClick={handleClick} disabled={answer}
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
      width: {
        xs: '100%',
        md: 'auto',
      }
    }}
  >
    Don&apos;t Know
  </Button>
  
                          </Box>
  )
}
