export function userLogin(body,navigate,setActive){

	fetch('http://localhost:8081/login', {
		method: 'POST',
		headers: {
			"Content-Type": "Application/json"
		},
		body: JSON.stringify(body)
	})
	.then(response=>response.json())
	.then(data=>{
		if(data.status == 200){
			localStorage.setItem("token", data.token)
			localStorage.setItem("username", data.username)
			navigate('/index')
			setActive(true)
		} else {
			console.info(data)
		}
	})

}


//(nombre, apellido, email, password, username, role)
export function register(body){
	fetch('http://localhost:8081/register', {
		method: 'POST',
		headers: {
			"Content-Type": "Application/json"
		},
		body: JSON.stringify(body)
	})
	.then(res=>res.json())
	.then(data=>{
		if(data.code === 200) console.info('Usuario registrado exitosamente!.')
		else console.info("error en la query de register")
	})
	.catch(error=>console.error(error))
}



export function getUserInfo(setInfo,navigate){

	return fetch('http://localhost:8081/index', {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		}
	})
	.then(res => res.json())
	.then(data => {
		if(data.code === 200){
			setInfo(data.info)
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





export function funcAddInfo(category,title,details){
	//console.info({'category': category, 'title': title, 'details': details})
	return fetch(`http://localhost:8081/info`, {
		method: "POST",
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify({'category': category, 'title': title, 'details': details, 'color': 5, 'priority': 3})
	})
	.then(res => res.json())
	.then(data => {
		if(data.code === 201) console.info(`Tu ${category} fue agregada satisfactoriamente!.`)
		else return data
	})
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

	return fetch(`http://localhost:8081/label/${id_label}`, {
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

	return fetch(`http://localhost:8081/note/${id_nota}`, {
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





export function deleteLabel(id_label){

	return fetch(`http://localhost:8081/label/${id_label}`, {
		method: 'DELETE',
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		}
	})
	.then(response=>response.json())
	.then(info=>{
		if(info.code === 201){
			console.info('Etiqueta eliminada satisfactoriamente!.')
		} else {
			console.info('Error en la query para eliminar Etiqueta de la DB!.')
		}
	})
	.catch(error=>{
		console.error("Ha ocurrido un error:", error)
	})
}





export function deleteNote(id_nota){

	return fetch(`http://localhost:8081/note/${id_nota}`, {
		method: 'DELETE',
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		}
	})
	.then(response=> response.json())
	.then(data=>{
		if(data.code === 201){
			console.info('Nota eliminada satisfactoriamente!.')
		} else {
			console.info('Error en la query para eliminar Nota de la DB!.')
		}
	})
	.catch(error=>{
		console.error("Ha ocurrido un error:", error)
	})
}