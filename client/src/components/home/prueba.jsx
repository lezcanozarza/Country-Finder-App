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
				qwe.push({
					link: response.data.secure_url,
					public_id: response.data.public_id
				})
				console.log(response)
		})
		})
		
		setImagenes({
			asd: [...imagenes.asd, qwe]
		})
	};



	return(
	<div>
	<input type="file" 
	onChange={(event) => {
		var linkes=[]
		for (var i = 0; i < event.target.files.length; i++) {
			linkes.push(event.target.files[i])
		 }
		 setImages({
			links: linkes
		})

	}} multiple/>
	<button onClick={upload}>upload</button>


	</div>
	
	)
}