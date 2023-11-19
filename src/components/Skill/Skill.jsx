import React from 'react'
import Range from './Range'
import './Skill.css'
import SkillSet from './SkillSet';
const Skill = () => {
  const skills = [
    { skill: 'React', level: 90 },
    { skill: 'JavaScript', level: 80 },
    { skill: 'HTML', level: 95 },
    {skill: 'css', level: 85 },
    {skill: 'Node', level: 70 },
    {skill: 'Figma', level: 50 }
  ];
  return (
    <div className='skill'>
      <h2>Skills</h2>
      {skills.map((s, index) => (
        <Range key={index} skill={s.skill} level={s.level} />
      ))}

      <SkillSet />
    </div>
  )
}

export default Skill