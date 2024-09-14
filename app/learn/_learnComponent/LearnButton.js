import { Box, Button } from '@mui/material'
import React from 'react'

export default function LearnButton({setDontKnow, handleSubmit}) {
  return (
    <form
  style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}
  onSubmit={handleSubmit}
>
  <Button variant="outlined" onClick={() => setDontKnow(idk => !idk)}>
    Don't know
  </Button>
  <Button type="submit" variant="contained">
    Answer
  </Button>
</form>
  )
}
