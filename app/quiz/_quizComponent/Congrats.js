import { Typography } from '@mui/material'
import React from 'react'

export default function Congrats() {
    const congratsText = [
        "🎉 Awesome job!",
        "👏 Well done!",
        "🌟 You're a star!",
        "👍 Great work!",
        "💪 You nailed it!",
        "🏆 You're on fire!"
      ];
      
      const randomIndex = Math.floor(Math.random() * congratsText.length);
      
  return (
    <Typography variant='h6' color='green'>{congratsText[randomIndex]}</Typography>
  )
}
