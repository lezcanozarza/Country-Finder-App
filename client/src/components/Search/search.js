import React, { useState } from 'react';
import './search.css';
import { connect } from 'react-redux';
import Country from '../Country/country.js';
import { getCountry } from '../../actions/index.js'

export function Search(props) {
	const [input, setInput] = useState({
		pais: "",
	})

	function handleChange(e){
    setInput({
    	pais: e.target.value
    })};

    function handleSubmit(e){
    	e.preventDefault()

    if (input.pais) {
      props.getCountry(input.pais)
    }
    else {
      alert("You must enter a valid country name!")
    }


  }

	return(
	<div className="cnt">
		<form onSubmit={(e) => handleSubmit(e)}>
		<input
		className="input"
		type="text"
		placeholder="Search Country..."
		name="pais"
		value={input.pais}
		onChange={(e) => handleChange(e)}

		/>
		<button type="submit" className="btns">Search</button>
		</form>
	</div>
	)
}

function mapStateToProps(state) {
  return {
    	countries: state.countries
	}
}

function mapDispatchToProps(dispatch) {
  return {
    getCountry: nombre => dispatch(getCountry(nombre))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)