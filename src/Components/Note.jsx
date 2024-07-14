import store from '../utils/store'

export default function Note(){
	const { notas, id_nota, showBookmark } = store()
	return (
		<article className={`duration-200 flex-grow w-full bg-zinc-50`}>
		{ notas?.filter((nota)=>{
			if(nota.id_note === id_nota){
				return nota }}).map((nota,index)=>{
				return (
					<div key={index} className='py-10 px-12'>
						<h4 className='text-2xl font-medium tracking-tight capitalize'>{nota.note}</h4>
						<p className='mt-4 text-lg'>{nota.details}</p>
					</div>
				)
			})}
		</article>
	)
}