import { Box, Button, TextField, Typography } from "@mui/material";


export default function CreateCollectionTittle({topic, setTopic, handleAddCollection}) {
  return (
    <Box width='100vw' display='flex' justifyContent='space-around'>
            <Box width='50%'>
            <Typography mb={2} fontFamily='serif' variant='h6'>
                Create a new flashcard set
            </Typography>
            <TextField label='Title' value={topic} onChange={(e) => setTopic(e.target.value)} variant='standard'
            sx={{width: '75%'}}
            />
            </Box>
            <Box >
            <Button sx={{px: 3}} onClick={handleAddCollection}>
                Create
            </Button>
            <Button>
                Create and learn
            </Button>
            </Box>
        </Box>
  )
}
