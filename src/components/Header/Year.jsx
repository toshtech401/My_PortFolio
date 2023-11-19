import React, { useEffect, useState } from 'react'

const Year = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYear = () => {
      const newYear = new Date().getFullYear();
      setCurrentYear(newYear);
    };

    const intervalId = setInterval(updateYear, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='year'>
        {currentYear}
        <p>All rights reserved by Suleiman Mustapha</p>
    </div>
  )
}

export default Year