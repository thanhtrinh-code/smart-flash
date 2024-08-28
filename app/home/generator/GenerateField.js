import { Box, Button, TextField } from '@mui/material'

export default function GenerateField({input, setInput, handleGenerate}) {
  return (
    <Box display='flex' justifyContent='center' gap={3} alignContent='center' pt={1.5} ml={6}>
        <TextField id='topic' required value={input} label='Topic' onChange={(e) => setInput(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': { borderRadius: '20px', border: '1px solid black' }, width: '40vw'
        }}
        />
        <Button variant='contained' onClick={handleGenerate} sx={{
        bgcolor: '#000',
        color: '#fff',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.4)',
        '&:hover': {
          bgcolor: '#333',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.6)',
        },
        borderRadius: '8px', 
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold', 
        textTransform: 'none', height: '60%', mt: 0.65, borderRadius:5
      }}>
          Generate
        </Button>
        <Button variant='contained' onClick={() => setInput('')} sx={{
        bgcolor: '#000',
        color: '#fff',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.4)',
        '&:hover': {
          bgcolor: '#333',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.6)',
        },
        borderRadius: '8px', 
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold', 
        textTransform: 'none', height: '60%', mt: 0.65, borderRadius:5
      }}>
          Clear
        </Button>
      </Box>
  )
}
