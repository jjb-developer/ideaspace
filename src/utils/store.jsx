import { create } from 'zustand'

const store = create((set)=>({
	userActive: false,
	setUserActive: (bool)=> set((state)=> ({...state, userActive: bool })),
	showBookmark: false,
	setShowBookmark: (bool)=> set((state)=> ({...state, showBookmark: bool })),
	modalNotas: false,
	setModalNotas: (bool)=> set((state)=> ({...state, modalNotas: bool})),
	modalLabels: false,
	setModalLabels: (bool)=> set((state)=> ({...state, modalLabels: bool})),
	labelUpdate: false,
	setLabelUpdate: (bool)=> set((state)=> ({...state, labelUpdate: bool})),
	noteUpdate: false,
	setNoteUpdate: (bool)=> set((state)=> ({...state, noteUpdate: bool})),
	id_etiqueta: 1,
	setId_etiqueta: (id)=> set((state)=> ({...state, id_etiqueta: id})),
	id_nota: null,
	setIdNota: (id)=> set((state)=> ({...state, id_nota: id})),
	etiquetas: [],
	setEtiquetas: (labels)=> set((state)=> ({...state, etiquetas: labels})),
	notas: [],
	setNotas: (notes)=> set((state)=> ({...state, notas: notes})),
	id_info: 0,
	setId_Info: (id)=> set((state)=> ({...state, id_info: id})),
	info: [],
	setInfo: (data)=> set((state)=> ({...state, info: data})),
	addInfo: false,
	setAddInfo: (bool)=> set((state)=> ({...state, addInfo: bool}))
}))

export default store;