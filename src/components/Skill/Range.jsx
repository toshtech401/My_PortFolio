
import React, { useEffect, useState } from 'react';

const Range = ({ skill, level }) => {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const delay = 100;
    setTimeout(() => {
      setBarWidth((level / 100) * 100);
    }, delay);
  }, [level]);

  return (
    <div className="skill-range">
      <div className="skill-name">{skill}</div>
      <div className="skill-bar-container">
        <div className="skill-bar" style={{ width: `${barWidth}%` }}></div>
      </div>
    </div>
  );
};

export default Range;
