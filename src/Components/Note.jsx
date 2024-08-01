import { useState } from 'react'
import store from '../utils/store'
import DOMPurify from 'dompurify'
import { BiItalic, BiImageAdd, BiHighlight, BiBold } from 'react-icons/bi'
import { convertirToNegrita, convertirToCursiva, resaltarTexto } from '../utils/funciones.js'


export default function Note(){
	const [range,setRange] = useState()
	const { info, id_info, showBookmark } = store()
	const colores = ['border-red-600', 'border-orange-500', 'border-yellow-400', 'border-blue-400', 'border-lime-400']

	return (
		<article className={`duration-200 pb-24 w-full h-screen custom-scrollbar overflow-hidden overflow-y-auto`}>
		{ info?.filter((item)=>{
			if(item.id_info === id_info){
				return item }}).map((item,index)=>{
				return (
					<div key={index} className={`relative py-10 ${ showBookmark ? 'px-[20%]':'px-12'}`}>
						{/*
						<div className='absolute top-0 right-[50%] translate-x-[50%] flex items-center gap-x-2 py-3 border-b-2'>
		               <BiBold onClick={()=> convertirToNegrita(range) } className='text-[1.45rem] hover:text-orange-500 duration-300 cursor-pointer'/>
		               <BiItalic onClick={()=> convertirToCursiva(range)} className='text-[1.45rem] hover:text-orange-500 duration-300 cursor-pointer'/>
		               <BiHighlight onClick={()=> resaltarTexto(range)} className='text-[1.45rem] hover:text-orange-500 duration-300 cursor-pointer'/>
						</div>
						*/}
						<h4 className={`px-4 outline-none text-2xl font-bold tracking-tight border-l-8 ${colores[item.priority-1]}`}>{item.title}</h4>
						<p className='py-2 px-0.5 outline-none mt-7 text-[1.12rem] tracking-[-0.005rem]' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.details)}}></p>
					</div>
				)
			})}
		</article>
	)
}

//