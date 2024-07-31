import { BiBookContent, BiPlus, BiEditAlt } from "react-icons/bi"
import store from '../utils/store'

export default function Navbar(){
	const { setAddInfo, setItemUpdate, setCategory, setColor, setPriority } = store()

	return (
		<div>
			<div className='flex items-center justify-between border-b-2 h-12 pl-5'>
				<div className='flex items-center gap-x-2'>
					<BiBookContent className='text-[1.3rem]'/>
					<h3 className='text-[1.05rem]'>Bookmark</h3>
				</div>
				<div className='flex items-center gap-x-2'>
		      	<button onClick={()=>{
	   					setAddInfo(true)
	   					setItemUpdate(true)
	   					const nota_actual = info?.filter((item)=>item.id_info === id_info)[0]
	   					setCategory(nota_actual.category)
	   					setColor(nota_actual.color)
	   					setPriority(nota_actual.priority)
	   					setTimeout(()=>{
	      					document.querySelector('#title').innerHTML = nota_actual.title
	      					document.querySelector('#details').innerHTML = nota_actual.details
	   					},250)
	   				}}
	   				className='p-3 hover:text-orange-500 duration-200'><BiEditAlt className='text-[25px]'/>
	   			</button>
					<button onClick={()=>setAddInfo(true)} className='p-3 hover:text-orange-500 duration-200'><BiPlus className='text-[25px]'/>
					</button>
				</div>
			</div>
		</div>
	)
}

//