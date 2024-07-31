import { Link, useNavigate } from 'react-router-dom'
import { BiLogOut, BiBookBookmark } from 'react-icons/bi'
import store from '../utils/store'

export default function Navbar(){
	const { userActive, setUserActive, showBookmark, setShowBookmark } = store()
	const navigate = useNavigate()
	return (
		<nav className='h-16 border-b-2 flex items-center justify-between px-[4%]'>
			<div className='flex gap-x-2 items-center'>
				<button onClick={()=>setShowBookmark(!showBookmark)} className='px-1 hover:text-orange-500 duration-200'><BiBookBookmark className='text-[25px]'/></button>
				<Link to='/'>
					<h1 className='text-3xl font-bold tracking-tighter capitalize text-sky-600'>idea<span className='lowercase text-orange-500'>scape</span>
					</h1>
				</Link>
			</div>
			<ul className={`${userActive ? 'hidden':'block'}`}>
				<Link to='/login' className='border-2 py-1.5 px-6 font-bold text-[0.75rem] tracking-tight rounded uppercase text-zinc-900 bg-zinc-100 hover:bg-white duration-200'>login</Link>
				<Link to='/register' className='border-2 py-1.5 px-6 font-bold text-[0.75rem] tracking-tight rounded uppercase ml-2 text-zinc-900 bg-zinc-100 hover:bg-white duration-200'>register</Link>
			</ul>
			<div className={`${userActive ? 'block':'hidden'} flex items-center gap-x-2 bg-zinc-50 py-2 px-5 rounded`}>
				<div className='flex flex-col items-end'>
					<h4 className='font-medium capitalize tracking-tight leading-[1rem]'>{ localStorage.getItem('ideaspace') ? JSON.parse(localStorage.getItem('ideaspace')).user:'' }</h4>
				</div>
				<button onClick={()=>{
					navigate('/')
					setUserActive(false)
					localStorage.removeItem('ideaspace')
				}} className='py-1.5 px-1.5 rounded bg-rose-100 hover:bg-rose-200 duration-300'>
					<BiLogOut className='text-[1.25rem] text-rose-900 -translate-x-[2px]'/>
				</button>
			</div>
		</nav>
	)
}

//