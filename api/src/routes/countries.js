var express = require('express')
var router = express.Router()
const fetch = require("node-fetch")
module.exports = router;
const { Country, Actividad, act_count } = require ('../db.js')
const bodyParser = require('body-parser')

router.use(bodyParser.json())




router.get('/', async (req, res) => {
	var name = req.query.name
	var continen = req.query.continent

	if(continen) {
		let fContinen = await Country.findAll({
			where: {
				continente: continen
			}
		})
		res.json(fContinen)
	} else if(name) {
		let fCountry = await Country.findAll({
			where:{
				nombre: name
			},
			include: Actividad
		})

		res.json(fCountry)

	} else if(req.query.activity){
		const nActivity = req.query.activity
		const fActivity = await Country.findAll({
			include:{
				model: Actividad,
				where: {
					nombre: nActivity
				},
				required: true
			}
		})
		return res.json(fActivity)
	} else {

		const counts = await Country.findAll()

		res.send(counts)
		// fetch('https://restcountries.eu/rest/v2/all')
		// .then(response => response.json())
		// .then(response => {
		//
		// response.forEach(c => {
		//
		// 	var paises = Country.findOrCreate({
		// 	where:{
		// 		id: c.alpha3Code,
		// 		nombre: c.name,
		// 		bandera: c.flag,
		// 		continente: c.region,
		// 		capital: c.capital,
		// 		subregion: c.subregion,
		// 		area: c.area ? c.area.toString() : null,
		// 		poblacion: c.population ? c.population.toString() : 0
		// 	}
		// })
		// 	return paises
		// })
		// }).catch(error =>{
		// console.error("ERROR EN LA CREACION", error)
		// })

	}
})


router.get('/detalle/:idPais', async (req, res) => {

	let country = await Country.findByPk(req.params.idPais, {
		include: Actividad
	})

	res.send(country)
})

router.post('/', async(req, res) => {
	const newActivity =  await Actividad.create({

			nombre: req.body.nombre,
			dificultad: req.body.dificultad,
			duracion: req.body.duracion,
			temporada: req.body.temporada

	})

	var idPaises = req.body.id
	var actividadId = newActivity.id
	var activi = newActivity

	var relaciones = []


	idPaises.map(p => {

		relaciones.push(
			{actividadId:[actividadId],
			countryId: p}
			)
	})


	act_count.bulkCreate(relaciones)
	res.send(activi)
})

router.get('/activities', async(req, res) =>{

	let act = await Actividad.findAll()

	res.json(act)
})
