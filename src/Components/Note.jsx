import { useState } from 'react'
import store from '../utils/store'
import DOMPurify from 'dompurify'
import { useNavigate } from 'react-router-dom'
import { BiItalic, BiImageAdd, BiHighlight, BiBold, BiSave } from 'react-icons/bi'
import { getUserInfo, convertirToNegrita, convertirToCursiva, resaltarTexto, funcAddInfo, funcUpdateInfo } from '../utils/funciones.js'


export default function Note(){
   const navigate = useNavigate()
	const { info, id_info, setInfo, setBoton, showBookmark, contentEditableOriginal, setContentEditableOriginal, color, setColor, priority, setPriority, category, setCategory, boton } = store()
	const [range,setRange] = useState()
	const [save,setSave] = useState(false)

	const colores = ['border-red-600', 'border-orange-500', 'border-yellow-400', 'border-blue-400', 'border-lime-400']


   function textPlain(e){
      e.preventDefault()
      const cleaning_text = (e.clipboardData || window.clipboardData).getData('text/plain')
      document.execCommand('insertText', false, cleaning_text)
   }

   let char = 0

   const type_priority = {1:'muy alta', 2:'alta', 3:'media', 4:'baja', 5:'muy baja'}

	return (

		<article className={`duration-200 pb-24 w-full h-screen`}>
			<div className='border-b-2 h-12 flex gap-x-2 items-center justify-between px-[3.5%] sm:px-[5%] md:px-[7.5%] lg:px-[12%]'>
				<div>
					<button onClick={()=> convertirToNegrita(range)} className='border p-0.5 hover:border-orange-500 duration-200'><BiBold className='text-[1.35rem]'/></button>
					<button onClick={()=> convertirToCursiva(range)} className='border p-0.5 hover:border-orange-500 duration-200'><BiItalic className='text-[1.35rem]'/></button>
					<button onClick={()=> resaltarTexto(range)} className='border p-0.5 hover:border-orange-500 duration-200'><BiHighlight className='text-[1.35rem]'/></button>
				</div>

				<button onClick={(e)=>{
					//console.info('nota',document.querySelector('#note_title').innerHTML,document.querySelector('#note_details').innerHTML,color,priority)
					if(boton === 'create'){
						funcAddInfo('nota',document.querySelector('#note_title').innerHTML,document.querySelector('#note_details').innerHTML,color,priority)
						setTimeout(()=>getUserInfo(setInfo,navigate),500)
						setBoton('create')
						const title = document.getElementById('note_title')
						title.innerHTML = ''
						const details = document.getElementById('note_details')
						details.innerHTML = ''
						setContentEditableOriginal('')
					}
					if(boton === 'update'){
						funcUpdateInfo(id_info,'nota',document.querySelector('#note_title').innerHTML,document.querySelector('#note_details').innerHTML,color,priority)
						setTimeout(()=>getUserInfo(setInfo,navigate),500)
					}
				}} className='border p-0.5 hover:border-orange-500 duration-200'>
					<BiSave className='text-[1.35rem]'/>
				</button>

			</div>

			<div className={`relative py-10 px-[3.5%] sm:px-[5%] md:px-[7.5%] lg:px-[12%] h-full custom-scrollbar overflow-hidden overflow-y-auto `}>

				{/* PRIORITY */}
            <div className='flex items-center justify-between mb-4 px-1'>
               <div className='flex items-center gap-x-2'>
                  <span className='text-xs uppercase font-medium tracking-tight mr-1'>priority</span>
                  <ul className='flex items-center gap-x-1.5'>
                     <li onClick={()=>setPriority(1)} className={`bg-rose-600 duration-200 cursor-pointer ${ priority === 1 ? 'scale-y-[1.5]':''} w-2.5 h-2.5`}></li>
                     <li onClick={()=>setPriority(2)} className={`bg-orange-500 duration-200 cursor-pointer ${ priority === 2 ? 'scale-y-[1.5]':''} w-2.5 h-2.5`}></li>
                     <li onClick={()=>setPriority(3)} className={`bg-yellow-400 duration-200 cursor-pointer ${ priority === 3 ? 'scale-y-[1.5]':''} w-2.5 h-2.5`}></li>
                     <li onClick={()=>setPriority(4)} className={`bg-sky-400 duration-200 cursor-pointer ${ priority === 4 ? 'scale-y-[1.5]':''} w-2.5 h-2.5`}></li>
                     <li onClick={()=>setPriority(5)} className={`bg-lime-400 duration-200 cursor-pointer ${ priority === 5 ? 'scale-y-[1.5]':''} w-2.5 h-2.5`}></li>
                  </ul>
               </div>
               <div>
                  <span className='uppercase text-xs tracking-tight font-medium'>{type_priority[priority]}</span>
               </div>
            </div>


				<h4 onPaste={textPlain} id='note_title' contentEditable='true' className='border border-zinc-100 outline-none text-2xl font-bold tracking-tight'></h4>
				<p onPaste={textPlain} onKeyUp={(e)=>{
					if(boton === 'update'){
						char += 1
						//console.info(char)
						if(char > 14){
							char = 0
							if(e.target.innerHTML !== contentEditableOriginal.details)
								funcUpdateInfo(id_info,'nota',document.querySelector('#note_title').innerHTML,e.target.innerHTML,color,priority)
								setTimeout(()=>getUserInfo(setInfo,navigate),500)
						}
				}}} onClick={()=>setRange(window.getSelection().getRangeAt(0))
					} id='note_details' contentEditable='true' className='border border-zinc-100 py-2 px-0.5 outline-none mt-7 text-[1.12rem] tracking-[-0.005rem]'></p>
			</div>
		</article>
	)
}