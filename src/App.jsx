import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Principal from './Components/Principal'
import Footer from './Components/Footer'
import './App.css'


function App() {

  return (
    <div className='flex flex-col h-screen overflow-hidden'>
		<Navbar/>
		<Principal/>
    </div>
  )
}

export default App

/*


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