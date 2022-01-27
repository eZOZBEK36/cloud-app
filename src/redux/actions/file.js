import axios from 'axios'
import { APIURL } from '../../config'
import { showLoader, hideLoader } from '../reducers/appReducer'
import { addFiles, setFiles, deleteFileAction } from '../reducers/fileReducer'
import {
	showUploader,
	addUploadFile,
	changeUploadFile,
} from '../reducers/uploadReducer'

const { get, post } = axios

const getFiles = (dirId, option) => {
	return async dispatch => {
		try {
			dispatch(showLoader())
			const response = await get(APIURL + '/api/files', {
				params: {
					parent: dirId,
					sort: option,
				},
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
			dispatch(setFiles(response.data))
		} catch (err) {
			alert(err)
		} finally {
			dispatch(hideLoader())
		}
	}
}

const createFiles = (dirId, name) => {
	return async dispatch => {
		try {
			const response = await post(
				APIURL + '/api/files',
				{
					name,
					type: 'dir',
					parent: dirId,
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				},
			)
			dispatch(addFiles(response.data))
		} catch (err) {
			alert(err)
		}
	}
}

const uploadFiles = (file, dirId) => {
	return async dispatch => {
		try {
			const formData = new FormData()
			formData.append('file', file)
			if (dirId) {
				formData.append('parent', dirId)
			}
			const uploadFile = { name: file.name, progress: 0, id: Date.now() }
			dispatch(showUploader())
			dispatch(addUploadFile(uploadFile))
			const response = await post(APIURL + '/api/files/upload', formData, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
				onUploadProgress: progressEvent => {
					const totalLength = progressEvent.lengthComputable
						? progressEvent.total
						: progressEvent.target.getResponseHeader('content-length') ||
						  progressEvent.target.getResponseHeader(
								'x-decompressed-content-length',
						  )
					if (totalLength) {
						uploadFile.progress = Math.round(
							(progressEvent.loaded * 100) / totalLength,
						)
						dispatch(changeUploadFile(uploadFile))
					}
				},
			})
			dispatch(addFiles(response.data))
		} catch (err) {
			alert(err)
			console.log(err)
		}
	}
}

const downloadFiles = async file => {
	try {
		const response = await fetch(
			APIURL + `/api/files/download?id=${file._id}`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			},
		)
		if (response.status === 200) {
			const blob = await response.blob()
			const downloadURL = window.URL.createObjectURL(blob)
			const link = document.createElement('a')
			link.href = downloadURL
			link.download = file.name
			document.body.appendChild(link)
			link.click()
			link.remove()
		}
	} catch (e) {
		console.log(e)
	}
}

const deleteFiles = fileId => {
	return async dispatch => {
		try {
			dispatch(showLoader())
			const response = await axios.delete(APIURL + `/api/files`, {
				params: {
					id: fileId,
				},
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
			dispatch(deleteFileAction(fileId))
			alert(response.data.message)
		} catch (err) {
			console.log(err)
			alert(err)
		} finally {
			dispatch(hideLoader())
		}
	}
}

const searchFiles = searchName => {
	return async dispatch => {
		try {
			const response = await get(APIURL + `/api/files/search`, {
				params: {
					search: searchName,
				},
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
			dispatch(setFiles(response.data))
		} catch (err) {
			console.log(err)
			alert(err)
		} finally {
			dispatch(hideLoader())
		}
	}
}

export {
	getFiles,
	createFiles,
	uploadFiles,
	downloadFiles,
	deleteFiles,
	searchFiles,
}
