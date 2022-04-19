import React from 'react'
import './Section4.css'
import img17 from './images/illustration (1).png'

function Section4() {
  return (
    <div className='section4'>
    <div className='never'>
        <span className='never1'>Facing issues or just </span>
        <span className='never2'>have a question?</span>
    </div>
    <h2 className='explore'>Send us a message and our support team
            <br/>will reach out to you in 24 hours
            </h2>
            <br/>
            <br/>

            <div className='nft__flex'>
                <div className='nft__side'>
                    <div className='nft__side1'>
                        <span className='nft3'>Your name </span> <span className='asteric'>*</span>
                        <input className='last__input'></input>
                        <br/>
                        <br/>
                    </div>
                    <div className='nft__side1'>
                    <span className='nft3'>Your e-mail </span> <span className='asteric'>*</span>
                        <input className='last__input'></input>
                        <br/>
                        <br/>
                    </div>
                    <div className='nft__side1'>
                    <span className='nft3'>Your message </span> <span className='asteric'>*</span>
                        <input className='last__input'></input>
                        <br/>
                        <br/>
                    </div>
                </div>
                <div>
               
                <img className='img17' src={img17} alt=''/>
                </div>
            </div>
             <div className='blue__rectangle'>
                 <p className='get__it__now'>Contact us</p>
            </div>
        
    </div>
  )
}

export default Section4