import React from 'react'
import Carousel from './Carousel'
import image1 from '../image/jone.png'
import image2 from '../image/dune.png'

const Testimonial = () => {
    const slides = [
        { image: image1, text: 'Working with this team has been a game-changer for my business. Their expertise, attention to detail, and dedication to client satisfaction are truly commendable. I appreciate the collaborative approach and the positive impact they have had on our projects' },
        { image: image2, text: 'Choosing this service was one of the best decisions I ve made. The level of professionalism and the quality of work delivered are unmatched. The team is not only skilled but also incredibly responsive and supportive. I am grateful for their commitment to excellence' },
      ];
  return (
    <div className='tess' id='testimonials'>
        <div className='doe'>
            <p>WHAT CLIENTS SAY</p>
            <h2>Testimonial</h2>
        </div>
        <Carousel slides={slides} />
    </div>
  )
}

export default Testimonial