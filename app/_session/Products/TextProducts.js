import { Typography } from '@mui/material'

import { TypeAnimation } from 'react-type-animation'
const styles = {
    title: {
      fontSize: '2.5em',
      fontWeight: 700,
      color: '#333',
      marginBottom: '0.5em',
    },
    subtitle: {
      fontSize: '1.5em',
      fontWeight: 400,
      color: '#555',
      marginBottom: '1em',
    },
    description: {
      fontSize: '1.2em',
      color: '#666',
      lineHeight: 1.5,
      marginBottom: '2em',
      fontWeight: 'light'
    },
    typeAnimation: {
      fontSize: '3em',
      fontFamily: 'serif',
      color: '#000',
      fontWeight: 700,
    }
  };
export default function TextProducts() {
  return (
    <>
        <Typography variant="h1" style={styles.title}>
        Best Flashcard Generator
      </Typography>
      <Typography variant="h2" style={styles.subtitle}>
        Study Smarter Not Harder
      </Typography>
      <Typography style={styles.description}>
        SmartFlash is a powerful flashcard tool that makes learning fun and easy. 
        With SmartFlash, you can generate and manage flashcards effortlessly.
      </Typography>
      <TypeAnimation 
        sequence={["", 1000,'Plants']} 
        speed={50} 
        style={styles.typeAnimation} 
        repeat={false} 
      />

    </>
  )
}
