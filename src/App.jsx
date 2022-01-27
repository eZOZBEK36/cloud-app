import Loader from './UI/Loader/Loader'
import React, { useEffect } from 'react'
import Disk from './components/Disk/Disk'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import { authorization } from './redux/actions/user'
import { useSelector, useDispatch } from 'react-redux'
import Registration from './components/Registration/Registration'
import Authorization from './components/Authorization/Authorization'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
	const dispatch = useDispatch()
	const isAuth = useSelector(state => state.user.isAuth)
	const isLoading = useSelector(state => state.app.loading)

	useEffect(() => {
		dispatch(authorization())
	}, [])

	return <Router>
		<Header />
		{ isLoading && <Loader /> }
		{
			!isAuth ?
				<div className="forms">
					<Routes>
						<Route path="/registration" element={ <Registration /> } />
						<Route path="/login" element={ <Authorization /> } />
						<Route path="/*" element={ <Navigate replace to="/login" /> } />
					</Routes>
				</div> :
				<Routes>
					<Route path="/" element={ <Disk /> } />
					<Route path="/profile" element={ <Profile /> } />
					<Route path="/*" element={ <Navigate replace to="/" /> } />
				</Routes>
		}
	</Router >
}

export default App
