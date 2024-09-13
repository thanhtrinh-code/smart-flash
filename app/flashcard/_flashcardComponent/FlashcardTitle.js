import { Box, Button, Typography } from "@mui/material";
import { HiDotsVertical } from "react-icons/hi";
export default function FlashcardTitle({search}) {
  return (
    <Box
  width='100%'
  sx={{
    p: 2, // Padding around the box
    backgroundColor: 'inherit', // Light background color
    borderRadius: 2, // Rounded corners
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align text and buttons
    gap: 2, // Space between items
  }}
>
  <Box display='flex' gap={65}
    alignItems='center'
  >
    <Typography 
    variant='h4' 
    fontFamily='serif'
    sx={{ 
      color: '#2c3e50', // Dark text color for contrast
      mb: 1, // Margin bottom
      textAlign: 'center', // Center text
    }}
  >
    {search}
    </Typography>
    <Box 
      border='1px solid #ddd' // Light border for subtle definition
      p={0.5} // Padding for icon
      display='flex' 
      justifyContent='center' 
      alignItems='center'
      borderRadius={0.5} // Rounded corners to match the typography
      sx={{
        cursor: 'pointer', // Change cursor to pointer for interactivity
        '&:hover': {
          backgroundColor: '#f0f0f0', // Light gray on hover for feedback
        },
      }}
    >
      <HiDotsVertical size={28}/>
    </Box>
  </Box>
  <Box 
    display='flex' 
    gap={2} // Space between buttons
  >
    <Button
      variant='contained'
      sx={{
        backgroundColor: '#4285F4', // Primary button color
        color: '#fff',
        textTransform: 'none', // Remove uppercase transform
        fontWeight: 'bold',
        fontSize: 15,
        borderRadius: 8, // Rounded button
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
        '&:hover': {
          backgroundColor: '#357ae8', // Slightly darker on hover
        },
      }}
    >
      Quiz
    </Button>
    <Button
      variant='contained'
      sx={{
        backgroundColor: '#34A853',
        color: '#fff',
        fontSize: 15,
        textTransform: 'none',
        fontWeight: 'bold',
        borderRadius: 8,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          backgroundColor: '#2c9f47',
        },
      }}
    >
      Match
    </Button>
    <Button
      variant='contained'
      sx={{
        backgroundColor: '#FBBC05',
        color: '#fff',
        textTransform: 'none',
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 8,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          backgroundColor: '#e0a700',
        },
      }}
    >
      Learn
    </Button>
  </Box>
  <Typography 
    variant='h6' 
    fontFamily='serif' 
    sx={{ 
      color: '#2c3e50', // Dark text color for contrast
      textAlign: 'center', // Center text
    }}
  >
    Click on the card to flip or hit Space to flip
  </Typography>
</Box>
  )
}
