import { useState } from 'react'
import { register } from '../utils/funciones.js'

export default function Register(){

	const [body,setBody] = useState({
		nombre: '',
		apellido: '',
		email: '',
		username: '',
		password: '',
		role: ''
	})

	return (
		<main className='flex items-center justify-center grow'>
			<form onSubmit={(e)=>{
				e.preventDefault()
				register(body)
				setBody({nombre:'',apellido:'',email:'',username:'',password:'',role:''})
			}} className='w-96 border-2 p-4 flex flex-col gap-y-3'>
				<div className='flex flex-col gap-y-0.5'>
					<label className='text-xs uppercase tracking-tight font-bold'>nombre</label>
					<input type='text' value={body.nombre} onChange={(e)=> setBody({...body, nombre: e.target.value })} className='outline-none px-3 py-2 text-sm border-2 rounded'/>
				</div>
				<div className='flex flex-col gap-y-0.5'>
					<label className='text-xs uppercase tracking-tight font-bold'>apellido</label>
					<input type='text' value={body.apellido} onChange={(e)=> setBody({...body, apellido: e.target.value })} className='outline-none px-3 py-2 text-sm border-2 rounded'/>
				</div>
				<div className='flex flex-col gap-y-0.5'>
					<label className='text-xs uppercase tracking-tight font-bold'>email</label>
					<input type='text' value={body.email} onChange={(e)=> setBody({...body, email: e.target.value })} className='outline-none px-3 py-2 text-sm border-2 rounded'/>
				</div>
				<div className='flex flex-col gap-y-0.5'>
					<label className='text-xs uppercase tracking-tight font-bold'>password</label>
					<input type='text' value={body.password} onChange={(e)=> setBody({...body, password: e.target.value })} className='outline-none px-3 py-2 text-sm border-2 rounded'/>
				</div>
				<div className='flex flex-col gap-y-0.5'>
					<label className='text-xs uppercase tracking-tight font-bold'>username</label>
					<input type='text' value={body.username} onChange={(e)=> setBody({...body, username: e.target.value })} className='outline-none px-3 py-2 text-sm border-2 rounded'/>
				</div>
				<div className='flex flex-col gap-y-0.5'>
					<label className='text-xs uppercase tracking-tight font-bold'>role</label>
					<input type='text' value={body.role} onChange={(e)=> setBody({...body, role: e.target.value })} className='outline-none px-3 py-2 text-sm border-2 rounded'/>
				</div>
				<button type='submit' className='bg-sky-500 hover:bg-sky-400 duration-200 text-sky-900 font-bold tracking-tight rounded w-full uppercase py-2.5 mt-2'>registrar</button>
			</form>
		</main>
	)
}