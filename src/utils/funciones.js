export function userLogin(body,navigate,setActive){

	fetch('http://localhost:8081/login', {
		method: 'POST',
		headers: {
			"Content-Type": "Application/json"
		},
		body: JSON.stringify(body)
	})
	.then(response=>response.json())
	.then(info=>{
		if(info.status == 200){
			localStorage.setItem("token", info.token)
			localStorage.setItem("username", info.username)
			navigate('/index')
			setActive(true)
		} else {
			console.info(info)
		}
	})

}




export function getUserInfo(setState,navigate){

	fetch('http://localhost:8081/index', {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		}
	})
	.then(res => res.json())
	.then(data => {
		if(data.code === 200){
			setState(data.etiquetas)
		} else {
			navigate('/')
		}
	})
	.catch(error=> console.info(error))

}




export function addLabel(nueva_etiqueta,setEtiquetas){
	return fetch(`http://localhost:8081/label`, {
		method: "POST",
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify({new_label: nueva_etiqueta})
	})
	.then(res => res.json())
	.then(data =>{
		if(data.code === 201) return getUserInfo(setEtiquetas)
		else return data
	})
	.catch(error=> console.info(error))
}




export function getNotes(id_label, setState){
	return fetch(`http://localhost:8081/note`, {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		}
	})
	.then(res => res.json())
	.then(data => setState(data.notas))
	.catch(error=> console.info(error))
}





export function allNotes(setState){
	return fetch(`http://localhost:8081/note`, {
		method: "POST",
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		}
	})
	.then(res => res.json())
	.then(data => setState(data.notas))
	.catch(error=> console.info(error))
}





export function addNote(id_etiqueta,nueva_nota,detalles_note,setState){
	return fetch(`http://localhost:8081/note`, {
		method: "POST",
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify({id_label: id_etiqueta, note: nueva_nota, details_note: detalles_note})
	})
	.then(res => res.json())
	.then(data => {
		if(data.code === 201) return getNotes(id_etiqueta,setState)
		else return data
	})
	.catch(error=> console.info(error))
}





export function updateLabel(id_label,body,setState){

	fetch(`http://localhost:8081/label/${id_label}`, {
		method: 'PATCH',
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify(body)
	})
	.then(response=>response.json())
	.then(data=>{
		if(data.code === 201) return getUserInfo(setState)
		else console.info(data)
	})

}





export function updateNote(id_nota,body,id_etiqueta,setState){

	fetch(`http://localhost:8081/note/${id_nota}`, {
		method: 'PATCH',
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify(body)
	})
	.then(response=>response.json())
	.then(data=>{
		if(data.code === 201) return getNotes(id_etiqueta,setState)
		else console.info(data)
	})

}





export function deleteLabel(id_label,setEtiquetas){

	fetch(`http://localhost:8081/label/${id_label}`, {
		method: 'DELETE',
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		}
	})
	.then(response=>response.json())
	.then(info=>{
		if(info.code === 201){
			fetch('http://localhost:8081/index', {
				method: "GET",
				headers: {
					"Authorization": `Bearer ${localStorage.getItem("token")}`
				}
			})
			.then(res => res.json())
			.then(data => setEtiquetas(data.etiquetas))
			.catch(error=> console.info(error))			
		}
	})

}





export function deleteNote(id_nota,id_label,setState){

	fetch(`http://localhost:8081/note/${id_nota}`, {
		method: 'DELETE',
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		}
	})
	.then(response=> response.json())
	.then(info=>{
		getNotes(id_label,setState)
		console.info(info.code)
	})

}