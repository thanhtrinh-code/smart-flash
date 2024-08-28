import { Box, Button, Typography } from "@mui/material";


export default function FreeDisplay() {
  function handleFree(){
    window.location.href = '/sign-in';
  }
  return (
    <Box width='100%' display='flex' justifyContent='center'>
            <Box width='19vw' bgcolor='#e8e8e8' mt={4} p={3} borderRadius={8} sx={{
          boxShadow: '5px 8px 0 0 black',
          backgroundColor: 'white',
          border: '1px solid black',
        }}
          >
            <Typography fontWeight='600' fontFamily='serif' fontSize={22} gutterBottom>
              Free
            </Typography>
            <Box display='flex' pb={2}>
              <Typography sx={{fontSize: 40, fontWeight: 'bolder', alignContent: 'flex-end', fontFamily:'serif'}}>
                $0
              </Typography>
              <Typography alignContent='flex-end' pb={1} fontFamily='serif' fontSize={18}>
                / month
            </Typography>
            </Box>
            <Button variant="contained" fullWidth onClick={handleFree} sx={{
                bgcolor: 'black', '&:hover': {
                  bgcolor: '#4a4d48'
                }
            }}>
              Get Started Free
            </Button>
            </Box>
          </Box>
  )
}
