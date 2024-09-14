import { Box, TextField } from '@mui/material'
import React from 'react'

export default function AnswerInput({input, setInput}) {
  return (
    <Box>
        <h5 style={{ margin: '1rem 0 0.5rem 0', fontSize: '1.25rem', fontWeight: 'bold' }}>
            Input the answer:
        </h5>
        <TextField label='Answer' fullWidth variant='standard' value={input} onChange={(e) => setInput(e.target.value)} InputLabelProps={{ shrink: true }} // Ensure label is visible when field is filled
        style={{ marginTop: '1rem' }} />
    </Box>
  )
}
