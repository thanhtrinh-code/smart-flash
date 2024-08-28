"use client"
import { SignUp } from "@clerk/nextjs";
import { Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import SignUpNavBar from "@/app/_navbar/signUp/signUpNavBar";



export default function page() {
  return (
    <Box align='center' sx={{
        height: '100vh', // Full viewport height
        width: '100vw',  // Full viewport width
        backgroundImage: 'url(/bgforauth.jpeg)', // Make sure the path is correct
        backgroundSize: 'cover',  // Cover the entire area
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent repeating the image
        overflow: 'scroll'
      }}>
        <SignUpNavBar/>
        <Box py={2}>
        <TypeAnimation sequence={[ 'Sign Up to SmartFlash!', 1000, " "]}
        speed={50}
        style={{ fontSize: '3.5em', fontFamily: 'serif'}}
        repeat={Infinity} />
        </Box>
        <SignUp/>
    </Box>
  )
}
