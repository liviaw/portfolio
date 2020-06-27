import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.gif';
import liv from '../../images/liv.png';

import styles from './Nav.css';

function Nav () {
    return (
        <nav>
            <img src={logo} alt="logo"/>
            <div class="overlay">
                <img src={liv} alt="livia"/>
             </div>
            <ul className="nav-links">
                <Link to="/A">
                <li> A </li>
                </Link>
                <Link to="games">
                <li> B </li>
                </Link>
            </ul>
        </nav>
    )

}

export default Nav;