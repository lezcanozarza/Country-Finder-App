import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import { connect } from 'react-redux';
import { getCountries } from '../../actions/index.js';
import logo from '../../images/crear-pais.png';
import './crearactividad.css';

export function CrearActividad(props){

	const [input, setInput] = useState({
	    id: [],
	    nombre: "",
	    dificultad: "",
	    duracion: "",
	    temporada: "",
      paises: ""
 	})

 	function handleChange(e) {

    setInput({
	      ...input,
	      [e.target.name]: e.target.value
    	})
  	}

  function handlePais(e) {

    setInput({
      ...input,
      [e.target.name]:[...input.id, e.target.value]
    })

  }



  	useEffect(() => {
    props.getCountries()
  	}, [])

  	async function handleSubmit(e) {
  		e.preventDefault()
  		window.location.href = "http://localhost:3000/home"
    	await fetch('http://localhost:3001/countries', {
	      	method: 'POST',
	      	headers: {
	        'Content-Type': 'application/json'
	    },
    	body: JSON.stringify(input)
    	})
    	
  	}



	 return(
    <div className="contForm">

      <div className="creat">
        <div className="asdd">
          <img src={logo} alt="logo" className="rimgl"/>
          <h1>Create Activities</h1>
        </div>
        <div className="desc">
          <p style={{fontSize:"25px"}}> <strong>Welcome to the activity creation page!</strong> <br/><br/>
          Whether you are a tourist who passed through the country,<br/> a local who wants to register one,
          or you simply know of a tourist activity <br/> that is not in our systems,
          you can add them in the creation form.</p>
        </div>
      </div>



	 	<form className="form" onSubmit={handleSubmit}>

	 	<div>
        <p className="texto">Activity Name</p>
          <input
            placeholder="Name"
            type="text"
            name="nombre"
            required="required"
            value={input.nombre}
            onChange={handleChange}
            className="inpputs"
          />
        </div>

        <div>
        <p className="texto">Activity Difficulty (1-5 easier to harder)</p>
          <select className="selects" name="dificultad" value={input.dificultad} onChange={handleChange} required>
            <option value="">Difficulty</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div>
        <p className="texto">duration of the activity <br/> (ex: trekking five hours)</p>
          <input
            placeholder="Duration"
            type="text"
            name="duracion"
            required="required"
            value={input.duracion}
            onChange={handleChange}
            style={{marginTop: "10px"}, {marginBottom: "5px"}}
            className="inpputs"
          />
        </div>

        <div>
        <p className="texto">In what season can the activity <br/> be carried out?</p>
          <select className="selects" name="temporada" value={input.temporada} onChange={handleChange} required>
            <option value="">Season</option>
            <option value="verano">Summer</option>
            <option value="otoño">Autumn</option>
            <option value="invierno">Winter</option>
            <option value="primavera">Spring</option>
          </select>
        </div>

        <div>
        <p className="texto">In which countries does the activity take <br/> place? (you can select more than one)</p>
        <select className="selects" name="id" value={input.id} onChange={handlePais}>
          <option value="">Pais</option>
          {props.countries && props.countries.map(c => (
            <option value={c.id} name="c.nombre">{c.nombre}</option>
          ))}
        </select>
        </div>

        <input className="cract" type="submit" value="Create Activity" />
        
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
    getCountries:() => dispatch(getCountries())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CrearActividad)