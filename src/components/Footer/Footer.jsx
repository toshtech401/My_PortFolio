import React from 'react'
import './Footer.css'
import imp from '../image/in.png'
import {FaLinkedinIn,  FaFacebookF, FaTwitter} from 'react-icons/fa'
import Year from '../Header/Year'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='ddd'>
                <img src={imp} alt="" />
                <div className='in'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                </div>
            </div>
            <div className='oll'>
                <h3>QUICK LINK</h3>
                <ol>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ol>
            </div>
            <div className='oll'>
                <h3>RESOURCES</h3>
                <ol>
                    <li>Authentication</li>
                    <li>System Status</li>
                    <li>Terms of Service</li>
                    <li>Pricing</li>
                    <li>Over Right</li>
                </ol>
            </div>
            <div className='oll'>
                <h3>DEVELOPERS</h3>
                <ol>
                    <li>Documentation</li>
                    <li>Authentication</li>
                    <li>API Reference</li>
                    <li>Support</li>
                    <li>Open Source</li>
                </ol>
            </div>
        </div>
        <Year />
    </div>
  )
}

export default Footer