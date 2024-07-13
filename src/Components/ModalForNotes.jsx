import { BiPlusCircle } from 'react-icons/bi'
import store from '../utils/store'
import { updateNote, addNote } from '../utils/funciones.js'

export default function ModalForNotes(){
	const { id_etiqueta, id_nota, setNotas, setModalNotas, setNoteUpdate, noteUpdate } = store()
	return (
		<div className='z-[99] fixed flex items-center justify-center bg-zinc-900 bg-opacity-80 top-0 right-0 left-0 bottom-0'>
   		<button 
   			className='absolute top-5 left-5' 
   			onClick={()=>setModalNotas(false)}>
   			<BiPlusCircle className='text-[30px] text-rose-500 rotate-45'/>
   		</button>
   		<div className='relative w-[85%] sm:w-[77%] md:w-[580px] bg-zinc-50 p-7'>
   			<label className='text-sm'>Nueva nota</label>
   			<input type='text' id='note' className='w-full outline-none border-2 mt-1 mb-5 py-1.5 px-3 text-sm'/>
   			<label className='text-sm'>Detalles nota</label>
   			<textarea type='text' id='details' className='w-full outline-none h-40 border-2 mt-1 mb-5 py-1.5 px-3 text-sm'></textarea>
   			<button 
   				className='absolute top-[56px] right-7 text-xs font-bold uppercase tracking-tight py-2 px-3 rounded bg-sky-600 text-sky-950 hover:bg-sky-500 border-2 border-sky-600' 
   				onClick={()=>{
	      			if(noteUpdate){
	      				updateNote(id_nota,{note_edit: document.querySelector('#note').value, details_edit: document.querySelector('#details').value}, id_etiqueta, setNotas)
	      				document.querySelector('#note').value = ''
		      			document.querySelector('#details').value = ''
		      			setModalNotas(false)
	      				setNoteUpdate(false)
	      			} else {
		      			addNote(id_etiqueta, document.querySelector('#note').value,document.querySelector('#details').value, setNotas)
		      			document.querySelector('#note').value = ''
		      			document.querySelector('#details').value = ''
		      			setModalNotas(false)
	      			}}}>{ noteUpdate ? 'update':'create'}
   			</button>
   		</div>
   	</div>)
}