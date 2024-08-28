import { Box } from '@mui/material'
import React from 'react'

export default function InvalidToAdd() {
  return (
    <Box width='100%' display='flex' justifyContent='center' mb={3}><Box width='50%' border='1px solid red' p={1} textAlign='center'>YOU MUST HAVE AT LEAST TWO CARDS TO SAVE YOUR SET.</Box></Box>
  )
}
