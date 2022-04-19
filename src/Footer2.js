import React from 'react'
import './Footer2.css'
import img10 from './images/Vector (5).png'
import img11 from './images/Vector (2).png'
import img12 from './images/Vector (3).png'
import img13 from './images/Vector (4).png'
import img14 from './images/Vector (1).png'
import img15 from './images/Vector.png'
import img16 from './images/telegram-1.png'


function Footer2() {
  return (
    <div className='footer2'>
        <div className='main__footer'>
            <div>
                <p className='footer__headings'>Get the latest Xade updates</p>
                <div className='email'>
                    <input className='email__input' placeholder=' My email is ... '></input>
                    <p className='email__submit'>
                    <img className='img10b' src={img10} alt=''/>
                    </p>
                </div>
            </div>
            <div>
              <p className='footer__headings'>Xade</p>
              <p className='footer__body'>Home</p>
              <p className='footer__body'>About</p>
              <p className='footer__body'>Contact us</p>
              <p className='footer__body'>Web App</p>
            </div>
            <div>
              <p className='footer__headings'>Features</p>
              <p className='footer__body'>Savings</p>
              <p className='footer__body'>Investing</p>
              <p className='footer__body'>Payments</p>
              <p className='footer__body'>Loans</p>
            </div>
            <div>
            <p className='footer__headings'>Our community</p>
            <div className='social__media'>
              <div>
                  <div className='social'>
                    <img className='img10c' src={img11} alt=''/>
                  </div>
                  <div  className='social'>
                    <img className='img10c' src={img12} alt=''/>
                  </div>
              </div>
              <div>
                  <div className='social'>
                    <img className='img10c' src={img13} alt=''/>
                  </div>
                  <div className='social'>
                    <img className='img10c' src={img14} alt=''/>
                  </div>
              </div>
              <div>
                  <div className='social'>
                    <img className='img10c' src={img15} alt=''/>
                  </div>
                  <div className='social'>
                    <img className='img10c' src={img16} alt=''/>
                  </div>
              </div>
            </div>
           
            </div>
        </div>
        <div className='copyright'>
        <p className='footer__body'>© Xade 2022. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer2