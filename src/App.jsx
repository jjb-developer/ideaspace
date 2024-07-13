import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Principal from './Components/Principal'
import Footer from './Components/Footer'
import './App.css'


function fetchPost(url){
	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "Application/json"
		},
		body: JSON.stringify({ "node": "Express", "golang": "Gin", "python": "Flask" }),
	})
	.then(res => res.json())
	.then(data => console.info(data))
}


function fetchPython(url,setData){
	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ "username": "kross", "password": "12345" }),
	})
	.then(res => res.json())
	.then(data => {
		if(data.status == 200){
			localStorage.setItem('token', data.token)
			console.info(`Status(${data.status}) - Usuario Logeado.`)
			fetchRutaProtegida('http://localhost:8081/index',setData)
		}
	})
}


function fetchRutaProtegida(url,setData){
	fetch(url, {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${localStorage.getItem("token")}`
		}
	})
	.then(res => res.json())
	.then(data => setData(data.tareas))
}


function fetchOne(url,setData){
	fetch(url)
	.then(res=>res.json())
	.then(data=>setData(data))
}


async function fetchPostJasonplaceholdem(url,setData){
	try {
		const response = await fetch(url)
		const json = await response.json()
		setData(json)
	} catch (error) {
		console.error('Ha ocurrido un error: ', error)
	}
}

function App() {
	const [data,setData] = useState([])
	const URLocal = 'http://localhost:3000'
	const URLine = 'https://jsonplaceholder.typicode.com/users'

	useEffect(()=>{
		//fetchPostJasonplaceholdem(URLine,setData)
		//fetchOne(URLocal,setData)
		
	}, [])

	// L96 { !data.result ? <p>Loading...</p>:<ul className='flex flex-col gap-y-4 '>{ data.result.map((user, index)=>{
  return (
    <div className='flex flex-col justify-between1 min-h-screen'>
		<Navbar/>
		<Principal/>
    </div>
  )
}

export default App

/*

		<Footer/>

      <div className='flex gap-x-4'>
	      <button 
	      	onClick={()=> fetchPython('http://localhost:8081/login',setData)}
	      	className='font-bold text-sm tracking-tight uppercase py-2.5 px-6 rounded bg-sky-500 text-sky-900'>python
	      </button>
	      <button 
	      	onClick={()=> fetchPost('http://localhost:3000/login')}
	      	className='font-bold text-sm tracking-tight uppercase py-2.5 px-6 rounded bg-sky-500 text-sky-900'>node
	      </button>
	      <button 
	      	onClick={()=> fetchPost('http://localhost:8080/login')}
	      	className='font-bold text-sm tracking-tight uppercase py-2.5 px-6 rounded bg-sky-500 text-sky-900'>golang
	      </button>
      </div>
      <div className='flex gap-x-4 mt-5'>
	      <button 
	      	onClick={()=> fetchRutaProtegida('http://localhost:8081/index')}
	      	className='font-bold text-sm tracking-tight uppercase py-2.5 px-6 rounded bg-emerald-500 text-emerald-900'>python
	      </button>
	      <button 
	      	onClick={()=> fetchRutaProtegida('http://localhost:3000/index')}
	      	className='font-bold text-sm tracking-tight uppercase py-2.5 px-6 rounded bg-emerald-500 text-emerald-900'>node
	      </button>
	      <button 
	      	onClick={()=> fetchRutaProtegida('http://localhost:8080/index')}
	      	className='font-bold text-sm tracking-tight uppercase py-2.5 px-6 rounded bg-emerald-500 text-emerald-900'>golang
	      </button>
      </div>


      <div>
      	{ !data ? <p>'Loading...'</p>:<p>{data.message}</p> }
      </div>


*/