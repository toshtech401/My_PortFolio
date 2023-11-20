import React, { useEffect, useState } from 'react'

import { FaTwitter } from "react-icons/fa";
import './Contact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import mee from '../image/shake.png'
import {FaLinkedinIn, FaFacebookF} from 'react-icons/fa'

const Contact = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
    
        if (!formData.name) {
          newErrors.name = "Your Name is required";
        }
        if (!formData.number) {
          newErrors.number = "Your Phone number is required";
        }
    
        if (!formData.email) {
          newErrors.email = "Your Email is required";
        } 
    
        if (!formData.subject) {
          newErrors.subject = "Your Subject is required";
        }
    
        if (!formData.message) {
          newErrors.message = "Message is required";
        }
    
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
          // Form is valid, submit the data
          console.log("Form is valid. Submitting data:", formData);
        }
      }
    
  return (
    <div className='con'>
      <div className='hh'>
        <p>Contact</p>
        <h2>Contact Me With</h2>
      </div>
      <div className='contact'>
        <div className='mode'>
          <img src={mee} alt="" />
          <h3>Olatech</h3>
          <p>Mern Stack Developer</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, incidunt!</p>
          <p>Phone:+234 8124229230</p> 
          <p>Email: mustaphas902@gmail.com</p> 
          <div className='one'>
            <p>Find Me In</p>
            <div className='in'>
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange}/>
            {errors.email && <div data-aos="zoom-in" style={{ color: 'red' }}>{errors.name}</div>}
          </div>
          <div>
            <input type="text" placeholder='Phone Number' name='name' value={formData.number} onChange={handleChange}/>
            {errors.number && <div data-aos="zoom-in" style={{ color: 'red' }}>{errors.number}</div>}
          </div>
          <div>
            <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange}/>
            {errors.email && <div data-aos="zoom-in" style={{ color: 'red' }}>{errors.email}</div>}
          </div>
          <div>
            <input type="text" placeholder='Subject' name='subject' value={formData.subject} onChange={handleChange}/>
            {errors.email && <div data-aos="zoom-in" style={{ color: 'red' }}>{errors.subject}</div>}
          </div>
          <div>
            <textarea name="message" placeholder='Message' value={formData.message} onChange={handleChange} id="" cols="30" rows="10"></textarea>
            {errors.email && <div data-aos="zoom-in" style={{ color: 'red' }}>{errors.message}</div>}
          </div>
          <button class="btn">
            Watch
          </button>
        </form>
        </div>
        {/* <div className='foot'>
          <FaLinkedinIn />
          <FiTwitter />
          <FaGithub />
          <FaFacebookF />
          <FaInstagram />
        </div> */}
    </div>
  )
}

export default Contact