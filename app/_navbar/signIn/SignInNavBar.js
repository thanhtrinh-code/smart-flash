import {Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const StyledSignIn = {
    width: 130,
    height: 43,
    borderRadius: 30,
    fontSize: 18,
    fontWeight: 'light',
    color: 'black',
    cursor: 'pointer',
    boxShadow: '5px 8px 0 0 black',
    backgroundColor: 'white',
    textTransform: 'none',
    border: '1px solid black',
    '&:hover': {
        backgroundColor: '#007070',
        boxShadow: '5px 8px 0 0 black'
    },
}
export default function SignInNavBar() {
  return (
    <Box width='100vw' sx={{display: 'flex', justifyContent: 'space-around  '}}>
        <a href="/" style={{textDecoration: 'none'}}>
        <Box sx={{ display: 'flex', pt: 0.9 }}>
                <Image
                    width={70}
                    height={70}
                    src="/logo.png"
                    alt="SmartFlash Logo"
                    style={{ borderRadius: '50%' }} />
                    <Typography
                        variant="h6"
                        sx={{ ml: 0, pt: 1.5,fontSize: 24,fontWeight: 'bold', color: 'black' }} >
                            SmartFlash
                    </Typography>
        </Box>
        </a>
        <Box display='flex' sx={{alignItems: 'center', gap: 1.4}}>
            <Typography variant="h6" sx={{fontSize: 19, fontWeight: 'lighter'}}>
                Don&apos;t have an account? 
            </Typography>
            <Button sx={StyledSignIn} href="/sign-up">
                Sign Up
            </Button>
        </Box>
    </Box>
  )
}