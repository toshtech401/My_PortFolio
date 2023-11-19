import React from 'react'
import './Header.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import me from '../image/drink.png'
import {TypeAnimation} from 'react-type-animation'


const Header = () => {
  return (
    <div className='header'>
      <div className='me'>
        <div className='tech'>
          <h2>Hi, I'm <span>Olatech</span></h2>
          <TypeAnimation 
            sequence={[
              'A professional coder',
              1000,
              'A full-Stack developer',
              1000,
              'A Ui Designer',
              1000,
            ]}
            wrapper='span'
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block', color: 'white' }}
            repeat={Infinity}
          />
          <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.</p>
        </div>
        <div className='icon'>
          <div className='one'>
            <p>Find Me In</p>
            <div className='two'>
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
          <div className='one'>
            <p>Best Skills In</p>
            <div className='two'>
              <FaReact />
              <SiTailwindcss />
              <FaFigma />
              <FaNodeJs />
            </div>
          </div>
        </div>
      </div>
      <div className='src'>
        <img src={me} alt="" />
      </div>
    </div>
  )
}

export default Header