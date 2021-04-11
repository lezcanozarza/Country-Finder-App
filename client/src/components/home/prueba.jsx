import React, {useState} from 'react'
// import fetch from 'node-fetch'
import Axios from 'axios'
export default function Prueba(){

	const [images, setImages] = useState({
		links: []
	})

	const [imagenes, setImagenes] = useState({
		asd:[]
	})

	const upload = () => {

	var qwe = []

		images.links.map(c => {
			const formData = new FormData()
			formData.append('file', c)
			formData.append('upload_preset', 'techstore_uploads')

			Axios.post('http://api.cloudinary.com/v1_1/techstore/image/upload', formData)
			.then(response => {
				qwe.push(response.data.secure_url)
				console.log(response)
		})
		})
		
		setImagenes({
			asd:[qwe]
		})
	};



	return(
	<div>
	<input type="file" 
	onChange={(event) => {
		setImages({
			links:[...images.links, event.target.files[0]]
		})
	}}/>
	<input type="file" 
	onChange={(event) => {
		setImages({
			links:[...images.links, event.target.files[0]]
		})
	}}/>
	<input type="file" 
	onChange={(event) => {
		setImages({
			links:[...images.links, event.target.files[0]]
		})
	}}/>
	<button onClick={upload}>upload</button>


	</div>
	
	)
}