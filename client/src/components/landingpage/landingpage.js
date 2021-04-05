import React from 'react';
import {Link} from 'react-router-dom'
import './landingpage.css'

export function Landingpage(){
	return(
		<div className="cnt_land">
		<div className="lndpage">
		<h1>Country Finder App</h1>
		<Link to='/home'>
			<button className="btnp">Página Principal</button>
		</Link>
		</div>
		</div>
		)
}

export default Landingpage