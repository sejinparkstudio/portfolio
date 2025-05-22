import React from 'react'
import Main from '../components/Main'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomeView = () => {
  return (
    <>
    <Main>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Main>
    <Footer />
    </>
  )
}

export default HomeView