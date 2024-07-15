import { useEffect } from 'react'
import store from '../utils/store'
import { BiEditAlt, BiBookBookmark } from "react-icons/bi"
import { getUserInfo } from '../utils/funciones'

import Sidebar from './Sidebar.jsx' //Refactorizar
import ModalAddInfo from './ModalAddInfo.jsx'
import Note from './Note.jsx'
import { useNavigate } from "react-router-dom";


export default function Index(){
	const navigate = useNavigate()
	const { showBookmark, info, id_info, addInfo, setInfo, setEtiquetas, id_nota, notas, setNotas, id_etiqueta, setId_etiqueta, setShowBookmark, modalNotas, setModalNotas, modalLabels, setModalLabels, labelUpdate, setLabelUpdate, noteUpdate, setNoteUpdate, setAddInfo, setItemUpdate } = store()
	useEffect(()=>{
		getUserInfo(setInfo,navigate)
		console.info('render index.jsx [ getUserInfo() ]')
		console.info(info)
	},[])

	return (
		<main className='h-screen overflow-hidden'>
			{ addInfo && <ModalAddInfo/> }
			<div className='overflow-x-hidden'>
		      <div className='h-16 border-b-2 flex flex-col items-center gap-4 sm:flex-row sm:justify-between'>
		      	<button onClick={()=>setShowBookmark(!showBookmark)} className='px-5 h-full hover:text-blue-600 hover:bg-blue-50 duration-200'><BiBookBookmark className='text-[28px]'/></button>
		      	<h2 className='text-xl font-medium tracking-tight'>Tú espacio de ideas</h2>
		      	<button onClick={()=>{
      					setAddInfo(true)
      					setItemUpdate(true)
      					const nota_actual = info?.filter((item)=>item.id_info === id_info)[0]
      					setTimeout(()=>{
	      					document.querySelector('#category').value = nota_actual.category
	      					document.querySelector('#title').value = nota_actual.title
	      					document.querySelector('#details').value = nota_actual.details
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
