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




//------------------------- Utilidades ---------------------------------------//


export function convertirToNegrita(range){
	if(range.startContainer.parentNode.nodeName === 'STRONG'){
		//console.info(`dentro de un ${range.startContainer.parentNode.nodeName}`)
		const fragment = document.createTextNode(range.toString())
		range.deleteContents()
		range.startContainer.parentNode.remove()
		range.insertNode(fragment)

	} else {
		//console.info(`dentro de un ${range.startContainer.parentNode.nodeName}`)
		const strong = document.createElement('strong')
		strong.textContent = range.toString()
		range.deleteContents()
		range.insertNode(strong)
	}
	window.getSelection().removeAllRanges()

/*
document.createTextNode('hello world')
range.startContents().parentNode.removeChild(target)
range.surroundContents(tag)
range.deleteContents()
range.insertNode(tag)
*/
}



export function convertirToCursiva(range){
	if(range.startContainer.parentNode.nodeName === 'I'){
		const fragment = document.createTextNode(range.toString())
		range.deleteContents()
		range.startContainer.parentNode.remove()
		range.insertNode(fragment)

	} else {
		const cursive = document.createElement('i')
		cursive.textContent = range.toString()
		range.deleteContents()
		range.insertNode(cursive)
	}
	window.getSelection().removeAllRanges()
}



export function resaltarTexto(range){
	if(range.startContainer.parentNode.nodeName === 'SPAN'){
		const fragment = document.createTextNode(range.toString())
		range.deleteContents()
		range.startContainer.parentNode.remove()
		range.insertNode(fragment)

	} else {
		const span = document.createElement('span')
		span.textContent = range.toString()
		span.classList.add('bg-yellow-200')
		range.deleteContents()
		range.insertNode(span)
	}
	window.getSelection().removeAllRanges()
}



export function convertirToNegrita1(range){
	//let range = selected.getRangeAt(0)
	//console.info(range)
	console.info(range.startContainer.parentNode.nodeName)
	if(range.startContainer.parentNode.nodeName === 'STRONG'){
		console.info('negrita')
		//const fragment = document.createTextNode(range.toString())
		//range.deleteContents()
		//range.insertNode(fragment)
	} else {
		console.info('no negrita')
		//const strong = document.createElement('strong')
		//strong.textContent = range.toString()
		//range.deleteContents()
		//range.insertNode(strong)
	}
	window.getSelection().removeAllRanges()

	//console.info(range.startContainer.parentNode.nodeName)
	//console.info(fragment)
	//const strong = document.createElement('strong')
	//strong.textContent = range.toString()
	//range.deleteContents()
	//range.insertNode(strong)
}



export function negrita(event){
	let selected = window.getSelection()
	//console.info(selected.rangeCount)
	if(selected.rangeCount > 0){
		const range = selected.getRangeAt(0)
		const strong = document.createElement('strong')
		strong.textContent = range.toString()
		range.deleteContents()
		range.insertNode(strong)
	}
}


export function removeNegrita(event){
	let textContent = event.target.textContent
	let parentTarget = event.target.parentNode
	const selection =  window.getSelection()
	if(selection.rangeCount > 0 && event.target.nodeName === 'STRONG'){
		const range = selection.getRangeAt(0)
		const fragment = document.createTextNode(textContent)
		parentTarget.removeChild(event.target)
		range.insertNode(fragment)
		selection.removeAllRanges()
	}
}


export function resaltar(event){
	let selected = window.getSelection()
	//console.info(selected.rangeCount)
	if(selected.rangeCount > 0){
		const range = selected.getRangeAt(0)
		const span = document.createElement('span')
		span.textContent = range.toString()
		span.classList.add('bg-yellow-200')
		range.deleteContents()
		range.insertNode(span)
	}
}


export function removeResaltado(event){
	let textContent = event.target.textContent
	let parentTarget = event.target.parentNode
	const selection =  window.getSelection()
	if(selection.rangeCount > 0 && event.target.nodeName === 'SPAN'){
		const range = selection.getRangeAt(0)
		const fragment = document.createTextNode(textContent)
		parentTarget.removeChild(event.target)
		range.insertNode(fragment)
		selection.removeAllRanges()
	}
}



function textToBold(texto,start_selection,end_selection){
	let start = texto.slice(0,start_selection)
	let selection = texto.slice(start_selection,end_selection)
	let end = texto.slice(end_selection)
	return`${start}<b class='bg-orange-300'>${selection}</b>${end}`
}



function selectedText(event){
	let selected = window.getSelection()
	let a = selected.baseOffset
	let b = selected.extentOffset
	let html = event.target.textContent
	event.target.innerHTML = textToBold(html,a,b)
}



//------------------------------   ESTILOS   ------------------------------//

export function addEncabezado(){
	const paper = document.getElementById('paper')
	const H1 = document.createElement('h1')
	H1.textContent = 'Tesis de Grado'
	H1.classList.add('text-3xl', 'font-bold', 'tracking-tight', 'uppercase', 'leading-[2rem]', 'my-6')
	paper.appendChild(H1)
}

export function addTitulo(){
	const paper = document.getElementById('paper')
	const H1 = document.createElement('h2')
	H1.textContent = 'Dominando el lenguaje Golang'
	H1.classList.add('text-2xl', 'font-bold', 'tracking-tight', 'leading-[1.5rem]', 'my-5')
	paper.appendChild(H1)
}

export function addSubtitulo(){
	const paper = document.getElementById('paper')
	const H1 = document.createElement('h3')
	H1.textContent = 'Introducción'
	H1.classList.add('text-xl', 'font-bold', 'tracking-tight', 'leading-[1.25rem]', 'my-4')
	paper.appendChild(H1)
}

export function addParrafo(){
	const paper = document.getElementById('paper')
	const p = document.createElement('p')
	p.textContent = 'Go was conceive d in Septemb er 2007 by Rob ert Gries emer, Rob Pike, and Ken Thomps on, all at Google, and was announced in Nov emb er 2009. The goals of the langu age and its accompany ing tools were to be expressive, efficient in bot h comp ilation and exe cut ion, and effec tive in writing reliable and robust programs. Go bears a sur face simi lar ity to C and, like C, is a tool for prof essional programmers, achie ving maximum effe ct wit h minimum means.'
	p.classList.add('text-[18px]', 'leading-[1.57rem]', 'my-6')
	paper.appendChild(p)
}