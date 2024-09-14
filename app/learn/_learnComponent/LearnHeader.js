import { Box } from '@mui/material'
import React from 'react'

export default function LearnHeader({question}) {
  return (
    <Box>
                            <h5 style={{ margin: '0', fontSize: '1.25rem', fontWeight: 'bold' }}>
                                Question:
                            </h5>
                            <h3 style={{ margin: '0.5rem 0', fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center'}}>
                                {question}
                            </h3>
                        </Box>
  )
}
