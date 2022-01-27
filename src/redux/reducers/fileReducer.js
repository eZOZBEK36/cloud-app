const defaultState = {
	files: [],
	view: 'list',
	dirStack: [],
	currentDir: null,
	popupDisplay: false,
}

const ADDFILE = 'ADDFILE'
const SETFILES = 'SETFILES'
const CHANGEVIEW = 'CHANGEVIEW'
const DELETEFILE = 'DELETEFILE'
const PUSHTOSTACK = 'PUSHTOSTACK'
const SETCURRENTDIR = 'SETCURRENTDIR'
const SETPOPUPDISPLAY = 'SETPOPUPDISPLAY'

const fileReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGEVIEW:
			return { ...state, view: action.payload }
		case SETFILES:
			return { ...state, files: action.payload }
		case SETCURRENTDIR:
			return { ...state, currentDir: action.payload }
		case ADDFILE:
			return { ...state, files: [...state.files, action.payload] }
		case SETPOPUPDISPLAY:
			return { ...state, popupDisplay: !state.popupDisplay }
		case PUSHTOSTACK:
			return { ...state, dirStack: [...state.dirStack, action.payload] }
		case DELETEFILE:
			return {
				...state,
				files: [...state.files.filter(file => file._id !== action.payload)],
			}
		default:
			return state
	}
}

const setPopupDisplay = () => ({ type: SETPOPUPDISPLAY })
const addFiles = files => ({ type: ADDFILE, payload: files })
const setFiles = files => ({ type: SETFILES, payload: files })
const pushToStack = dir => ({ type: PUSHTOSTACK, payload: dir })
const setCurrentDir = dir => ({ type: SETCURRENTDIR, payload: dir })
const changeFileView = type => ({ type: CHANGEVIEW, payload: type })
const deleteFileAction = dirID => ({ type: DELETEFILE, payload: dirID })

export {
	setFiles,
	addFiles,
	pushToStack,
	fileReducer,
	setCurrentDir,
	changeFileView,
	setPopupDisplay,
	deleteFileAction,
}
