import { GET_COUNTRIES, GET_COUNTRY_DETAIL, CHANGE_COUNTRIES,
	GET_COUNTRY, SORT_PAISES, SORT_HAB, FILTRO_CONT, GET_ACTIVITIES } from '../actions/index.js'

const initialState={
	countries:[],
	countryDetail:{},
	countryName:[],
	actividades:[]
}

function rootReducer(state=initialState, action){
	if(action.type === GET_COUNTRIES){
		return{
			...state,
			countries: action.payload
		}
	}
	if (action.type === GET_COUNTRY_DETAIL){
		return{
			...state,
			countryDetail: action.payload,
			countryName: action.payload.nombre
		}
	}
	if (action.type === GET_COUNTRY){
		return{
			...state,
			countries: action.payload
		}
	}
	if (action.type === SORT_PAISES){
		return{
			...state,
			countries: action.payload
		}
	}
	if (action.type === GET_ACTIVITIES){
		return{
			...state,
			actividades: action.payload
		}
	}
	if (action.type === CHANGE_COUNTRIES){
		return{
			...state,
			countries: action.payload
		}
	}
	if (action.type === SORT_HAB){
		return{
			...state,
			countries: action.payload
		}
	}
	if (action.type === FILTRO_CONT){
		return{
			...state,
			countries: action.payload
		}
	}


	return state;
}

export default rootReducer;