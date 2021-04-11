import React from 'react';

import {NavLink} from 'react-router-dom';
import Search from '../Search/search.js';
import logoblanco from '../../images/logoblanco.png';

import './navbar.css'

export function Navbar(){
	return (
		<header className="navbar">
				<nav>
					<ul className="navdiv">
						<div className="imgLogo">
						<NavLink to="/home"><img src={logoblanco} alt="logo" className="imglo"/></NavLink>
						<NavLink to="/home" className="logo">Country Finder</NavLink>
						</div>
						<NavLink to="/home/crear" className="listItem">Create Activity</NavLink>
						<NavLink to="/home/about" className="listItem">About</NavLink>
						<div className="srch">
						<Search/>
						</div>
					</ul>
				</nav>
			</header>
			
	)
}

export default Navbar