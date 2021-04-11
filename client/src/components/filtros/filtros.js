import React, {useEffect}  from 'react'
import { connect } from 'react-redux';
import './filtros.css'

import { filtroCont, changeCountries, getActivities, getCountries } from '../../actions/index.js'

export function Filtros(props){

	useEffect(()=> {
		props.getActivities()
	},[])

	function handleDispatchCont(event) {
		props.filtroCont(event.target.value)
  	}
  	function handleDispatchAct(event) {
  		props.changeCountries(event.target.value)
  	}

  	return(
  	<div className="filtros">
	  		<select className="filtroContinente" name="continent" onChange={handleDispatchCont}>
			    <option value="">Filter by Continent</option>
			    <option value="Europe">Europe</option>
			    <option value="Americas">Americas</option>
			    <option value="Asia">Asia</option>
			    <option value="Oceania">Oceania</option>
			    <option value="Africa">Africa</option>
			    <option value="Polar">Polar</option>
		    </select>

  			<select className="filtroActividades" name="actividades" onChange={handleDispatchAct}>
	  			<option value="">Filtrar by Tourist Activity</option>
	  			{props.activities && props.activities.map(s => (
	  			<option value={s.nombre}>{s.nombre}</option>
	  			))}
  			</select>
  	</div>
  	)
}

function mapStateToProps(state){
	return {
		countries: state.countries,
		activities: state.actividades

	}
}

function mapDispatchToProps(dispatch){
	return {
		filtroCont:(a, b) => dispatch(filtroCont(a,b)),
		getActivities: () => dispatch(getActivities()),
		changeCountries: (name) => dispatch(changeCountries(name)),
		getCountries: () => dispatch(getCountries())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtros)