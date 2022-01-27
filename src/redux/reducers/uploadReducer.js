const defaultState = {
	isVisible: false,
	files: [],
}

const SHOWUPLOADER = 'SHOWUPLOADER'
const HIDEUPLOADER = 'HIDEUPLOADER'
const ADDUPLOADFILE = 'ADDUPLOADFILE'
const REMOVEUPLOADFILE = 'REMOVEUPLOADFILE'
const CHANGEUPLOADFILE = 'CHANGEUPLOADFILE'

const uploadReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SHOWUPLOADER:
			return { ...state, isVisible: true }
		case HIDEUPLOADER:
			return { ...state, isVisible: false }
		case ADDUPLOADFILE:
			return {
				...state,
				files: [...state.files, action.payload],
			}
		case REMOVEUPLOADFILE:
			return {
				...state,
				files: [...state.files.filter(file => file.id !== action.payload)],
			}
		case CHANGEUPLOADFILE:
			return {
				...state,
				files: [
					...state.files.map(file =>
						file.id == action.payload.id
							? { ...file, progress: action.payload.progress }
							: { ...file },
					),
				],
			}
		default:
			return state
	}
}

const showUploader = () => ({ type: SHOWUPLOADER })
const hideUploader = () => ({ type: HIDEUPLOADER })
const addUploadFile = file => ({ type: ADDUPLOADFILE, payload: file })
const changeUploadFile = payload => ({ type: CHANGEUPLOADFILE, payload })
const removeUploadFile = fileID => ({ type: REMOVEUPLOADFILE, payload: fileID })

export {
	showUploader,
	hideUploader,
	uploadReducer,
	addUploadFile,
	removeUploadFile,
	changeUploadFile,
}
