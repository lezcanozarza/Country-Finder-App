import React from 'react';
import Countries from '../Countries/countries.js'
import Ordenamientos from '../ordenamientos/ordenamientos.js'
import Filtros from '../filtros/filtros.js'
import logo from '../../images/logo.png'
import "./home.css"

export function Home(){
	return(
		<div className="homecont">
			<ul className="home">
				<div className="cnttitulo">
				<img src={logo} alt="logo" className="imgl"/>
				<h1 className="titulo">Country Finder App</h1>
				</div>
				<div className="padre">
				<div className="filts">
				<Ordenamientos/>
				<Filtros/>
				</div>
				</div>
				<Countries/>
			</ul>
		</div>
		)
}

export default Home
