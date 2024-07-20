import { BiArchive, BiPlusCircle, BiPlus, BiBookOpen, BiBookContent, BiBookBookmark, BiClipboard, BiCog, BiDetail, BiFile, BiFileBlank, BiSolidNotepad, BiNotepad, BiNote, BiTrash, BiTrashAlt, BiX, BiCollapseVertical, BiChevronDown, BiChevronUp, BiListCheck, BiTask, BiListUl } from 'react-icons/bi'


import { useState } from 'react'
import store from '../utils/store'
import { getUserInfo, funcDeleteInfo } from '../utils/funciones.js'
import { useNavigate } from 'react-router-dom'


export default function Sidebar(){

	const navigate = useNavigate()
	const { showBookmark, setInfo, info, setId_Info, setAddInfo } = store()

	const [filtro,setFiltro] = useState('all')


	const color = {
		1: 'bg-red-600',
		2: 'bg-orange-500',
		3: 'bg-yellow-400',
		4: 'bg-green-300',
		5: 'bg-blue-200',
	}

	return (
		<aside className={`overflow-x-scroll custom-scrollbar shrink-0 overflow-x-hidden bg-white border-r-2 h-screen duration-200 ${showBookmark ? 'w-0':'w-72'}`}>
			<div className={`w-72 shrink-0 duration-100 delay-100 ${showBookmark ? '-translate-x-64':'translate-x-0'}`}>
				<div className='flex items-center justify-between border-b-2 h-12 pl-5'>
					<div className='flex items-center gap-x-2'>
						<BiBookContent className='text-[1.3rem]'/>
						<h3 className='text-[1.05rem]'>Bookmark</h3>
					</div>
					<button onClick={()=>setAddInfo(true)} className='w-14 h-full flex items-center justify-center hover:bg-yellow-200 duration-200'>
						<BiPlus className='text-[1.3rem]'/>
					</button>
				</div>
				<div className='flex items-center border-b-2 h-12'>
					<button onClick={()=>setFiltro('note')} className='w-1/4 h-full hover:bg-yellow-200 duration-200'><BiClipboard className='text-[1.35rem] mx-auto'/></button>
					<button onClick={()=>setFiltro('list')} className='w-1/4 h-full hover:bg-yellow-200 duration-200'><BiListUl className='text-[1.35rem] mx-auto'/></button>
					<button onClick={()=>setFiltro('task')} className='w-1/4 h-full hover:bg-yellow-200 duration-200'><BiTask className='text-[1.35rem] mx-auto'/></button>
					<button onClick={()=>setFiltro('all')} className='w-1/4 h-full hover:bg-yellow-200 duration-200'><BiArchive className='text-[1.35rem] mx-auto'/></button>
				</div>

				{ info && (<ul className='h-full mb-16'>
					{ info.filter((item)=>item.category === filtro || filtro === 'all').map((item,index)=> <li key={index} className={`flex items-center justify-between h-[52px] px-3 hover:bg-zinc-200 duration-300 group`}>
						<div onClick={()=>setId_Info(item.id_info)} className='flex gap-x-2 items-center h-full w-full cursor-pointer'>
							{ item.category === 'note' && <BiClipboard className='text-[1.2rem] text-zinc-500'/> }
							{ item.category === 'task' && <BiTask className='text-[1.2rem] text-zinc-500'/> }
							{ item.category === 'list' && <BiListUl className='text-[1.2rem] text-zinc-500'/> }
							<span className={`w-4 h-4 rounded ${color[item.priority]}`}></span>
							<span className='text-[0.97rem] tracking-tight capitalize'>{item.title}</span>
						</div>
						<button onClick={()=>{
							funcDeleteInfo(item.id_info)
							setTimeout(()=>getUserInfo(setInfo,navigate),500)
						}} className='flex rounded-full duration-300  hover:bg-zinc-100 w-9 h-7 justify-center items-center'>
							<BiTrash className='text-[1.1rem] text-zinc-200 group-hover:text-zinc-500'/>
						</button>
					</li>)}
				</ul>) }
			</div>
		</aside>
	)
}
