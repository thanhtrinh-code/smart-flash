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
        <Button variant="contained" onClick={() => handleChange('games')} sx={{bgcolor: feature === 'games' ? 'white' : 'inherit', 
        color: feature === 'games' ? '#181e32' : 'gray', border: '1px solid inherit', borderRadius: 3,
        '&:hover': {
          bgcolor: feature === 'games' ? 'white' : 'inherit', 
          color: feature === 'games' ? '#181e32' : 'gray'
        }
      }}>
          Games
        </Button>
        <Button variant="contained" onClick={() => handleChange('collection')} sx={{bgcolor: feature === 'collection' ? 'white' : 'inherit', 
        color: feature === 'collection' ? '#181e32' : 'gray', border: '1px solid inherit', borderRadius: 3,
        '&:hover': {
          bgcolor: feature === 'collection' ? 'white' : 'inherit', 
          color: feature === 'collection' ? '#181e32' : 'gray'
        }
      }}>
          Collection
        </Button>
    </>
  )
}
