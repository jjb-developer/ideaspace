import { BiArchive, BiPlusCircle, BiBookOpen, BiBookContent, BiBookBookmark, BiClipboard, BiCog, BiDetail, BiDockLeft, BiFile, BiFileBlank, BiFolderPlus, BiFolder, BiFolderOpen, BiNote, BiSortUp, BiSortDown, BiSortAlt2, BiTrash, BiTrashAlt, BiX, BiExpandVertical, BiEditAlt, BiCollapseVertical, BiChevronDown, BiChevronUp } from 'react-icons/bi'

import { HiOutlineFolderAdd, HiOutlineClipboardList, HiOutlineClipboard, HiOutlinePencilAlt, HiOutlineSelector, HiOutlineSortAscending, HiOutlineSortDescending } from 'react-icons/hi'

import store from '../utils/store'


export default function Sidebar(){
	const { showBookmark, id_nota, setIdNota, id_etiqueta, setId_etiqueta, setModalNotas, setModalLabels, etiquetas, notas } = store()
	return (
		<aside className={`relative shrink-0 bg-white w-full border-r-2 h-screen duration-200 `}>
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


			{ !etiquetas ? 'Loading...': (<div className='overflow-x-auto h-[62.5%] custom-scrollbar mb-16'>
				{ etiquetas.map((etiqueta,index)=>{
					return (
					<div key={index} className='relative'>
						<div onClick={()=>setId_etiqueta(etiqueta.id_label)} className={`flex items-center justify-between cursor-pointer h-12 hover:bg-yellow-300 px-5 ${ id_etiqueta === etiqueta.id_label ? 'bg-yellow-300':''}`}>
						 	<div className='flex items-center
						 gap-x-2'>
								<BiFolder className='text-[1.35rem]'/>
								<h4 className='capitalize'>{etiqueta.label}</h4>
							</div>
							<button>
								<BiChevronUp className='text-[1.35rem]'/>
							</button>
						</div>
						<ul className={`${id_etiqueta === etiqueta.id_label ? 'block':'hidden'}`}> { notas.filter((nota)=>{
							if(etiqueta.id_label === nota.id_label){
								return nota
							}}).map((nota,index)=>{
								return (
								<li key={index} onClick={()=>setIdNota(nota.id_note)} className={`flex items-center gap-x-2 cursor-pointer h-9 px-10 hover:bg-yellow-200 ${ nota.id_note === id_nota ? 'bg-yellow-200':''}`}>
									<BiDetail/>
									<span className='capitalize'>{ nota.note }</span>
								</li>
							)})}
						</ul>
					</div>
					)
				})}
			</div>)}
		</aside>
	)
}

/*

			<div className=''>
				<div className='flex items-center justify-between cursor-pointer h-12 hover:bg-yellow-300 px-5'>
				 	<div className='flex items-center
				 gap-x-2'>
						<BiFolder className='text-[1.35rem]'/>
						<h4 className='capitalize'>programacion</h4>
					</div>
					<button>
						<BiChevronUp className='text-[1.35rem]'/>
					</button>
				</div>
				<ul>
					<li className='flex items-center gap-x-2 cursor-pointer h-9 px-10 hover:bg-yellow-200'>
						<BiDetail/>
						<span className='capitalize'>golang</span>
					</li>
					<li className='flex items-center gap-x-2 cursor-pointer h-9 px-10 hover:bg-yellow-200'>
						<BiDetail/>
						<span className='capitalize'>python</span>
					</li>
					<li className='flex items-center gap-x-2 cursor-pointer h-9 px-10 hover:bg-yellow-200'>
						<BiDetail/>
						<span className='capitalize'>javascript</span>
					</li>
					<li className='flex items-center gap-x-2 cursor-pointer h-9 px-10 hover:bg-yellow-200'>
						<BiDetail/>
						<span className='capitalize'>clojure</span>
					</li>
				</ul>
			</div>

*/