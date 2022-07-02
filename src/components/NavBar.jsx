import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='navbar'>
    <Link to="/about">About</Link>
    <span style={{margin: "10px"}}>|</span>
    <Link to="/">Home</Link>
    </div>
  )
}
