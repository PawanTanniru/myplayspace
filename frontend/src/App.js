import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import   
 GroundDetails from './components/GroundDetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ground/:id" element={<GroundDetails />} />
      </Routes>
    </Router>
  );
}

export default App;