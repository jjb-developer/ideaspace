import { Link, useNavigate } from 'react-router-dom'
import store from '../utils/store'

export default function Navbar(){
	const { userActive, setUserActive, setEtiquetas, setNotas } = store()
	const navigate = useNavigate()
	return (
		<nav className='h-20 border-b-2 flex items-center justify-between px-[7.5%]'>
			<div>
				<Link to='/'><h1 className='text-4xl font-bold tracking-tighter capitalize text-sky-600'>idea<span className='lowercase text-orange-500'>scape</span></h1></Link>
			</div>
			<ul className={`${userActive ? 'hidden':'block'}`}>
				<Link to='/login' className='border-2 py-2 px-7 font-bold text-[0.87rem] tracking-tight rounded uppercase text-zinc-900 bg-zinc-100 hover:bg-white duration-200'>login</Link>
				<Link to='/register' className='border-2 py-2 px-7 font-bold text-[0.87rem] tracking-tight rounded uppercase ml-2 text-zinc-900 bg-zinc-100 hover:bg-white duration-200'>register</Link>
			</ul>
			<div className={`${userActive ? 'block':'hidden'} flex items-center gap-x-4`}>
				<h4 className='text-xl font-bold capitalize tracking-tight'>{localStorage.getItem('username')}</h4>
				<button onClick={()=>{
					navigate('/')
					setUserActive(false)
					setEtiquetas([])
					setNotas([])
					localStorage.removeItem('username')
					localStorage.removeItem('token')
				}} className='py-2 px-7 rounded text-xs font-bold tracking-tight bg-rose-500 text-rose-900 uppercase'>login out</button>
			</div>
		</nav>
	)
}