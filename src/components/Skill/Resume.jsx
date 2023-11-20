import React, { useState } from 'react'
import './Skill.css'
import Skill from './Skill';
import Experience from './Experience';
import Education from './Education';

const Resume = () => {
    const [activeButton, setActiveButton] = useState('Experience');

    const handleClick = (buttonId) => {
        setActiveButton(activeButton === buttonId ? null : buttonId);
    };

    const getContent = (buttonId) => {
        switch (buttonId) {
          case 'Experience':
            return <Experience />
          case 'Skills':
            return <Skill />
          case 'Education':
            return <Education />
          default:
            return null;
        }
      };
  return (
    <div className='resume'>
       <div className='display'>
            <button onClick={() => handleClick('Experience')}>Experience</button>
            <button onClick={() => handleClick('Skills')}>Skill</button>
            <button onClick={() => handleClick('Education')}>Education</button>
       </div>

      {activeButton && (
        <div>
          {getContent(activeButton)}
        </div>
      )}
    </div>
  )
}

export default Resume