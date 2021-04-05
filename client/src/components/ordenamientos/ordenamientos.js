import React from 'react'
import { connect } from 'react-redux';

import {sort, sortHab, ASD, DES, HASD, HDES} from '../../actions/index.js';

import './ordenamientos.css'

export function Ordenamientos(props){

	function handleDispatchOrder(event) {
    if (event.target.value === ASD || event.target.value === DES) {
      		props.sort(event.target.value, props.countries)
    	}
  	}
  	function handleDispatchHab(event) {
    if (event.target.value === HASD || event.target.value === HDES) {
      		props.sortHab(event.target.value, props.countries)
    	}
  	}

  	return(
  		<div className="conteins">

		  		<select className="alfa" onChange={handleDispatchOrder}>
				    <option>Ordenar Alfabeticamente</option>
				    <option value={ASD}>Ascendente</option>
				    <option value={DES}>Descendente</option>
				 </select>

				<select className="hab" onChange={handleDispatchHab}>
				    <option>Ordenar Por Habitantes</option>
				    <option value={HASD}>Ascendente</option>
				    <option value={HDES}>Descendente</option>
				 </select>
			

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
		sort: (a, b) => dispatch(sort(a, b)),
		sortHab: (a, b) => dispatch(sortHab(a, b))
	}}

export default connect(mapStateToProps,mapDispatchToProps)(Ordenamientos)