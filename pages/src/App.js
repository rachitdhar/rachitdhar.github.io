import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomeComponent from './components/home-component/home-component.js';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" exact component={HomeComponent} />
        </Routes>

        <footer>
          <p>&copy; 2024 Rachit Dhar. All rights reserved.</p>
          <p>Contact at: <a href="mailto:rachitdhar2511@gmail.com">rachitdhar2511@gmail.com</a></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
