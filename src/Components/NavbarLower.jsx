import { HiOutlineBookOpen, HiOutlinePencilAlt, HiOutlineDocument } from "react-icons/hi"
import store from '../utils/store'


export default function Navbar(){
	const { id_info, setId_Info, info, setBoton, setContentEditableOriginal, showBookmark, setShowBookmark, setAddInfo, setItemUpdate, setCategory, setColor, setPriority } = store()

	return (
		<div>
			<div className='flex items-center justify-between border-b-2 h-10 px-[4%]'>
				<div className='flex items-center gap-x-2'>
					<button onClick={()=>setShowBookmark(!showBookmark)} className='px-1 hover:text-orange-500 duration-200'>
						<HiOutlineBookOpen className='text-[1.35rem]'/>
					</button>
					<h3 className='text-[0.95rem] font-bold text-zinc-700 uppercase tracking-tight'>Bookmark</h3>
				</div>
				<div className='flex items-center'>
		      	{/*
		      	<button onClick={()=>{
	   					setAddInfo(true)
	   					setItemUpdate(true)
	   					const nota_actual = info?.filter((item)=>item.id_info === id_info)[0]
	   					setCategory(nota_actual.category)
	   					setColor(nota_actual.color)
	   					setPriority(nota_actual.priority)
	   					setTimeout(()=>{
	      					document.querySelector('#title').innerHTML = nota_actual.title
	      					document.querySelector('#details').innerHTML = nota_actual.details
	   					},250)
	   				}}
	   				className='p-2 hover:text-orange-500 duration-200 group relative'><HiOutlinePencilAlt className='text-[1.25rem]'/>
	   				<span className='w-28 hidden group-hover:block absolute top-[6px] right-8 text-xs capitalize bg-orange-300 text-orange-800 font-bold py-1 px-2.5 rounded'>editar nota</span>
	   			</button>
	   			*/}
					<button onClick={()=>{
						setId_Info(0)
						setBoton('create')
						const title = document.getElementById('note_title')
						title.innerHTML = ''
						const details = document.getElementById('note_details')
						details.innerHTML = ''
						setContentEditableOriginal('')
					}} className='p-2 hover:text-orange-500 duration-200 group relative'><HiOutlineDocument className='text-[1.25rem]'/>
						<span className='w-28 hidden group-hover:block absolute top-[6px] right-8 text-xs capitalize bg-orange-300 text-orange-800 font-bold py-1 px-2.5 rounded'>nueva nota</span>
					</button>
				</div>
			</div>
		</div>
	)
}

//