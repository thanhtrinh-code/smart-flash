import { Box, Button } from '@mui/material'

const StyledButton = {
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
export default function SignInSignUpButton() {
  return (
    <Box sx={{display: 'flex', gap: 2}}>
        <Button sx={StyledButton} href='/sign-in'>
            Sign In
        </Button>
        <Button variant="outlined" sx={StyledButton} href='/sign-up'>
            Sign Up
        </Button>
    </Box>
  )
}
