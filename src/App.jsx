import React from 'react'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import Features from './components/Features/Features'
import Project from './components/Project/Project'
import Skill from './components/Skill/Skill'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import Year from './components/Header/Year'
// import Github from './components/Github/Github'

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Header />
      <Features />
      <Project />
      <Skill />
      <Testimonial />
      {/* <Github /> */}
      <Contact />
      <Footer />
      <Year />
    </div>
  )
}

export default App