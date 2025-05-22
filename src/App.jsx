import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';


// App.jsx

function App () {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
        </Routes>
      </BrowserRouter>
      <Header />
    </>
  );
};

export default App;