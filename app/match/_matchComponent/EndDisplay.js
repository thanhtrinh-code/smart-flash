import { Box, Button, Typography} from '@mui/material';
import { useEffect } from 'react';

export default function EndDisplay({correct , flashcards, handleReset}) {
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
        <Box width='100%' height='70vh' bgcolor='inherit' position='relative' display='flex' justifyContent='center' pb={10}>
        <Box 
      width={{ xs: '90%', md: '60%' }} 
      bgcolor="#f7f6f4" 
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.3)" 
      top="3rem" 
      position="absolute" 
      borderRadius="12px"
      sx={{
        height: {
          xs: 'auto',
          md: '32rem',
        },
        padding: {
          xs: '1.5rem',
          md: '2rem',
        }, 
        textAlign: 'center', 
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        You got a {correct} on the match making card game{correct >= flashcards?.length / 2 ? ', congratulation!!!' : '. Perfect takes practice'} 
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: '#666', marginBottom: '2rem' }}>
        Click the Reset button below to reset or Click Enter
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleReset}
        sx={{ 
          fontSize: '1.2rem', 
          padding: '0.75rem 2rem', 
          borderRadius: '8px', 
          textTransform: 'none',
        }}
      >
        Reset
      </Button>
    </Box>
            </Box>
    )
}
