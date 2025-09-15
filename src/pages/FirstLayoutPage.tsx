import React from 'react'
import ThirdLayoutPage from './ThirdLayoutPage'
import { Link } from 'react-router-dom'

export default function FirstLayoutPage() {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyItems:'center',
      alignItems:'center'
    }}>
      <h3>
        Welcome to Sinnehlanhla Wine, to order, click the link below:
      </h3> <button>
      <Link to="ThirdLayoutPage">
       Go to Order Page
      </Link></button>
    </div>
  )
}
