import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Portfolio from './components/Portfolio';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="curriculo-app">
        <Navbar />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Presentation />
                <div className="container">
                  <div className="content-row">
                    <Portfolio />
                  </div>
                </div>
              </>
            } 
          />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;