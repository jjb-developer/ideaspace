import { index } from '../utils/funciones.js'
export default function Home(){

	return (
		<main className='flex flex-col gap-y-4 items-center justify-center grow'>
			<h3 className='text-2xl tracking-tight'>Home</h3>
			<button onClick={index} className='bg-orange-500 text-orange-900 py-2 px-7 rounded hover:bg-orange-400 duration-300 tracking-tight font-bold text-xs uppercase'>backend</button>
		</main>
	)
}