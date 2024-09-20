import React from 'react'

export default function Direction() {
  return (
    <div style={{
        width: '18rem',
        height: '100%',
        position: 'relative',
        backgroundColor: '#f5f5f5',  // light gray background for better readability
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'Roboto, sans-serif',  // professional, clean font
        borderRadius: '8px',  // add some rounding to the corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // subtle shadow for depth
        padding: '1.5rem'
      }}>
        <h2 style={{
          fontSize: '1rem',  // adjust font size for heading
          marginBottom: '1rem',
          color: '#333',  // dark text color for contrast
          textAlign: 'center'
        }}>
          For option 1: Display just the index finger like ☝️
        </h2>
        
        <h2 style={{
          fontSize: '1rem',
          marginBottom: '1rem',
          color: '#333',
          textAlign: 'center'
        }}>
          For option 2: Straighten the index and middle finger like ✌️
        </h2>
        
        <h2 style={{
          fontSize: '1rem',
          marginBottom: '1rem',
          color: '#333',
          textAlign: 'center'
        }}>
          For option 3: Straighten index, middle, and ring finger
        </h2>
        
        <h2 style={{
          fontSize: '1rem',
          marginBottom: '1rem',
          color: '#333',
          textAlign: 'center'
        }}>
          For option 4: Straighten index, middle, ring, and pinky
        </h2>
        
        <h2 style={{
          fontSize: '1rem',
          marginBottom: '0',
          color: '#333',
          textAlign: 'center'
        }}>
          To continue: Straighten all five fingers like Hi-5 or ✋
        </h2>
      </div>
      
  )
}
