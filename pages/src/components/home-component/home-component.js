import React from "react";
import { Link } from 'react-router-dom';
import './home-component.css'

export default function HomeComponent() {
    return (
        <div>
            <nav class="navbar">
                <ul class="navbar-menu">
                    <li class="navbar-item"><Link class="link" to="/">Home</Link></li>
                    <li class="navbar-item"><Link class="link" to="/posts">Posts</Link></li>
                </ul>
            </nav>
            <div class="content">
                <a>Hello world</a>
            </div>
            <div class="footer">
                <p>&copy; 2024 Rachit Dhar. All rights reserved.</p>
                <p>Contact at: <a href="mailto:rachitdhar2511@gmail.com">rachitdhar2511@gmail.com</a></p>
            </div>
        </div>
    );
}
