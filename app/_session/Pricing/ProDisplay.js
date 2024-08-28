import { Box, Button, Typography } from "@mui/material";
import getStripe from "@/app/utils/get-stripe";

export default function ProDisplay() {
  async function handlePro(){
    const checkoutSession = await fetch('/api/checkout_session', {
      method: 'POST',
      headers: {
        'origin': 'http://localhost:3000',
      },
    })
    const checkoutSessionJson = await checkoutSession.json();
    if(checkoutSession.statusCode === 500){
      console.error(checkoutSession.message);
    }
    const stripe = await getStripe();
    const {error} = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })
    if(error){
      console.warn(error.message);
    }

  }
  return (
    <Box width='100%' display='flex' justifyContent='center'>
        <Box width='19vw' bgcolor='#e8e8e8' mt={4} p={3} borderRadius={8} sx={{
          boxShadow: '5px 8px 0 0 black',
          backgroundColor: 'white',
          border: '1px solid black',
        }}>
            <Typography fontWeight='600' fontFamily='serif' fontSize={22} gutterBottom>
              Pro
            </Typography>
            <Box display='flex' pb={2}>
              <Typography sx={{fontSize: 40, fontWeight: 'bolder', alignContent: 'flex-end', fontFamily:'serif'}}>
                $10
              </Typography>
              <Typography alignContent='flex-end' pb={1} fontFamily='serif' fontSize={18}>
                / month
            </Typography>
            </Box>
            <Button variant="contained" onClick={handlePro} fullWidth sx={{
                bgcolor: 'black', '&:hover': {
                  bgcolor: '#4a4d48'
                }
            }}>
              Get Started Pro
            </Button>
            </Box>
          </Box>
  )
}
