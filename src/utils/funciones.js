//--------------------------  LOGIN  -----------------------------//

export function userLogin(body,navigate,setActive){

	fetch(`${import.meta.env.VITE_URLocal}/login`, {
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




//--------------------------  REGISTER  -----------------------------//

export function register(body){
	fetch(`${import.meta.env.VITE_URLocal}/register`, {
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




//--------------------------  INFO  -----------------------------//

export function getUserInfo(setInfo,navigate){

	return fetch(`${import.meta.env.VITE_URLocal}/info`, {
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



export function funcAddInfo(category,title,details){

	return fetch(`${import.meta.env.VITE_URLocal}/info`, {
		method: "POST",
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify({'category': category, 'title': title, 'details': details, 'color': 5, 'priority': 5})
	})
	.then(res => res.json())
	.then(data => {
		if(data.code === 201) console.info(`Tu ${category} fue agregada satisfactoriamente!.`)
		else return data
	})
	.catch(error=> console.info(error))
}




export function funcUpdateInfo(id_info,category,title,details){
	return fetch(`${import.meta.env.VITE_URLocal}/info`, {
		method: "PATCH",
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify({'id_info': id_info, 'category': category, 'title': title, 'details': details})
	})
	.then(res => res.json())
	.then(data => {
		if(data.code === 201) console.info(`Tu ${category} fue actualizada satisfactoriamente!.`)
		else return data
	})
	.catch(error=> console.info(error))
}




export function funcDeleteInfo(id_info){
	return fetch(`${import.meta.env.VITE_URLocal}/info`, {
		method: "DELETE",
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify({'id_info': id_info})
	})
	.then(res => res.json())
	.then(data => {
		if(data.code === 201) console.info(`Tu item fue eliminada satisfactoriamente!.`)
		else return data
	})
	.catch(error=> console.info(error))
}

