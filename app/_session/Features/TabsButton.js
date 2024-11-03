import { Button } from '@mui/material'
import React from 'react'

export default function TabsButton({feature, handleChange}) {
  return (
    <>
      <Button onClick={() => handleChange('generator')} sx={{bgcolor: feature === 'generator' ? 'white' : 'inherit', 
        color: feature === 'generator' ? '#181e32' : 'gray', border: '1px solid inherit', borderRadius: 3,
        '&:hover': {
          bgcolor: feature === 'generator' ? 'white' : 'inherit', 
          color: feature === 'generator' ? '#181e32' : 'gray'
        }
      }}>
          Generator
        </Button>
        <Button variant="contained" onClick={() => handleChange('match')} sx={{bgcolor: feature === 'match' ? 'white' : 'inherit', 
        color: feature === 'match' ? '#181e32' : 'gray', border: '1px solid inherit', borderRadius: 3,
        '&:hover': {
          bgcolor: feature === 'match' ? 'white' : 'inherit', 
          color: feature === 'match' ? '#181e32' : 'gray'
        }
      }}>
          Match
        </Button>
        <Button variant="contained" onClick={() => handleChange('quiz')} sx={{bgcolor: feature === 'quiz' ? 'white' : 'inherit', 
        color: feature === 'quiz' ? '#181e32' : 'gray', border: '1px solid inherit', borderRadius: 3,
        '&:hover': {
          bgcolor: feature === 'quiz' ? 'white' : 'inherit', 
          color: feature === 'quiz' ? '#181e32' : 'gray'
        }
      }}>
          Quiz
        </Button>
        <Button variant="contained" onClick={() => handleChange('answer')} sx={{bgcolor: feature === 'answer' ? 'white' : 'inherit', 
        color: feature === 'answer' ? '#181e32' : 'gray', border: '1px solid inherit', borderRadius: 3,
        '&:hover': {
          bgcolor: feature === 'answer' ? 'white' : 'inherit', 
          color: feature === 'answer' ? '#181e32' : 'gray'
        }
      }}>
          Question
        </Button>
    </>
  )
}
