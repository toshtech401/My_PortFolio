import React from 'react'
import './Project.css'
import web from '../image/web.jpg'
import clone from '../image/clone.jpg'
import app from '../image/app.jpeg'
import { FaGithub } from 'react-icons/fa'
import { BsBrowserChrome } from "react-icons/bs";

const Project = () => {
  return (
    <div className='ject' id='projects'>
        <div className='my'>
            <p>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
            <h2>My Projects</h2>
        </div>
        <div className='clone'>
            <div className='cll'>
                <img src={clone} alt="" />
                <div className='app'>
                    <p>SOCIAL MEDIA CLONE</p>
                    <div className='svg'>
                        < FaGithub />
                        <BsBrowserChrome />
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, tempore.</p>
            </div>
            <div className='cll'>
                <img src={web} alt="" />
                <div className='app'>
                    <p>E-COMMERCE WEBSITE</p>
                    <div className='svg'>
                        < FaGithub />
                        <BsBrowserChrome />
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, tempore.</p>
            </div>
            <div className='cll'>
                <img src={app} alt="" />
                <div className='app'>
                    <p>CHATTING APP</p>
                    <div className='svg'>
                        < FaGithub />
                        <BsBrowserChrome />
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, tempore.</p>
            </div>
        </div>
        <div className='clone'>
            <div className='cll'>
                <img src={app} alt="" />
                <div className='app'>
                    <p>CHATTING APP</p>
                    <div className='svg'>
                        < FaGithub />
                        <BsBrowserChrome />
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, tempore.</p>
            </div>
            <div className='cll'>
                <img src={clone} alt="" />
                <div className='app'>
                    <p>SOCIAL MEDIA CLONE</p>
                    <div className='svg'>
                        < FaGithub />
                        <BsBrowserChrome />
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, tempore.</p>
            </div>
            <div className='cll'>
                <img src={web} alt="" />
                <div className='app'>
                    <p>E-COMMERCE WEBSITE</p>
                    <div className='svg'>
                        < FaGithub />
                        <BsBrowserChrome />
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, tempore.</p>
            </div>
        </div>
    </div>
  )
}

export default Project