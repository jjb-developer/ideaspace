import { BiPlusCircle, BiFontColor, BiFontSize, BiItalic, BiImageAdd, BiHighlight, BiPaintRoll, BiBold, BiAlignJustify, BiAlignLeft, BiAlignMiddle, BiAlignRight } from 'react-icons/bi'
import { useState } from 'react'
import store from '../utils/store'
import { funcAddInfo, funcUpdateInfo, getUserInfo, convertirToNegrita, convertirToCursiva, resaltarTexto } from '../utils/funciones.js'
import { useNavigate } from 'react-router-dom'
import DOMPurify from 'dompurify'

export default function ModalAddInfo(){

	const { setItemUpdate, id_info, setAddInfo, itemUpdate, setInfo, color, setColor, priority, setPriority, category, setCategory } = store()
   const [option,setOption] = useState(null)
   const [range,setRange] = useState(null)

   const navigate = useNavigate()

   //const colores = {1:'bg-red-600', 2:'bg-orange-500', 3:'bg-yellow-400', 4:'bg-green-300', 5:'bg-blue-200'}
   const type_priority = {1:'muy alta', 2:'alta', 3:'media', 4:'baja', 5:'muy baja'}
   const colores = ['bg-red-600', 'bg-orange-500', 'bg-yellow-400', 'bg-blue-400', 'bg-lime-400']


   function textPlain(e){
      e.preventDefault()
      const cleaning_text = (e.clipboardData || window.clipboardData).getData('text/plain')
      document.execCommand('insertText', false, cleaning_text)
   }


	return (
		<div className='z-[99] fixed flex items-center justify-center bg-zinc-900 bg-opacity-90 top-0 right-0 left-0 bottom-0 overflow-scroll'>
   		<button 
   			className='absolute top-5 left-5' 
   			onClick={()=>{
               setAddInfo(false)
               setItemUpdate(false)
            }}>
   			<BiPlusCircle className='text-[30px] text-rose-500 rotate-45'/>
   		</button>
   		<div className='relative top-[2.5%] sm:w-[77%] md:w-[580px] bg-zinc-50 p-7 flex flex-col gap-y-4'>
            <select value={category} id='category' onChange={(e)=>setCategory(e.target.value)} className='w-full outline-none border-2 mt-1 mb-5 py-1.5 px-0.5 text-sm'>
               <option value='note'>nota</option>
               <option value='list'>lista</option>
               <option value='task'>tarea</option>
            </select>
            <div className='flex items-center gap-x-3'>
               <BiFontColor className='text-[1.45rem] hover:text-orange-500 duration-300 cursor-pointer'/>
               <BiBold onClick={()=> convertirToNegrita(range) } className='text-[1.45rem] hover:text-orange-500 duration-300 cursor-pointer'/>
               <BiItalic onClick={()=> convertirToCursiva(range)} className='text-[1.45rem] hover:text-orange-500 duration-300 cursor-pointer'/>
               <BiHighlight onClick={()=> resaltarTexto(range)} className='text-[1.45rem] hover:text-orange-500 duration-300 cursor-pointer'/>
               <BiImageAdd className='text-[1.45rem] hover:text-orange-500 duration-300 cursor-pointer'/>
            </div>
            {/* 
            <div className='flex justify-between items-center'>
               <button onClick={()=>setOption('negrita')} className='rounded bg-zinc-500 text-zinc-50 text-xs uppercase tracking-tight font-bold py-1 px-3'>negrita</button>
               <button onClick={()=>setOption('removeNegrita')} className='rounded bg-zinc-500 text-zinc-50 text-xs uppercase tracking-tight font-bold py-1 px-3'>remover negrita</button>
               <button onClick={()=>setOption('resaltar')} className='rounded bg-zinc-500 text-zinc-50 text-xs uppercase tracking-tight font-bold py-1 px-3'>resaltar</button>
               <button onClick={()=>setOption('removeResaltado')} className='rounded bg-zinc-500 text-zinc-50 text-xs uppercase tracking-tight font-bold py-1 px-3'>remover resaltado</button>
            </div>
            */}
   			<h4 onPaste={textPlain} contentEditable='true' id='title' className='rounded border-2 py-2 px-4 outline-none text-2xl font-bold tracking-tight'></h4>
   			<p onPaste={textPlain} onClick={()=>setRange(window.getSelection().getRangeAt(0))} contentEditable='true' id='details' className='rounded border-2 py-2 px-4 outline-none mt-4 text-[1.05rem] tracking-[0.02rem]'></p>
            {/*
            <p onPaste={textPlain} onClick={options[option]} contentEditable='true' id='details' className='rounded border-2 py-2 px-4 outline-none mt-4 text-[1.05rem] tracking-[0.02rem]'></p>
            */}
            <div className='flex items-center justify-between mt-10'>
               <div className='flex items-center gap-x-2'>
                  <span className='text-xs uppercase font-medium tracking-tight mr-1'>priority</span>
                  <ul className='flex items-center gap-x-1.5'>
                     <li onClick={()=>setPriority(1)} className={`bg-rose-600 duration-200 cursor-pointer ${ priority === 1 ? 'scale-y-[2.25]':''} w-3 h-3`}></li>
                     <li onClick={()=>setPriority(2)} className={`bg-orange-500 duration-200 cursor-pointer ${ priority === 2 ? 'scale-y-[2.25]':''} w-3 h-3`}></li>
                     <li onClick={()=>setPriority(3)} className={`bg-yellow-400 duration-200 cursor-pointer ${ priority === 3 ? 'scale-y-[2.25]':''} w-3 h-3`}></li>
                     <li onClick={()=>setPriority(4)} className={`bg-sky-400 duration-200 cursor-pointer ${ priority === 4 ? 'scale-y-[2.25]':''} w-3 h-3`}></li>
                     <li onClick={()=>setPriority(5)} className={`bg-lime-400 duration-200 cursor-pointer ${ priority === 5 ? 'scale-y-[2.25]':''} w-3 h-3`}></li>
                  </ul>
               </div>
               <div>
                  <span className='uppercase text-xs tracking-tight font-medium'>{type_priority[priority]}</span>
               </div>
            </div>
   			<button 
   				className='absolute top-[150px] right-9 text-xs font-bold uppercase tracking-tight py-2 px-3 rounded bg-sky-600 text-sky-950 hover:bg-sky-500 border-2 border-sky-600' 
   				onClick={()=>{
	      			if(itemUpdate){
                     //console.info(document.querySelector('#category').value,document.querySelector('#title').innerHTML,document.querySelector('#details').innerHTML,color,priority)
	      				funcUpdateInfo(id_info,document.querySelector('#category').value,document.querySelector('#title').innerHTML,document.querySelector('#details').innerHTML,color,priority)
	      				document.querySelector('#title').innerHTML = ''
		      			document.querySelector('#details').innerHTML = ''
                     setTimeout(()=>getUserInfo(setInfo,navigate),500)
		      			setAddInfo(false)
	      				setItemUpdate(false)
	      			} else {
                     //console.info(document.querySelector('#category').value,document.querySelector('#title').innerHTML,document.querySelector('#details').innerHTML,color,priority)
                     //console.info(typeof(document.querySelector('#details').innerHTML))
		      			funcAddInfo(document.querySelector('#category').value,document.querySelector('#title').innerHTML,document.querySelector('#details').innerHTML,color,priority)
                     setTimeout(()=>getUserInfo(setInfo,navigate),500)
		      			document.querySelector('#category').value = 'note'
                     document.querySelector('#title').innerHTML = ''
		      			document.querySelector('#details').innerHTML = ''
		      			setAddInfo(false)
	      			}}}>{ itemUpdate ? 'update':'create'}
   			</button>
   		</div>
   	</div>)
}