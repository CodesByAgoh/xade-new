import React from 'react'
import './Section3.css'
import img6 from './images/illustration.png'
import img7 from './images/icon-2.svg'
import img8 from './images/icon-1.svg'
import img9 from './images/icon.svg'

function Section3() {
  return (
    <div className='section3'>
        <div className='security'>
            <span className='solution'>Your</span>
            <span className='one__stop'>security</span>
            <span className='solution'>is our</span>
            <span className='one__stop'>priority</span>
        </div>
            <h2 className='explore'>We believe that security and data privacy are the
            <br/>foundations of achieving mainstream adoption of 
            <br/> better banking on the blockchain
            </h2>
            <br/>
            <br/>
            <div className='key__section'>
                <div>
                    <div className='left__key'>
                        <div className='blue__side'>
                            <img className='blue__sid' src={img9}></img>
                        </div>
                        <div>
                            <p className='enabled'>Enabled by Multi-party communication <br />
                            (MPC) threshold cryptography
                            </p>
                            <p className='enabled2'>We bring together greater user experiences and cryptography <br />
                            to get the best of what Auth can provide our customers.
                            </p>
                        </div>
                    </div>
                    <div className='left__key'>
                        <div className='blue__side'>
                            <img className='blue__sid' src={img8}></img>
                        </div>
                        <div>
                            <p className='enabled'>
                            Non-custodial
                            </p>
                            <p className='enabled2'>Similar to multi-factor authentication flows, the Torus Network <br />
                            secures the user's key using multiple access points.
                            </p>
                        </div>
                    </div>
                    <div className='left__key'>
                        <div className='blue__side'>
                            <img className='blue__sid' src={img7}></img>
                        </div>
                        <div>
                            <p className='enabled'>
                            Secured and audited
                            </p>
                            <p className='enabled2'>Web3Auth leverages both academic perfomance vetted <br />
                            infrastructure and institutional grade security
                            </p>
                        </div>
                    </div>

                </div>
                <div>
                    <img className='img6' src={img6} alt=''/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='security'>
            <span className='solution'>Focus on your product</span> <br/> 
            <span className='solution'>and</span>
            <span className='one__stop'>let us do the rest</span>
        </div>
            <h2 className='explore'>Xade offers modern and easy-to-use solutions
            <br/>that wil become indespensible assistants
            <br/>for your business
            </h2>
            <br/>
            <br/>
            <div className='third__section'>
                <div>
                    <div>
                        <p className='enabled3'>
                        Dedicated support
                        </p>
                        <p className='enabled4'></p>
                    </div>
                    <div>
                        <p className='enabled3'>
                        Custom API
                        </p>
                        <p className='enabled5'></p>
                    </div>
                    <div>
                        <p className='enabled3'>
                        Multiaccount login
                        </p>
                        <p className='enabled6'></p>
                    </div>
                    <div>
                        <p className='enabled3'>
                        Payment processors
                        </p>
                        <p className='enabled7'></p>
                    </div>
                </div>
                <div>
                    <div className='support'>
                         <p className='support2'>
                             Chat support, call support and dedicated concierge 
                             service are available 24/7 for all needs
                         </p>
                    </div>
                    <div className='support'>
                        <p className='support2'>
                             Customized for the business needs with your inputs 
                             optimized by our advanced AI
                         </p>
                    </div>
                    <div className='support'>
                        <p className='support2'>
                             Get a multiaccount subscription with personal cards 
                             and multiple useful features
                         </p>
                    </div>
                    <div className='support'>
                        <p className='support2'>
                             The lowest fees and instant settlements for more than
                             40 currencies and crypto
                         </p>
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default Section3