import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeComponent from './components/home-component/home-component.js';
import PostsComponent from './components/posts-component/posts-component.js';
import PostTextComponent from './components/posts-component/post-text-component/post-text-component.js';
import './paths.js'
import './App.css';
import './colors.css';
import { HOME_PATH, POSTS_PATH } from './paths.js';
import xIcon from './icons/x-icon.png'
import githubIcon from './icons/github-icon.png'
import linkedinIcon from './icons/linkedin-icon.png'

function App() {
  return (
    <div>
      <Router>
        <nav class="navbar">
          <ul class="navbar-menu">
            <li class="navbar-item"><Link class="link" to={HOME_PATH}>Home</Link></li>
            <li class="navbar-item"><Link class="link" to={POSTS_PATH}>Posts</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path={HOME_PATH} element={<HomeComponent/>} />
          <Route path={POSTS_PATH} exact element={<PostsComponent/>} />
          <Route path={`${POSTS_PATH}/:postId`} element={<PostTextComponent />} />
        </Routes>
        <footer class="footer">
          <div class="footer-left">
            <h2 class="footer-heading">Rachit Dhar</h2>
            <div class="footer-info">
              <p>&copy; 2024 Rachit Dhar. All rights reserved.</p>
              <p>Contact | <a href="mailto:rachitdhar2511@gmail.com">rachitdhar2511@gmail.com</a></p>
            </div>
          </div>
          <div class="footer-right">
            <h2 class="footer-heading">Social</h2>
            <div class="social-icons">
              <a href="https://www.linkedin.com/in/rachit-dhar-52a42a21b/" target="_blank">
                <img class="linkedin-icon" src={linkedinIcon} alt="LinkedIn"/>
              </a>
              <a href="https://github.com/rachitdhar" target="_blank">
                <img class="github-icon" src={githubIcon} alt="GitHub"/>
              </a>
              <a href="https://x.com/__rachitdhar__" target="_blank">
                <img class="x-icon" src={xIcon} alt="Twitter"/>
              </a>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
