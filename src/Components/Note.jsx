import store from '../utils/store'
import DOMPurify from 'dompurify'

export default function Note(){
	const { info, id_info, showBookmark } = store()
	const colores = ['border-red-600', 'border-orange-500', 'border-yellow-400', 'border-blue-400', 'border-lime-400']

	return (
		<article className={`duration-200 flex-grow w-full bg-zinc-50`}>
		{ info?.filter((item)=>{
			if(item.id_info === id_info){
				return item }}).map((item,index)=>{
				return (
					<div key={index} className={`py-10 ${ showBookmark ? 'px-[15%]':'px-12'}`}>
						<h4 className={`px-4 outline-none text-2xl font-bold tracking-tight capitalize border-l-8 ${colores[item.priority-1]}`}>{item.title}</h4>
						<p className='py-2 px-0.5 outline-none mt-7 text-[0.99rem] tracking-[-0.005rem] ' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.details)}}></p>
					</div>
				)
			})}
		</article>
	)
}

//