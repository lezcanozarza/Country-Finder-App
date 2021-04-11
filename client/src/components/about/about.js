import React from 'react'
import './about.css'
import foto from './foto_pi.jpg'
import icoLinkedin from './linkedin-icon-2.svg'
import icoGithub from './github-icon.svg'
import {NavLink} from 'react-router-dom';

export default function About(){
	return (
		<div className="acont">
		<div className="adesc">
		<h1><strong>About The Country Finder App</strong></h1>
		<p>With this App you can browse through all the countries of the world, 
		filter by habitants, continent, and tourist activities that you can create 
		yourself from the <strong>activity creation page.</strong></p>

		<p>This is a project I built in march 2021 using the Rest Countries Api and 
		all the technologies I learned during the Soy Henry's Bootcamp. </p>

		<p>For front end development: 
		<strong> HTML, CSS, React & Redux</strong></p>

		<p>For back end development: 
		<strong> Node.js & Express</strong></p>

		<p>For the database development: 
		<strong> Sequelize & postgreSQL.</strong></p>
		</div>
		<div className="mCont">
		<div className="me">
		<span><strong>Marcos Lezcano</strong></span>
		<img src={foto} className="foto"/>
		<div className="ddesc">
		<p>Full Stack development</p>
		<p style={{fontSize:"17px"}}>Front End | Back End</p>
		<div className="icons">
		<a href="https://www.linkedin.com/in/marcos-ariel-lezcano-4428bb1b8/">
		<img src={icoLinkedin} className="icos"/>
		</a>
		<a href="https://github.com/lezcanozarza/lezcanozarza">
		<img src={icoGithub} className="icos"/>
		</a>
		</div>
		</div>
		</div>
		</div>
		</div>
	)
}