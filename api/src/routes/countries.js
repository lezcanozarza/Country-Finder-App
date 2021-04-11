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
	// console.log('ACA ESTAN LOS IDPAISES', idPaises)

	idPaises.map(p => {
		// console.log('ACA ESTA LO DE P', p)
		relaciones.push(
			{actividadId:[actividadId],
			countryId: p}
			)
	})
	// console.log('ESTE DEBERÍA SER EL ARREGLO FINAL', relaciones)


	act_count.bulkCreate(relaciones)
	res.send(activi)
})

router.get('/activities', async(req, res) =>{

	let act = await Actividad.findAll()

	res.json(act)
})
