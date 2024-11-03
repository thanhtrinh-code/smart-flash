import { SignedIn, UserButton } from "@clerk/nextjs";
import { Box, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";

export default function HomeNavBar({feature, handleChange}) {
    const [open, setOpen] = useState(false);
    function handleToggle(){
        setOpen(open => !open);
    }
  return (
    <>
    <Box width='100vw' bgcolor='#e8e8e8' height='10vh'>
      <Toolbar>
        <a style={{textDecoration: 'none', cursor: 'pointer'}} onClick={() => handleChange('')}>
        <Box sx={{ display: 'flex', pt: 0.9 }}>
            <Image width={70}  height={70} src="/logo.png"
            alt="SmartFlash Logo" style={{ borderRadius: '50%' }} />
            <Typography variant="h6"
                sx={{ ml: 0, pt: 1.5,fontSize: 24,fontWeight: 'bold', color: 'black' }} >
                    SmartFlash
            </Typography>
        </Box>
        </a>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', pl:{md: 6, lg: 20}}}>
            <Button onClick={() => handleChange('generator')}
              sx={{ my: 2, display: 'block', fontWeight: 'bolder', fontFamily: 'serif', ml: 5, fontSize: 20,
              bgcolor: feature === 'generator' ? 'black' : 'inherit', 
              color: feature === 'generator' ? 'white' : 'black', border: '1px solid inherit', borderRadius: 3,
        '&:hover': {
          bgcolor: feature === 'generator' ? 'black' : 'inherit', 
          color: feature === 'generator' ? 'white' : 'black'
        }
              }}>
              Generator
            </Button>
            <Button onClick={() => handleChange('collection')}
              sx={{ my: 2, display: 'block', fontWeight: 'bolder', fontFamily: 'serif', ml: 5, fontSize: 20,
              bgcolor: feature === 'collection' ? 'black' : 'inherit', 
              color: feature === 'collection' ? 'white' : 'black', border: '1px solid inherit', borderRadius: 3,
            '&:hover': {
                bgcolor: feature === 'collection' ? 'black' : 'inherit', 
                color: feature === 'collection' ? 'white' : 'black'
            }
              }}>
              Collection
            </Button>
        </Box>
        <Box display={{ xs: 'flex'}} justifyContent='flex-end' sx={{ flexGrow: 1 }}>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <Box display={{md: 'none'}} pl={8}>
                <AiOutlineMenuFold size={40} onClick={handleToggle}/>
                <Menu open={open} onClose={handleToggle}>
                    <MenuItem>
                        Generator
                    </MenuItem>
                    <MenuItem>
                        Games
                    </MenuItem>
                    <MenuItem>
                        Collection
                    </MenuItem>

                </Menu>
            </Box>
        </Box>
      </Toolbar>
    </Box>
    </>
  )
}
