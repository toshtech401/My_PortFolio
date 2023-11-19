import React from 'react'
import GitHubCalendar from "react-github-calendar";
import './Github.css'

const Github = () => {
    const username = 'toshtech401'
  return (
    <div className='git'>
        <h1 className="project-heading">
            Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
        username={username}
        gap={20}
        blockSize={15}
        blockMargin={10}
        blockPadding={20}
        color="#c084f5"
        fontSize={16}
        className="github-contributions-container"
      />
    </div>
  )
}

export default Github