export const GET_COUNTRIES  = 'GET_COUNTRIES'
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL'
export const GET_COUNTRY = 'GET_COUNTRY'
export const SORT_PAISES ='SORT_PAISES'
export const SORT_HAB ='SORT_HAB'
export const FILTRO_CONT = 'FILTRO_CONT'
export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const CHANGE_COUNTRIES = 'CHANGE_COUNTRIES'
export const ASD = 'Razas-A-Z';
export const DES = 'Razas-Z-A';
export const HASD = 'HABITANTES_ASD';
export const HDES = 'HABITANTES_DES';

export function getCountries(){
	return function(dispatch){
		return fetch('http://localhost:3001/countries')
		.then(response => response.json())
		.then(json => {
			dispatch({ type: GET_COUNTRIES, payload: json})
		})
	}
}

export function getCountry(name){
	return function(dispatch){
		return fetch(`http://localhost:3001/countries?name=${name}`)
		.then(response=> response.json())
		.then(json => {
			dispatch({ type: GET_COUNTRY, payload: json})
		})
	}
}
export function getCountryCrear(name){
	return function(dispatch){
		return fetch(`http://localhost:3001/countries/detalle/${name}`)
		.then(response=> response.json())}}

export function getCountryDetail(id){
	return function(dispatch){
		return fetch(`http://localhost:3001/countries/detalle/${id}`)
		.then(response => response.json())
		.then(json => {
			dispatch({ type: GET_COUNTRY_DETAIL, payload: json})
		})
	}
}

export function getActivities(){
	return function(dispatch){
		return fetch('http://localhost:3001/countries/activities')
			.then(response => response.json())
			.then(json => {
				dispatch({type: GET_ACTIVITIES, payload: json})
		})
	}}

export function changeCountries(nameA){
	return function(dispatch){
		return fetch(`http://localhost:3001/countries?activity=${nameA}`)
		.then(response => response.json())
		.then(json => {
			dispatch({type: CHANGE_COUNTRIES, payload: json})
		})
	}
}

export function sort(orden, opaises){
	let paises = [...opaises]

	paises.sort((a,b) => {

		var nombreA = (a.habitantes || 1) / (a.area ||  1);
        var nombreB = (b.habitantes || 1) / (b.area || 1);


		if(orden === ASD){
            if(nombreA < nombreB){
                return -1;
            }
            if(nombreA > nombreB){
                return 1
            }
            return 0
        }
        if(orden === DES){
            if(nombreA < nombreB){
                return 1;
            }
            if(nombreA > nombreB){
                return -1
            }
            return 0
        }
	})
	return function(dispatch){
        dispatch({type: SORT_PAISES, payload: paises})
    }
}

export function sortHab(orden, oHabitantes){
	let habitantes = [...oHabitantes]

	habitantes.sort(function(a,b){

		var poblacionA = parseFloat(a.poblacion)
        var poblacionB = parseFloat(b.poblacion)



		if(orden === HASD){
            if(poblacionA < poblacionB){
                return -1;
            }
            if(poblacionA > poblacionB){
                return 1
            }
            return 0
        }
        if(orden === HDES){
            if(poblacionA < poblacionB){
                return 1;
            }
            if(poblacionA > poblacionB){
                return -1
            }
            return 0
        }
	})
	return function(dispatch){
        dispatch({type: SORT_HAB, payload: habitantes})
    }
}

export function filtroCont(data) {
	return function(dispatch){
		return fetch(`http://localhost:3001/countries?continent=${data}`)
		.then(response=> response.json())
		.then(json => {
			dispatch({ type: GET_COUNTRY, payload: json})
		})
	}
}


