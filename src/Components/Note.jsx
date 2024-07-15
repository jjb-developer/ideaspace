import store from '../utils/store'

export default function Note(){
	const { info, id_info } = store()
	return (
		<article className={`duration-200 flex-grow w-full bg-zinc-50`}>
		{ info?.filter((item)=>{
			if(item.id_info === id_info){
				return item }}).map((item,index)=>{
				return (
					<div key={index} className='py-10 px-12'>
						<h4 className='text-2xl font-medium tracking-tight capitalize'>{item.title}</h4>
						<p className='mt-4 text-lg'>{item.details}</p>
					</div>
				)
			})}
		</article>
	)
}