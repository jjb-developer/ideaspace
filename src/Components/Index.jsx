import { useState, useEffect } from 'react'
import store from '../utils/store'
import { BiEditAlt, BiTrash, BiPlusCircle, BiSave, BiBookBookmark } from "react-icons/bi"
import { getNotes, addLabel, addNote, getUserInfo, updateLabel, deleteLabel, updateNote, deleteNote } from '../utils/funciones'

import Sidebar from './Sidebar.jsx' //Refactorizar
import ModalForLabels from './ModalForLabels.jsx'
import ModalForNotes from './ModalForNotes.jsx'
import Note from './Note.jsx'
import { useNavigate } from "react-router-dom";


export default function Index(){
//	const [labelUpdate,setLabelUpdate] = useState(false)
//	const [noteUpdate,setNoteUpdate] = useState(false)
//	const [id_etiqueta,setId_etiqueta] = useState(1)
//	const [id_nota,setIdNota] = useState(1)
//	const [etiquetas,setEtiquetas] = useState([])
//	const [notas,setNotas] = useState([])
//	const [modalNotas,setModalNotas] = useState(false)
//	const [modalLabels,setModalLabels] = useState(false)
	const navigate = useNavigate()
	const { showBookmark, etiquetas, setEtiquetas, id_nota, notas, setNotas, id_etiqueta, setId_etiqueta, setShowBookmark, modalNotas, setModalNotas, modalLabels, setModalLabels, labelUpdate, setLabelUpdate, noteUpdate, setNoteUpdate } = store()
/*
	setTimeout(()=>{
		alert('Hello :D')
	}, 1720530944547 - Date.now())
*/
	useEffect(()=>{
		//console.info(typeof(localStorage.getItem('token')))
		getUserInfo(setEtiquetas,navigate)
		getNotes(id_etiqueta,setNotas)
		/*if(typeof(localStorage.getItem('token'))){
			getUserInfo(setEtiquetas,navigate)
			getNotes(id_etiqueta,setNotas)
		}*/
	},[])

	return (
		<main className='h-screen overflow-hidden'>
			{ modalLabels && <ModalForLabels/> }
			{ modalNotas && <ModalForNotes/> }
			<div className='overflow-x-hidden'>
		      <div className='h-16 border-b-2 flex flex-col items-center gap-4 sm:flex-row sm:justify-between'>
		      	<button onClick={()=>setShowBookmark(!showBookmark)} className='px-5 h-full hover:text-blue-600 hover:bg-blue-50 duration-200'><BiBookBookmark className='text-[28px]'/></button>
		      	<h2 className='text-xl font-medium tracking-tight'>Tú espacio de ideas</h2>
		      	<button onClick={()=>{
      					setModalNotas(true)
      					setNoteUpdate(true)
      					const nota_actual = notas?.filter((nota)=>nota.id_note === id_nota)[0]
      					setTimeout(()=>{
	      					document.querySelector('#note').value = nota_actual.note
	      					document.querySelector('#details').value = nota_actual.details
      					},250)
      				}}
      				className='px-5 h-full hover:text-blue-600 hover:bg-blue-50 duration-200'><BiEditAlt className='text-[28px]'/></button>
		      </div>
				<div className="flex w-full bg-orange-200 duration-200">
					<div className={`w-64 shrink-0 duration-500 overflow-hidden ${showBookmark ? 'w-0':''}`}>
						<Sidebar/>
					</div>
					<Note/>
				</div>
			</div>
		</main>
	)
}


/*

			<div className='flex flex-col grow px-[7%] py-[4%]'>
		      <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-between'>
		      	<h2 className='text-4xl text-orange-500 font-bold tracking-tight'>NOTES</h2>
		      	<div className='flex items-center gap-x-2'>
		      		<button 
		      			className='border-2 py-2 px-7 rounded tracking-tight font-bold text-xs uppercase'
		      			onClick={()=>setModalLabels(true)}
		      			>nueva etiqueta
		      		</button>
		      		<button 
		      			className='border-2 py-2 px-7 rounded tracking-tight font-bold text-xs uppercase'
		      			onClick={()=>setModalNotas(true)}
		      			>nueva nota
		      		</button>
	      		</div>
		      </div>
		      <div className='flex gap-x-10 w-full border-21 mt-10'>
		      	{ !etiquetas ? <p>Loading...</p>:<ul className='flex flex-col w-48 shrink-0'>

		      		{ modalLabels && <ModalForLabels/> }

		      		{ etiquetas.map((etiqueta, index)=>{
		      		return (
		      			<li key={index} className={`hover:bg-yellow-300 duration-200 py-1 px-3 flex justify-between items-center ${id_etiqueta === etiqueta.id_label ? "bg-yellow-200":""}`}>
				      		<h3 onClick={()=>{
				      			setId_etiqueta(etiqueta.id_label)
			      				getNotes(etiqueta.id_label,setNotas)
			      			}} className="cursor-pointer w-full">
		      					<a className='text-md capitalize tracking-tight'>{etiqueta.label}</a>
		      				</h3>
				      		<div className='flex gap-x-1'>
				      			<BiEditAlt className='text-zinc-300 hover:text-zinc-900 cursor-pointer' onClick={()=>{
				      				setId_etiqueta(etiqueta.id_label)
				      				setModalLabels(true)
				      				setLabelUpdate(true)
				      				setTimeout(()=>{
				      					const input_label = document.querySelector('#label')
				      					input_label.value = etiqueta.label
				      				},250)
				      			}}/>
				      			<BiTrash className='text-zinc-300 hover:text-zinc-900 cursor-pointer' onClick={()=>{
				      				deleteLabel(etiqueta.id_label,setEtiquetas)
				      			}}/>
				      		</div>
		      			</li>
		      		)
		      	})}</ul>}

		      	{ !notas ? <p>Loading...</p>:<ul className='flex flex-col gap-y-3'>

			      	{ modalNotas && <ModalForNotes/> }

		      		<div className='flex flex-wrap gap-5 w-full'>
		      		{ notas.map((nota, index)=>{
		      		return (
			      			<li key={index} className='bg-yellow-200 px-5 py-4 rounded w-64'>
					      		<div className='flex justify-between items-center'>
					      			<h5 className='text-xl capitalize tracking-tight font-medium'>{nota.note}</h5>
					      			<div className='flex gap-x-1'>
					      				<BiEditAlt className='text-zinc-300 hover:text-zinc-900 cursor-pointer' onClick={()=>{
					      					setModalNotas(true)
					      					setNoteUpdate(true)
					      					setTimeout(()=>{
						      					document.querySelector('#note').value = nota.note
						      					document.querySelector('#details').value = nota.details
					      					},250)
					      					setIdNota(nota.id_note)
					      					console.info(id_nota)
					      					console.info('--- end boton edit ---')
					      				}}/>
					      				<BiTrash className='text-zinc-300 hover:text-zinc-900 cursor-pointer' onClick={()=>{
					      						deleteNote(nota.id_note,id_etiqueta,setNotas)
					      					}}/>
					      		</div>
					      		</div>
					      		<h6 className='text-[0.98rem] mt-1 line-clamp-5'>{nota.details}</h6>
			      			</li>
		      		)
		      	})}</div></ul>}
		      </div>
			</div>

*/