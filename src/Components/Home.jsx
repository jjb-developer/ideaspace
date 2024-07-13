import { BiBookBookmark, BiEditAlt, BiTrash, BiPlusCircle, BiSave, } from 'react-icons/bi'
import { useState } from 'react'

export default function Home(){
	const [sidebar,setSidebar] = useState(true)
	return (
		<main className='flex bg-zinc-200'>
			<div onClick={()=>setSidebar(!sidebar)}
				className='fixed top-0 left-0 cursor-pointer hover:bg-orange-300 duration-200 p-3'>
				<BiBookBookmark className='text-2xl'/>
			</div>
			<aside className={`bg-zinc-400 duration-500 ${ sidebar ? 'w-64':'w-0' }`}>
				<div className='p-4 w-64'>
					<div className='h-12 flex items-center text-2xl font-bold tracking-tight'>
						<h2>Bookmark</h2>
					</div>
					<ul>
						<li className='flex items-center gap-x-3 h-10 hover:bg-orange-200 duration-300 uppercase font-medium tracking-tight'>
							<BiEditAlt/>
							<a href='#'>editar</a>
						</li>
						<li className='flex items-center gap-x-3 h-10 hover:bg-orange-200 duration-300 uppercase font-medium tracking-tight'>
							<BiTrash/>
							<a href='#'>eliminar</a>
						</li>
						<li className='flex items-center gap-x-3 h-10 hover:bg-orange-200 duration-300 uppercase font-medium tracking-tight'>
							<BiSave/>
							<a href='#'>guardar</a>
						</li>
					</ul>
				</div>
			</aside>
			<article className='flex-grow bg-zinc-500'>articulo</article>
		</main>
	)
}