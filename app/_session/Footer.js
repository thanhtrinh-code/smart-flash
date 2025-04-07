import { Box, Button, Typography } from '@mui/material'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";


export default function Footer() {
    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        } else {
        console.error(`Element with id "${sectionId}" not found.`);
        }
    };
  return (
    <Box
    sx={{
        backgroundColor: 'black',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20rem',
    }}
>
    <Box sx={{ display: 'flex', gap: 2, marginBottom: 3 }}>
        {[FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaGooglePlus].map((Icon, index) => (
            <Button
                key={index}
                sx={{
                    padding: 2,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                    }
                }}
            >
                <Icon size={30} color="black" />
            </Button>
        ))}
    </Box>
    <Box
        sx={{
            display: 'flex',
            gap: 4,
            justifyContent: 'center',
            color: 'white',
            fontSize: '1rem',
            mb: 3
        }}
    >
        {['Products', 'Pricing', 'Features', 'Sign Up'].map((text, index) => (
            <Typography key={index} variant="h5" component="h3" sx={{ cursor: 'pointer', fontFamily:'serif' }}>
                {text}
            </Typography>
        ))}
    </Box>
    <Box
    sx={{
        backgroundColor: 'black',
        width: '100%',
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}
>
    <Typography variant="h6" sx={{ color: 'white', fontSize: '1.2rem' }}>
        &copy; 2023 SmartFlash. All rights reserve
    </Typography>
</Box>
</Box>
  )
}
