import { useEffect } from 'react'
import store from '../utils/store'
import { BiBookBookmark, BiBookContent, BiPlus } from "react-icons/bi"
import { getUserInfo } from '../utils/funciones'

import Sidebar from './Sidebar.jsx'
import ModalAddInfo from './ModalAddInfo'
import Note from './Note.jsx'
import NavLower from './NavbarLower'
import { useNavigate } from "react-router-dom";


export default function Index(){


	const { showBookmark, info, id_info, addInfo, setInfo, setShowBookmark, setAddInfo, setItemUpdate, setCategory, setColor, setPriority } = store()
	const navigate = useNavigate()

	useEffect(()=>{
		getUserInfo(setInfo,navigate)
		console.info(`[ Bienvenido ${JSON.parse(localStorage.getItem('ideaspace')).user} ]`)
	},[])

	return (
		<main className='h-screen overflow-hidden'>
			{ addInfo && <ModalAddInfo/> }
			<NavLower/>
			<div className='overflow-x-hidden'>
				<div className="flex">
					<Sidebar/>
					<Note/>
				</div>
			</div>
		</main>
	)
}
