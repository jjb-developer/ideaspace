import { BiArchive, BiPlusCircle, BiBookOpen, BiBookContent, BiBookBookmark, BiClipboard, BiCog, BiDetail, BiDockLeft, BiFile, BiFileBlank, BiFolderPlus, BiSolidFolder, BiSolidNotepad, BiNotepad, BiFolder, BiFolderOpen, BiNote, BiSortUp, BiSortDown, BiSortAlt2, BiTrash, BiTrashAlt, BiX, BiExpandVertical, BiEditAlt, BiCollapseVertical, BiChevronDown, BiChevronUp } from 'react-icons/bi'

import { HiOutlineFolderAdd, HiOutlineClipboardList, HiOutlineClipboard, HiOutlinePencilAlt, HiOutlineSelector, HiOutlineSortAscending, HiOutlineSortDescending } from 'react-icons/hi'

import { useState } from 'react'
import store from '../utils/store'
import { deleteNote, deleteLabel, getUserInfo } from '../utils/funciones.js'
import { useNavigate } from 'react-router-dom'


export default function Sidebar(){
	const { showBookmark, id_nota, setIdNota, id_etiqueta, setId_etiqueta, setModalNotas, setModalLabels, etiquetas, setEtiquetas, setNotas, notas } = store()
	const [height,setHeight] = useState(0)
	const navigate = useNavigate()
	return (
		<aside className={`overflow-x-scroll custom-scrollbar shrink-0 overflow-x-hidden bg-white border-r-2 h-screen duration-200 ${showBookmark ? 'w-0':'w-72'}`}>
			<div className={`w-72 shrink-0 duration-100 delay-100 ${showBookmark ? '-translate-x-64':'translate-x-0'}`}>
				<div className='flex items-center justify-between border-b-2 h-12 px-5'>
					<div className='flex items-center gap-x-2'>
						<BiBookContent className='text-[1.3rem]'/>
						<h3 className='text-[1.05rem]'>Bookmark</h3>
					</div>
					<button>
						<BiCog className='text-[1.3rem]'/>
					</button>
				</div>
				<div className='flex items-center border-b-2 h-12'>
					<button onClick={()=>setModalLabels(true)} className='w-1/4 h-full hover:bg-yellow-200 duration-200'><HiOutlineFolderAdd className='text-[1.35rem] mx-auto'/></button>
					<button onClick={()=>setModalNotas(true)} className='w-1/4 h-full hover:bg-yellow-200 duration-200'><HiOutlineClipboard className='text-[1.35rem] mx-auto'/></button>
					<button className='w-1/4 h-full hover:bg-yellow-200 duration-200'><HiOutlineSortDescending className='text-[1.35rem] mx-auto'/></button>
					<button className='w-1/4 h-full hover:bg-yellow-200 duration-200'><HiOutlineSelector className='text-[1.35rem] mx-auto'/></button>
				</div>


				{ etiquetas && (<div className='h-full mb-16'>
					{ etiquetas.map((etiqueta,index)=>{
						return (
						<div key={index} className='relative border-b-[1px]'>
							<div className={`flex items-center duration-200 justify-between cursor-pointer h-12 hover:bg-yellow-300 px-5 ${ id_etiqueta === etiqueta.id_label ? 'bg-yellow-300':''}`}>
							 	<div onClick={()=>{
									setId_etiqueta(etiqueta.id_label)
									let height = notas.filter((nota)=> etiqueta.id_label === nota.id_label ).length
									setHeight(`h-[${height*36}px]`)
								}}
									className='flex items-center gap-x-2 w-full h-full'>
									<BiSolidFolder className='text-[1.3rem] text-yellow-400'/>
									<h4 className='capitalize tracking-tight text-[0.97rem]'>{etiqueta.label}</h4>
								</div>
								<div className='flex mr-2 items-center'>
									<button>
										<BiTrash onClick={()=>{
											deleteLabel(etiqueta.id_label)
											getUserInfo(setEtiquetas,setNotas,navigate)
										}} className='text-[1.3rem] text-yellow-400 hover:text-yellow-600 hover:bg-yellow-400 duration-200 rounded-full w-[30px] h-[30px] p-1.5'/>
									</button>
								</div>
							</div>
							<div className={`overflow-hidden duration-1000 ${etiqueta.id_label === id_etiqueta ? height:'h-0'}`}>
								<ul> { notas.filter((nota)=> etiqueta.id_label === nota.id_label ).map((nota,index)=>{
										return (
										<li key={index} className={`flex items-center justify-between cursor-pointer h-9 pl-10 hover:bg-zinc-200 pr-5 group ${ nota.id_note === id_nota ? 'bg-zinc-200':''}`}>
											<div onClick={()=>{
												setIdNota(nota.id_note)
												console.info(notas)
											}} className={`flex items-center gap-x-2 w-full`}>
												<BiNotepad className='text-[1.3rem] shrink-0 text-zinc-400'/>
												<span className='capitalize text-[0.97rem] tracking-tight line-clamp-1'>{ nota.note }</span>
											</div>
											<div className='flex mr-2 items-center'>
												<button>
													<BiTrash onClick={()=>{
														deleteNote(nota.id_note)
														getUserInfo(setEtiquetas,setNotas,navigate)
													}} className='text-[1rem] text-zinc-400 hover:text-zinc-600 opacity-40 hover:bg-zinc-200 duration-200 rounded-full w-[30px] h-[30px] p-1.5 group-hover:opacity-100'/>
												</button>
											</div>
										</li>
									)})}
								</ul>
							</div>
						</div>
						)
					})}
				</div>)}
			</div>
		</aside>
	)
}