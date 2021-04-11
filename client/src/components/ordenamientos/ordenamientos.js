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
				    <option>order Alphabetically</option>
				    <option value={ASD}>Ascendant</option>
				    <option value={DES}>descendant</option>
				 </select>

				<select className="hab" onChange={handleDispatchHab}>
				    <option>Order by Habitants</option>
				    <option value={HASD}>Ascendant</option>
				    <option value={HDES}>descendant</option>
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