import { useEffect } from 'react'
import store from '../utils/store'
import { BiEditAlt, BiBookBookmark } from "react-icons/bi"
import { getUserInfo } from '../utils/funciones'

import Sidebar from './Sidebar.jsx' //Refactorizar
import ModalAddInfo from './ModalAddInfo.jsx'
import Note from './Note.jsx'
import { useNavigate } from "react-router-dom";


export default function Index(){


	const { showBookmark, info, id_info, addInfo, setInfo, setShowBookmark, setAddInfo, setItemUpdate, setCategory, setColor, setPriority } = store()
	const navigate = useNavigate()

	useEffect(()=>{
		getUserInfo(setInfo,navigate)
		console.info(`[ Bienvenido ${JSON.parse(localStorage.getItem('ideaspace')).user} ]`)
	},[])

	return (
		<main className='h-screen overflow-hidden'>
			{ addInfo && <ModalAddInfo/> }
			<div className='overflow-x-hidden'>
		      <div className='h-16 border-b-2 flex flex-row items-center justify-between'>
		      	<button onClick={()=>setShowBookmark(!showBookmark)} className='px-5 h-full hover:text-blue-600 hover:bg-blue-50 duration-200'><BiBookBookmark className='text-[28px]'/></button>
		      	<h2 className='text-xl font-medium tracking-tight'>Tú espacio de ideas</h2>
		      	<button onClick={()=>{
      					setAddInfo(true)
      					setItemUpdate(true)
      					const nota_actual = info?.filter((item)=>item.id_info === id_info)[0]
      					setCategory(nota_actual.category)
      					setColor(nota_actual.color)
      					setPriority(nota_actual.priority)
      					setTimeout(()=>{
	      					document.querySelector('#title').innerHTML = nota_actual.title
	      					document.querySelector('#details').innerHTML = nota_actual.details
      					},250)
      				}}
      				className='px-5 h-full hover:text-blue-600 hover:bg-blue-50 duration-200'><BiEditAlt className='text-[28px]'/></button>
		      </div>
				<div className="flex">
					<Sidebar/>
					<Note/>
				</div>
			</div>
		</main>
	)
}
