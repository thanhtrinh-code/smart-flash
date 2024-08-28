"use client"
import SignInNavBar from "@/app/_navbar/signIn/SignInNavBar";
import { SignIn } from "@clerk/nextjs";
import { Box } from "@mui/material";

import { TypeAnimation } from "react-type-animation";


export default function page() {
  return (
    <Box align='center' sx={{
      height: '100vh', 
      width: '100vw', 
      backgroundImage: 'url(/bgforauth.jpeg)', 
      backgroundSize: 'cover',  
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      overflow: 'scroll'

    }}>
      <SignInNavBar/>
      <Box py={2}>
        <TypeAnimation sequence={[ 'Sign In to SmartFlash!', 1000, " "]}
        speed={50}
        style={{ fontSize: '4em', fontFamily: 'serif'}}
        repeat={Infinity} />
        </Box>
        <SignIn/>
    </Box>
  )
}
