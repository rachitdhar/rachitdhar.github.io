import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/home-component/home-component.js';
import './App.css';
import './colors.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomeComponent/>} />
      </Routes>
    </Router>
  );
}

export default App;
