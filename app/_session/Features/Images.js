import { Box } from '@mui/material'
import Image from 'next/image'


export default function Images({feature}) {
  return (
    <Box sx={{
        width: {xs: 300, sm: 400, md: 600, lg: 700, xl: 800},
        height: {xs: 200, sm: 300, md: 450, lg: 550, xl: 650},
        position: 'relative'
      }}>
        {feature === 'generator' && <Image src='/generator.png' 
        layout="fill" objectFit="contain" alt='Generator'/> }
        {feature === 'match' && <Image src='/match.png' 
        layout="fill" objectFit="contain" alt='Matching'/> }
        {feature === 'quiz' && <Image src='/quiz.png' 
        layout="fill" objectFit="contain" alt='Quiz'/> }
        {feature === 'answer' && <Image src='/answer.png' 
        layout="fill" objectFit="contain" alt='Answer'/> }
      </Box>
  )
}
