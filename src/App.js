import React, { Component } from 'react';
import Title from './components/Title/Title';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import FullTimeStudies from './components/FullTimeStudies/FullTimeStudies';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Contact />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <FullTimeStudies />
      </div>
    );
  }
}

export default App;
