"use client"
import {Box, Toolbar, Typography } from "@mui/material";
import SignInSignUpButton from "./SignInSignUpButton";
import SectionsDispplay from "./SectionsDispplay";
import { SignedIn, SignedOut, UserButton, UserProfile } from "@clerk/nextjs";
import Image from "next/image";

const pages = ['Products', 'Pricing', 'Features'];
export default function NavBar() {

  return (
        <Box width='100vw' bgcolor='#e8e8e8'>
          <Toolbar>
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center'}}>
            {pages.map((page) => (
              <SectionsDispplay page={page} key={page}/>
            ))}
          </Box>
          <SignedOut>
            <SignInSignUpButton/>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
          </Toolbar>
        </Box>
  )
}
