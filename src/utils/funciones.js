//--------------------------  LOGIN  -----------------------------//

export function index(){

	fetch(`${import.meta.env.VITE_URL}`, {
		method: 'GET',
		headers: {
			"Content-Type": "Application/json",
		}
	})
	.then(response=> response.json())
	.then(data=> console.info(data))
	.catch(error=>console.error(error))

}



export function userLogin(body,navigate,setActive){
	
	fetch(`${import.meta.env.VITE_URL}/login`, {
		method: 'POST',
		headers: {
			"Content-Type": "Application/json"
		},
		body: JSON.stringify(body)
	})
	.then(response=>response.json())
	.then(data=>{
		if(data.status == 201){
			//localStorage.setItem("token", data.ideaspace.token)
			localStorage.setItem("ideaspace", JSON.stringify(data.ideaspace))
			navigate('/index')
			setActive(true)
		}
		else {
			console.info(data.message, data.status)
		}
	})

}




//--------------------------  REGISTER  -----------------------------//

export function register(body){
	fetch(`${import.meta.env.VITE_URL}/register`, {
		method: 'POST',
		headers: {
			"Content-Type": "Application/json"
		},
		body: JSON.stringify(body)
	})
	.then(res=>res.json())
	.then(data=>{
		console.info(data.response)
	})
	.catch(error=>console.error(error))
}




//--------------------------  INFO  -----------------------------//

export function getUserInfo(setInfo,navigate){

	return fetch(`${import.meta.env.VITE_URL}/info`, {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${JSON.parse(localStorage.getItem("ideaspace")).token}`
		}
	})
	.then(res => res.json())
	.then(data => {
		if(data.status === 201){
			setInfo(data.response)
		} else {
			navigate('/')
		}
	})
	.catch(error=> console.info(error))

}



export function funcAddInfo(category,title,details,color,priority){

	return fetch(`${import.meta.env.VITE_URL}/info`, {
		method: "POST",
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${JSON.parse(localStorage.getItem("ideaspace")).token}`
		},
		body: JSON.stringify({'category': category, 'title': title, 'details': details, 'color': color, 'priority': priority})
	})
	.then(res => res.json())
	.then(data => {
		if(data.code === 201) console.info(`Tu ${category} fue agregada satisfactoriamente!.`)
		else return data
	})
	.catch(error=> console.info(error))
}




export function funcUpdateInfo(id_info,category,title,details,color,priority){
	return fetch(`${import.meta.env.VITE_URL}/info`, {
		method: "PUT",
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${JSON.parse(localStorage.getItem("ideaspace")).token}`
		},
		body: JSON.stringify({'id_info': id_info, 'category': category, 'title': title, 'details': details, 'color': color, 'priority': priority})
	})
	.then(res => res.json())
	.then(data => {
		if(data.code === 201) console.info(`Tu ${category} fue actualizada satisfactoriamente!.`)
		else return data
	})
	.catch(error=> console.info(error))
}




export function funcDeleteInfo(id_info){
	return fetch(`${import.meta.env.VITE_URL}/info`, {
		method: "DELETE",
		headers: {
			"Content-Type": "Application/json",
			"Authorization": `Bearer ${JSON.parse(localStorage.getItem("ideaspace")).token}`
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

