import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { userLogin } from '../utils/funciones.js'
import store from '../utils/store'


export default function Login(){

	const navigate = useNavigate()
	const { setUserActive, setInfo } = store()
	const [body,setBody] = useState({
		username: "",
		password: "",
	})

	return (
		<div className='flex items-center justify-center mt-20'>
			<form onSubmit={(e)=>{
				e.preventDefault()
				userLogin(body,navigate,setUserActive)
			}} className='py-10 w-96'>
				<div className="w-full px-4 mt-3">
					<label className="uppercase text-xs text-zinc-800 font-bold">username</label>
					<input 
						type="text"
						name="username"
						value={body.username}
						onChange={(e) => {setBody((prevBody)=>({...prevBody, username: e.target.value,}))}}
						className="outline-none py-2.5 px-2.5 border-2 rounded-xl focus:border-sky-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
					/>
				</div>
				<div className="w-full px-4 mt-3">
					<label className="uppercase text-xs text-zinc-800 font-bold">password</label>
					<input 
						type="text"
						name="password"
						value={body.password}
						onChange={(e) => {setBody((prevBody)=>({...prevBody, password: e.target.value,}))}}
						className="outline-none py-2.5 px-2.5 border-2 rounded-xl focus:border-sky-500 text-zinc-700 text-[0.98rem] duration-300 w-full placeholder:text-zinc-400"
					/>
				</div>
				<div className="w-full px-4 mt-3">
					<button 
						className="bg-sky-800 duration-300 hover:bg-sky-600 text-white hover:text-sky-900 text-md font-bold w-full py-3 rounded-md uppercase"
						type="submit"
					>
						login
					</button>
				</div>
			</form>
		</div>
	)
} 