import { Box, Typography } from "@mui/material";

export default function ProList() {
  return (
    <Box width='100%' bgcolor='inherit' p={3}>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ color: 'green', fontSize: '20px', marginRight: '10px' }}>✔</span>
        <Typography fontFamily='serif' fontSize={18} fontWeight='500'>
          Unlimited flashcard collections
        </Typography>
      </li>
      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ color: 'green', fontSize: '20px', marginRight: '10px' }}>✔</span>
        <Typography fontFamily='serif' fontSize={18} fontWeight='500'>
          24/7 chat support
        </Typography>
      </li>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'green', fontSize: '20px', marginRight: '10px' }}>✔</span>
        <Typography fontFamily='serif' fontSize={18} fontWeight='500'>
          Unlimited games playing
        </Typography>
      </li>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'green', fontSize: '20px', marginRight: '10px' }}>✔</span>
        <Typography fontFamily='serif' fontSize={18} fontWeight='500'>
          Unlimited quiz
        </Typography>
      </li>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'green', fontSize: '20px', marginRight: '10px' }}>✔</span>
        <Typography fontFamily='serif' fontSize={18} fontWeight='500'>
          Picture Display
        </Typography>
      </li>
    </ul>
  </Box>
  )
}
