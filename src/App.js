import React from 'react';
import './App.css';
import GetResume from './GetResume';
import Face from './Face';
import Clock from './Clock';
import Skills from './Skills';
import Experience from './Experience'

const styles = {};

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div style={styles} className="App-logo">
          <Face/>
        </div>
        <GetResume/>
        <Clock/>
        
        
      </header>
      <Skills/>
      <Experience/>
    </div>
  );

}

export default App;
