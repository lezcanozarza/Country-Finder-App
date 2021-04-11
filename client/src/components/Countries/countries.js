import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';

import Country from '../Country/country.js';
import {getCountries, getCountry} from '../../actions/index.js'
import './countries.css'



export function Countries(props){

	const [numeroPagina, setNumeroPagina] = useState(1);

	const grupo = 10;
	const conteoFinal = numeroPagina * grupo;
	const conteoInicial = conteoFinal - grupo;

	const paises = props.countries.slice(conteoInicial, conteoFinal)

	useEffect(()=> {
		props.getCountries()
	},[])

	return (
	<div className="countries">

{/*--------------------PAISES-----------------------*/}

			<div className="contenedor">
				{paises && paises.map(c => 
				<div className="divcountry">
					<Country
					nombre={c.nombre}
					bandera={c.bandera}
					continente={c.continente}
					id={c.id}/>
				</div>)}

{/*---------------PAGINADO BOTONES------------------*/}

				<div className="paginationBtns">
					<button onClick={() => setNumeroPagina(numeroPagina - 1)}>backward</button>
			        <button>{numeroPagina}</button>
			        <button onClick={() => setNumeroPagina(numeroPagina + 1)}>forward</button>
		        </div>
			</div>
		</div>
	)
}

function mapStateToProps(state){
	return {
		countries: state.countries
	}
}

function mapDispatchToProps(dispatch){
	return {
		getCountries: () => dispatch(getCountries()),
		getCountry: nombre => dispatch(getCountry(nombre))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Countries)

