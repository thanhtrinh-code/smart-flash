import { Box, Typography } from "@mui/material";


export default function PricingText() {
  return (
    <>
      <Typography fontSize={{xs: 28, md: 32, lg: 40}} fontWeight='bolder' color='white'>
          Choose The Right Plan For You
        </Typography>
        <Box bgcolor='#d5f279' width='20vw' p={1.3} my={2} sx={{borderRadius: 4}} textAlign='center'>
          <Typography sx={{fontSize: '1.15rem', fontFamily: 'sans-serif'}}>
            We have something for everyone
          </Typography>
        </Box>
    </>
  )
}
