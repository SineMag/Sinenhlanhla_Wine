import React from 'react'
import Image from "../assets/folder.png"

export default function FourZeroFour() {
  return (
    <div>
      <h1>404</h1>
      <p>page not found</p>
      <img src={Image} alt="Error 404 page not found" />
    </div>
  )
}
