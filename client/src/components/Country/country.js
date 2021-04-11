import React from 'react';
import {Link} from 'react-router-dom';
import './country.css'

export function Country(props){
	return(
		<div className="card">
		<div className="imgn">
			<img src={props.bandera} alt={props.nombre} className='imaa'/>
		</div>
		<div className="datos">
			<div className="nombre">
			<h1>{props.nombre}</h1>
			</div>
			<h2>{props.continente}</h2>
			<Link to={`/home/detalles/${props.id}`}>
			<button className="detail">Country Detail</button>
		</Link>
		</div>
		</div>
		)
}

export default Country