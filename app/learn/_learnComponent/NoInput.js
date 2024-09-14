import React from 'react'
import { FaCircleXmark } from "react-icons/fa6";
export default function NoInput() {
  return (
    <div>
    <h3 style={{color: 'gray', marginBottom: '1.3rem'}}>Let Try Again Later!!!</h3>
<div style={{border: '2px solid black', backgroundColor: 'inherit', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, fontFamily: 'serif', fontSize: '1.4rem', display: 'flex', alignItems: 'center'}}>
    <FaCircleXmark  size={30} style={{paddingRight: 10}}/>
    Skipped
</div>
</div>
  )
}
