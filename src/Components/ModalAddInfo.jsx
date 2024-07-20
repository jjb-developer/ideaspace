import { BiPlusCircle } from 'react-icons/bi'
import store from '../utils/store'
import { funcAddInfo, funcUpdateInfo, getUserInfo } from '../utils/funciones.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ModalAddInfo(){

   const [category,setCategory] = useState('note')
   const [color,setColor] = useState(5)
   const [priority,setPriority] = useState(5)

	const { setItemUpdate, id_info, setAddInfo, itemUpdate, setInfo } = store()

   const navigate = useNavigate()

   //const colores = {1:'bg-red-600', 2:'bg-orange-500', 3:'bg-yellow-400', 4:'bg-green-300', 5:'bg-blue-200'}
   const colores = ['bg-red-600', 'bg-orange-500', 'bg-yellow-400', 'bg-green-300', 'bg-blue-200']

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
            <div className='flex items-center justify-between'>
               <div className='flex items-center gap-x-2'>
                  <label className='uppercase text-xs font-medium'>color</label>
                  <select id='color' value={color} onChange={(e)=>setColor(e.target.value)} className='w-7 h-6 flex items-center'>
                     { colores.map((color,index)=> <option key={index} value={index+1} className={`font-bold text-sm outline-none ${color}`}>{index+1}</option> )}
                  </select>
               </div>
               <div className='flex items-center gap-x-2'>
                  <label className='uppercase text-xs font-medium'>prioridad</label>
                  <select id='priority' value={priority} onChange={(e)=>setPriority(e.target.value)} className='w-7 h-6 flex items-center'>
                     { colores.map((color,index)=> <option key={index} value={index+1} className={`font-bold text-sm outline-none ${color}`}>{index+1}</option> )}
                  </select>
               </div>
            </div>
   			<button 
   				className='absolute top-[116px] right-7 text-xs font-bold uppercase tracking-tight py-2 px-3 rounded bg-sky-600 text-sky-950 hover:bg-sky-500 border-2 border-sky-600' 
   				onClick={()=>{
	      			if(itemUpdate){
	      				funcUpdateInfo(id_info,document.querySelector('#category').value,document.querySelector('#title').value,document.querySelector('#details').value,color,priority)
	      				document.querySelector('#title').value = ''
		      			document.querySelector('#details').value = ''
                     setTimeout(()=>getUserInfo(setInfo,navigate),500)
		      			setAddInfo(false)
	      				setItemUpdate(false)
	      			} else {
		      			funcAddInfo(document.querySelector('#category').value,document.querySelector('#title').value,document.querySelector('#details').value,color,priority)
                     setTimeout(()=>getUserInfo(setInfo,navigate),500)
		      			document.querySelector('#category').value = 'note'
                     document.querySelector('#title').value = ''
		      			document.querySelector('#details').value = ''
		      			setAddInfo(false)
	      			}}}>{ itemUpdate ? 'update':'create'}
   			</button>
   		</div>
   	</div>)
}