import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getCountryDetail } from '../../actions/index';

import './detalles.css'

function Detalles(props){

	useEffect(() => {
    const idPais = props.match.params.idPais;
    props.getCountryDetail(idPais)
  }, [])

	return(

		<div className="contdetail">
		<div className="cardetail">
		<div className="arriba">
			<img src={props.countryDetail.bandera} alt={props.countryDetail.nombre} width="400px" height="300" className="ert"/>
			<div className="ddetail">
			<h1>{props.countryDetail.nombre}</h1>
			<h2>{props.countryDetail.continente}</h2>
			<h3>Codigo de país: {props.countryDetail.id}</h3>
			<p>Capital: {props.countryDetail.capital}</p>
			<p>Subregión: {props.countryDetail.subregion}</p>
			<p>Area: {props.countryDetail.area}km2 </p>
			<p>Población: {props.countryDetail.poblacion} </p>
			</div>
		</div>

		<div className="abajo">
			<div className="dactiv">
				<div className="titles">
					<div className="ddatos">
						actividad
					</div>
					<div className="ddatos">
						dificultad
					</div>
					<div className="ddatos">
						Duración
					</div>
					<div className="ddatos">
						temporada
					</div>
				</div>
			<p className="ddactiv">{props.countryDetail.actividads && props.countryDetail.actividads.map(c => 
				<div className="racts">
				<div className="ddatos">
				{c.nombre} <br/>
				</div>
				<div className="ddatos">
				{c.dificultad} <br/>
				</div>
				<div className="ddatos">
				{c.duracion} <br/>
				</div>
				<div>
				{c.temporada}
				</div>
				</div>
				)}</p>
			</div>
		</div>

		</div>
		</div>
		)

}

function mapStateToProps(state){
	return {
		countryDetail: state.countryDetail
	}
}

function mapDispatchToProps(dispatch){
	return{
		getCountryDetail:(id) => dispatch(getCountryDetail(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Detalles)
