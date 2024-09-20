import { Box, Typography, Button } from '@mui/material'
import React, { useEffect } from 'react'

export default function QuizEndDisplay({handleReset}) {
    useEffect(() => {
        function handleKeyDown(e){
            if(e.key === 'Enter'){
                handleReset();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    })
  return (
    <Box
      width="80%"
      maxWidth="600px"
      bgcolor="#e0ffe0" // Light green background for a congratulatory feel
      borderRadius="8px"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
      p={4}
      textAlign="center"
      mx="auto" // Centers the box horizontally
      my={4}   // Adds margin top and bottom
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#4caf50' }}>
      🎉 Congratulations! 🎉
      </Typography>
      <Typography variant="h6" paragraph >
        Well Done
      </Typography>
      <Button type='submit' variant="contained" color="success" onClick={handleReset}>
        Restart or Press Enter🚀
      </Button>
    </Box>
  )
}
