import React from 'react'
import { FcCheckmark } from 'react-icons/fc'

export default function CorrectAnswer({answer}) {
  return (
    <div>
    <h3 style={{color: 'green', marginBottom: '1.3rem'}}>Correct Answer:</h3>
<div style={{borderStyle: 'dotted', backgroundColor: 'white', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, fontFamily: 'serif', fontSize: '1.4rem', display: 'flex', alignItems: 'center'}}>
    <FcCheckmark size={30} style={{paddingRight: 10}}/>
    {answer}
</div>
</div>
  )
}
