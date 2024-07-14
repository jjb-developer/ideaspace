import { BiPlusCircle } from 'react-icons/bi'
import store from '../utils/store'
import { updateNote, addNote, funcAddInfo, getUserInfo } from '../utils/funciones.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ModalAddInfo(){
	const { id_etiqueta, id_nota, setAddInfo, setNotas, setModalNotas, setNoteUpdate, noteUpdate, setInfo } = store()
   const [category,setCategory] = useState('note')
   const navigate = useNavigate()
	return (
		<div className='z-[99] fixed flex items-center justify-center bg-zinc-900 bg-opacity-90 top-0 right-0 left-0 bottom-0'>
   		<button 
   			className='absolute top-5 left-5' 
   			onClick={()=>setAddInfo(false)}>
   			<BiPlusCircle className='text-[30px] text-rose-500 rotate-45'/>
   		</button>
   		<div className='relative w-[85%] sm:w-[77%] md:w-[580px] bg-zinc-50 p-7'>
            <select value={category} id='category' onChange={(e)=>setCategory(e.target.value)} className='w-full outline-none border-2 mt-1 mb-5 py-1.5 px-0.5 text-sm'>
               <option value='note'>nota</option>
               <option value='list'>lista</option>
               <option value='task'>tarea</option>
            </select>
   			<label className='text-sm capitalize'>titulo</label>
   			<input type='text' id='title' className='w-full outline-none border-2 mt-1 mb-5 py-1.5 px-3 text-sm'/>
   			<label className='text-sm capitalize'>detalles</label>
   			<textarea type='text' id='details' className='w-full outline-none h-40 border-2 mt-1 mb-5 py-1.5 px-3 text-sm'></textarea>
   			<button 
   				className='absolute top-[116px] right-7 text-xs font-bold uppercase tracking-tight py-2 px-3 rounded bg-sky-600 text-sky-950 hover:bg-sky-500 border-2 border-sky-600' 
   				onClick={()=>{
	      			if(false){
	      				updateNote(id_nota,{note_edit: document.querySelector('#note').value, details_edit: document.querySelector('#details').value}, id_etiqueta, setNotas)
	      				document.querySelector('#note').value = ''
		      			document.querySelector('#details').value = ''
		      			setAddInfo(false)
	      				setNoteUpdate(false)
	      			} else {
		      			funcAddInfo(document.querySelector('#category').value,document.querySelector('#title').value,document.querySelector('#details').value)
                     getUserInfo(setInfo,navigate)
		      			document.querySelector('#category').value = 'note'
                     document.querySelector('#title').value = ''
		      			document.querySelector('#details').value = ''
		      			setAddInfo(false)
	      			}}}>{ noteUpdate ? 'update':'create'}
   			</button>
   		</div>
   	</div>)
}