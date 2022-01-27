import './Header.scss'
import React from 'react'
import { APIURL } from '../../config'
import logo from './img/header-logo.svg'
import AvatarLogo from './img/avatar.svg'
import { NavLink, useLocation } from 'react-router-dom'
import Container from '../../UI/Container/Container'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../redux/reducers/userReducer'

const Header = () => {
	const dispatch = useDispatch()
	const { pathname } = useLocation()
	const isAuth = useSelector(state => state.user.isAuth)
	const currentUser = useSelector(state => state.user.currentUser)
	const avatar = currentUser.avatar ? `${APIURL}/static/${currentUser.id || currentUser._id}/${currentUser.avatar}` : AvatarLogo

	return (
		<header className="header">
			<div className="header__wrapper">
				<Container parent="header">
					<div className="header__logo">
						<img src={ logo } alt="LOGO" />
						MERN CLOUD
					</div>
					<nav className="header__nav">
						<ul className="header__list">
							{ !isAuth ?
								<>
									<li className="header__listitem">
										<NavLink className="header__link" to="/login">Войти</NavLink>
									</li>
									<li className="header__listitem">
										<NavLink className="header__link" to="/registration">Регистрация</NavLink>
									</li>
								</>
								:
								<>
									{
										pathname === '/profile' ?
											<li className="header__listitem">
												<NavLink to="/">Назад</NavLink>
											</li>
											: <li onClick={ () => dispatch(logOut()) } className="header__listitem">
												Выход
											</li>
									}
									<li className="header__avatar">
										<NavLink to="/profile">
											<img src={ avatar } alt="Avatar" />
										</NavLink>
									</li>
								</>
							}
						</ul>
					</nav>
				</Container>
			</div>
		</header>
	)
}

export default Header