import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
        <div className='left__side'>
            <h1 className='left__side__text'>xade</h1>
        </div>
        <div className='right__side'>
            <h1 className='right__side__text1'>Home</h1>
            <h1 className='right__side__text'>About</h1>
            <h1 className='right__side__text'>Contact us</h1>
            <a className='webapp' href='https://app.xade.finance/'> Web App</a>
        </div>
    </div>
  )
}

export default NavBar