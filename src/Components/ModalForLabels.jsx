import store from '../utils/store'
import { BiPlusCircle } from 'react-icons/bi'
import { addLabel, updateLabel } from '../utils/funciones.js'

export default function ModalForLabels(){
	const { id_etiqueta, setEtiquetas, labelUpdate, setLabelUpdate, setModalLabels } = store()
	return (
		<div className='z-[100] fixed flex items-center justify-center bg-zinc-900 bg-opacity-80 top-0 right-0 left-0 bottom-0'>
			<button 
				className='absolute top-5 left-5' 
				onClick={()=>setModalLabels(false)}>
				<BiPlusCircle className='text-[30px] text-rose-500 rotate-45'/>
			</button>
			<div className='relative w-[85%] sm:w-[77%] md:w-[580px] bg-zinc-50 p-7'>
				<label className='text-sm' >Nueva etiqueta</label>
				<input type='text' id='label' className='w-full outline-none border-2 mt-1 mb-5 py-1.5 px-3 text-sm'/>
				<button 
					className='absolute top-[56px] right-7 text-xs font-bold uppercase tracking-tight py-2 px-3 rounded bg-sky-600 text-sky-950 hover:bg-sky-500 border-2 border-sky-600'
					onClick={()=>{
	      			if(labelUpdate){
	      				updateLabel(id_etiqueta,{label_edit: document.querySelector('#label').value}, setEtiquetas)
	      				setLabelUpdate(false)
	      				setModalLabels(false)
	      				document.querySelector('#label').value = ''
	      			} else {
		      			addLabel(document.querySelector('#label').value,setEtiquetas)
		      			document.querySelector('#label').value = ''
		      			setModalLabels(false)
	      			}}}
				>{ labelUpdate ? 'update':'create'}
				</button>
			</div>
		</div>)
	}