import { Box, Button, Typography} from '@mui/material';


export default function StartDisplay({setStart}) {
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
    Welcome to Match Making Card Games
  </Typography>
  <Typography variant="body1" gutterBottom sx={{ color: '#666', marginBottom: '2rem' }}>
    Click the Start button below to begin
  </Typography>
  <Button 
    variant="contained" 
    color="primary" 
    onClick={() => setStart(false)} 
    sx={{ 
      fontSize: '1.2rem', 
      padding: '0.75rem 2rem', 
      borderRadius: '8px', 
      textTransform: 'none',
    }}
  >
    Start
  </Button>
</Box>
        </Box>
  )
}
