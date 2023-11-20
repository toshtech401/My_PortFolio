import React from 'react'
import './Features.css'
import { AiOutlineMenu } from "react-icons/ai";
import { IoGridSharp } from "react-icons/io5";
import { TbSeo } from "react-icons/tb";
import { FaMobile } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { BsBrowserChrome } from "react-icons/bs";



const Features = () => {
  return (
    <div className='feat' id='features'>
        <div className='do'>
            <p>Features</p>
            <h2>What I Do</h2>
        </div>
        <div className='bee'>
            <div className='stra'>
                <AiOutlineMenu />
                <h3>Business Stratagy</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad</p>
            </div>
            <div className='stra'>
                <IoGridSharp />
                <h3>App Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad</p>
            </div>
            <div className='stra'>
                <TbSeo />
                <h3>SEO Optimisation</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad</p>
            </div>
        </div>
        <div className='mob'>
            <div className='del'>
                <FaMobile />
                <h3>Mobile Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad</p>
            </div>
            <div className='del'>
                <SiAntdesign />
                <h3>UX Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad</p>
            </div>
            <div className='del'>
                <BsBrowserChrome />
                <h3>Hosting Websites</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad</p>
            </div>
        </div>
    </div>
  )
}

export default Features