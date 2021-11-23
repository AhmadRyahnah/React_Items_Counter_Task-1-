import React from 'react';

import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo" >
                <img  src="./img/logo.png" alt="logo" />
            </div>
            <div className="nav-list">
                <ul>
                    <li>Home   </li>
                    <li>Product</li>
                    <li>ABOUT  </li>
                    <li>CONTACT</li> 
                </ul>
            </div>
        </nav>
    )
}
export default Navbar