import store from '../utils/store'
import DOMPurify from 'dompurify'
import { addEncabezado, addTitulo, addSubtitulo, addParrafo } from '../utils/funciones.js'


function getParentElement(event){

	let target = event.target
	let textContent = target.textContent
	let parentTarget = target.parentNode
	//parentTarget.removeChild(target)
	//console.info(event.target.parentNode)
	console.info(event)
}



export default function NoteProof(){
	const { info, id_info, showBookmark } = store()
	const colores = ['border-red-600', 'border-orange-500', 'border-yellow-400', 'border-blue-400', 'border-lime-400']

	return (
		<article className={`duration-200 flex-grow w-full bg-zinc-50`}>

			<section className='flex items-center justify-center gap-x-2 py-4 border-b-2'>
				<button onClick={addEncabezado} className='py-1.5 px-3 bg-zinc-400 text-zinc-900 rounded text-xs uppercase font-bold tracking-tight'>encabezado</button>
				<button onClick={addTitulo} className='py-1.5 px-3 bg-zinc-400 text-zinc-900 rounded text-xs uppercase font-bold tracking-tight'>titulo</button>
				<button onClick={addSubtitulo} className='py-1.5 px-3 bg-zinc-400 text-zinc-900 rounded text-xs uppercase font-bold tracking-tight'>subtitulo</button>
				<button onClick={addParrafo} className='py-1.5 px-3 bg-zinc-400 text-zinc-900 rounded text-xs uppercase font-bold tracking-tight'>parrafo</button>
				<button className='py-1.5 px-3 bg-zinc-400 text-zinc-900 rounded text-xs uppercase font-bold tracking-tight'>lista</button>
				<button className='py-1.5 px-3 bg-zinc-400 text-zinc-900 rounded text-xs uppercase font-bold tracking-tight'>tabla</button>
				<button className='py-1.5 px-3 bg-zinc-400 text-zinc-900 rounded text-xs uppercase font-bold tracking-tight'>imagen</button>
				<button className='py-1.5 px-3 bg-zinc-400 text-zinc-900 rounded text-xs uppercase font-bold tracking-tight'>script</button>
			</section>

			<section id='paper' className='px-7 py-5'>
				
			</section>

		{ info?.filter((item)=>{
			if(item.id_info === id_info){
				return item }}).map((item,index)=>{
				return (
					<div key={index} className={`py-10 ${ showBookmark ? 'px-[15%]':'px-12'}`}>
						<h4 className={`px-4 outline-none text-2xl font-bold tracking-tight border-l-8 ${colores[item.priority-1]}`}>{item.title}</h4>
						<span></span>
						<p className='py-2 px-0.5 outline-none mt-7 text-[1.085rem] tracking-[-0.005rem] ' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.details)}}></p>
					</div>
				)
			})}
		</article>
	)
}

//