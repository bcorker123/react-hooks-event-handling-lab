// Code Keypad Component Here
import React from 'react'

const handlePassword = ()=>console.log('Entering password...')

function Keypad() {
  return (
    <input type='password' onChange={handlePassword}/>
  )
}

export default Keypad