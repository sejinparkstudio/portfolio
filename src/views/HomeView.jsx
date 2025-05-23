import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Skip from '../components/Skip';

const HomeView = () => {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <About />
        <Experience />
        <Projects />
      </Main>
      <Footer />
    </>
  )
}

export default HomeView;