import { create } from 'zustand'

const store = create((set)=>({
	userActive: false,
	setUserActive: (bool)=> set((state)=> ({...state, userActive: bool })),
	showBookmark: false,
	setShowBookmark: (bool)=> set((state)=> ({...state, showBookmark: bool })),
	itemUpdate: false,
	setItemUpdate: (bool)=> set((state)=> ({...state, itemUpdate: bool})),
	id_info: 0,
	setId_Info: (id)=> set((state)=> ({...state, id_info: id})),
	info: [],
	setInfo: (data)=> set((state)=> ({...state, info: data})),
	addInfo: false,
	setAddInfo: (bool)=> set((state)=> ({...state, addInfo: bool}))
}))

export default store;