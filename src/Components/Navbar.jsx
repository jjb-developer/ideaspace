import { Link, useNavigate } from 'react-router-dom'
import { BiPowerOff } from 'react-icons/bi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import store from '../utils/store'
import { useState } from 'react'

export default function Navbar(){
	const [userOptions,setUserOptions] = useState(false)
	const { userActive, setUserActive } = store()
	const navigate = useNavigate()
	return (
		<nav className='h-16 border-b-2 flex shrink-0 items-center justify-between px-[5%]'>
			<div className='flex gap-x-2 items-center'>

				<Link to='/'>
					<h1 className='text-[1.57rem] -translate-y-0.5 font-bold tracking-tighter capitalize text-sky-600'>idea<span className='lowercase text-orange-500'>scape</span>
					</h1>
				</Link>
			</div>
			<ul className={`${userActive ? 'hidden':'block'}`}>
				<Link to='/login' className='border-2 py-1.5 px-6 font-bold text-[0.75rem] tracking-tight rounded uppercase text-zinc-900 bg-zinc-100 hover:bg-white duration-200'>login</Link>
				<Link to='/register' className='border-2 py-1.5 px-6 font-bold text-[0.75rem] tracking-tight rounded uppercase ml-2 text-zinc-900 bg-zinc-100 hover:bg-white duration-200'>register</Link>
			</ul>
			<div className={`${userActive ? 'block':'hidden'} relative flex items-center gap-x-1`}>
				<div className='flex flex-col items-end'>
					<h4 className='text-[0.9rem] font-medium text-right capitalize tracking-tight leading-[1rem] w-32'>{ localStorage.getItem('ideaspace') ? JSON.parse(localStorage.getItem('ideaspace')).user:'' }</h4>
				</div>

				<ul className={`absolute top-9 bg-white z-[10000] w-full right-0 text-[0.9rem] font-medium text-right capitalize tracking-tight leading-[1rem] ${userOptions ? 'block':'hidden'}`}>
					<li onClick={()=>{
						console.info('editar perfil')
						setUserOptions(false)
					}} className='py-2 px-2.5 cursor-pointer hover:bg-orange-400 hover:text-orange-50 duration-200'>perfil</li>
					<li onClick={()=>{
						console.info('editar opciones')
						setUserOptions(false)
					}} className='py-2 px-2.5 cursor-pointer hover:bg-orange-400 hover:text-orange-50 duration-200'>opciones</li>
					<li onClick={()=>{
						navigate('/')
						setUserActive(false)
						setUserOptions(false)
						localStorage.removeItem('ideaspace')
					}} className='py-2 px-2.5 cursor-pointer hover:bg-orange-400 hover:text-orange-50 duration-200'>cerrar</li>
				</ul>

				<button onClick={()=>{
					setUserOptions(!userOptions)
				}} className='relative p-0.5 group'>
					<HiOutlineUserCircle className='text-zinc-600 duration-300 text-[1.4rem]'/>
					<span className='hidden group-hover:block absolute top-0 right-7 text-xs capitalize bg-orange-300 text-orange-800 font-bold py-1 px-2.5 rounded'>opciones</span>
				</button>

			</div>
		</nav>
	)
}

//