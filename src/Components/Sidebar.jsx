import { BiArchive, BiPlusCircle, BiPlus, BiBookOpen, BiBookContent, BiBookBookmark, BiClipboard, BiCog, BiDetail, BiFile, BiFileBlank, BiSolidNotepad, BiNotepad, BiNote, BiTrash, BiTrashAlt, BiX, BiCollapseVertical, BiChevronDown, BiChevronUp, BiListCheck, BiTask, BiListUl } from 'react-icons/bi'


import { useState } from 'react'
import store from '../utils/store'
import { getUserInfo, funcDeleteInfo } from '../utils/funciones.js'
import { useNavigate } from 'react-router-dom'


export default function Sidebar(){

	const navigate = useNavigate()
	const { showBookmark, id_info, setBoton, setInfo, info, setPriority, setId_Info, setAddInfo, setContentEditableOriginal } = store()

	const [filtro,setFiltro] = useState('all')


	const COLOR = {
		1: 'bg-red-600',
		2: 'bg-orange-500',
		3: 'bg-yellow-400',
		4: 'bg-blue-400',
		5: 'bg-lime-400'
	}

	const BORDER = {
		1: 'border-red-600',
		2: 'border-orange-500',
		3: 'border-yellow-400',
		4: 'border-blue-400',
		5: 'border-lime-400'
	}

	const MONTH = {
		1: 'Ene',
		2: 'Feb',
		3: 'Mar',
		4: 'Abr',
		5: 'May',
		6: 'Jun',
		7: 'Jul',
		8: 'Ago',
		9: 'Sep',
		10: 'Oct',
		11: 'Nov',
		12: 'Dic'
	}

	//overflow-x-scroll custom-scrollbar overflow-x-hidden

	return (

		<aside className={`pb-28 h-screen custom-scrollbar overflow-hidden overflow-y-auto shrink-0 bg-white border-r-2 duration-200 ${showBookmark ? 'w-0':'w-72'}`}>
			<div className={`w-72 shrink-0 duration-100 delay-100 ${showBookmark ? '-translate-x-64':'translate-x-0'}`}>

				{/*
				<div className='flex items-center border-b-2 h-12'>
					<button onClick={()=>setFiltro('note')} className='w-1/4 h-full hover:bg-yellow-200 duration-200'><BiClipboard className='text-[1.35rem] mx-auto'/></button>
					<button onClick={()=>setFiltro('list')} className='w-1/4 h-full hover:bg-yellow-200 duration-200'><BiListUl className='text-[1.35rem] mx-auto'/></button>
					<button onClick={()=>setFiltro('task')} className='w-1/4 h-full hover:bg-yellow-200 duration-200'><BiTask className='text-[1.35rem] mx-auto'/></button>
					<button onClick={()=>setFiltro('all')} className='w-1/4 h-full hover:bg-yellow-200 duration-200'><BiArchive className='text-[1.35rem] mx-auto'/></button>
				</div>
				*/}
				{ info && (<ul className=''>
					{ info.filter((item)=>item.category === filtro || filtro === 'all').map((item,index)=> <li key={index} className={`flex items-center justify-between h-[52px] px-3 hover:bg-zinc-200 duration-300 group ${item.id_info === id_info ? 'bg-zinc-100':''}`}>
						<div onClick={()=>{
							setBoton('update')
							setId_Info(item.id_info)
							const title = document.getElementById('note_title')
							title.innerHTML = item.title
							const details = document.getElementById('note_details')
							details.innerHTML = item.details
							setPriority(item.priority)
							setContentEditableOriginal(item)
						}} className={`flex items-center gap-x-3 justify-start h-full w-full cursor-pointer `}>
							{/*
							{ item.category === 'note' && <BiClipboard className='text-[1.2rem] text-zinc-500 shrink-0'/> }
							{ item.category === 'task' && <BiTask className='text-[1.2rem] text-zinc-500 shrink-0'/> }
							{ item.category === 'list' && <BiListUl className='text-[1.2rem] text-zinc-500 shrink-0'/> }
							*/}
							<span className={`w-3 h-3 shrink-0 rounded-full -translate-y-[5px] ${COLOR[item.priority]}`}></span>
							<div className='flex flex-col'>
								<span className='text-[0.97rem] tracking-tight capitalize line-clamp-1 text-zinc-700 font-medium'>{item.title}</span>
								<span className='text-[0.70rem] uppercase font-medium text-zinc-500'>{`${new Date(item.created_at).getUTCFullYear()}, ${new Date(item.created_at).getUTCDate()} ${MONTH[new Date(item.created_at).getUTCMonth()+1]}`}</span>
							</div>
						</div>
						<button onClick={()=>{
							funcDeleteInfo(item.id_info)
							setId_Info(0)
							setBoton('create')
							const title = document.getElementById('note_title')
							title.innerHTML = ''
							const details = document.getElementById('note_details')
							details.innerHTML = ''
							setPriority(5)
							setContentEditableOriginal('')
							setTimeout(()=>getUserInfo(setInfo,navigate),500)
						}} className='flex rounded-full duration-300  hover:bg-zinc-100 w-9 h-7 justify-center items-center'>
							<BiTrash className='text-[1.1rem] text-zinc-100 group-hover:text-zinc-400 duration-200'/>
						</button>
					</li>)}
				</ul>) }
			</div>
		</aside>
	)
}

