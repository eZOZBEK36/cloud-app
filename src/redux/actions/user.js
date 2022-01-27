import axios from 'axios'
import { APIURL } from '../../config'
import { setUser } from '../reducers/userReducer'
import { showLoader, hideLoader } from '../reducers/appReducer'

const { get, post } = axios

const registration = async (email, password) => {
	try {
		const response = await post(APIURL + '/api/auth/registration', {
			email,
			password,
		})
		alert(response.data.message)
	} catch (err) {
		alert(err.request.response.message)
		console.log(err.request.response.message)
	}
}

const login = (email, password) => {
	return async dispatch => {
		try {
			dispatch(showLoader())
			const response = await post(APIURL + '/api/auth/login', {
				email,
				password,
			})
			dispatch(setUser(response.data.user))
			localStorage.setItem('token', response.data.token)
		} catch (err) {
			alert(err?.request?.response)
		} finally {
			dispatch(hideLoader())
		}
	}
}

const authorization = () => {
	return async dispatch => {
		try {
			dispatch(showLoader())
			const response = await get(APIURL + '/api/auth/auth', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
			dispatch(setUser(response.data.user))
			localStorage.setItem('token', response.data.token)
		} catch (err) {
			alert(err?.request?.response)
			localStorage.removeItem('token')
		} finally {
			dispatch(hideLoader())
		}
	}
}

const uploadAvatar = file => {
	return async dispatch => {
		try {
			dispatch(showLoader())
			const formData = new FormData()
			formData.append('file', file)
			const response = await post(`${APIURL}/api/files/avatar`, formData, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			dispatch(setUser(response.data))
		} catch (err) {
			console.log(err)
		} finally {
			dispatch(hideLoader())
		}
	}
}

const deleteAvatar = () => {
	return async dispatch => {
		try {
			dispatch(showLoader())
			const response = await axios.delete(`${APIURL}/api/files/avatar`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			dispatch(setUser(response.data))
		} catch (err) {
			console.log(err)
		} finally {
			dispatch(hideLoader())
		}
	}
}

export { registration, login, authorization, uploadAvatar, deleteAvatar }
