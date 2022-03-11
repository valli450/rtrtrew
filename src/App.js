import React from 'react';
import Header from './components/header/Header';
import MainTop from './components/main/Main-Top/Main-Top';
import MainBottom from './components/main/Main-Bottom/Main-Bottom';
import './App.css';

function App() {
  return (
    <div className="whale-section">
      <div className="header-section">
        <Header />
      </div>
      <div className="main-section">
        <div className="input-section">
          <MainTop />
        </div>
        <div className="benefits-section">
          <MainBottom />
        </div>
      </div>
    </div>
  );
}

export default App;