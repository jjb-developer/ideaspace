import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Index from './Index'

export default function Principal(){
	return (
		<>
		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/index" element={<Index/>} />
			<Route path="/login" element={<Login/>} />
			<Route path="/register" element={<Register/>} />
		</Routes>
		</>
	)
}