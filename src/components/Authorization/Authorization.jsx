import './Authorization.scss'
import React, { useState } from 'react'
import Input from '../../UI/Input/Input'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/user'

const Authorization = (props) => {
	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	const dispatch = useDispatch()
	return (
		<div className="authorization">
			<div className="authorization__header">Авторизация</div>
			<form className="authorization__form">
				<div className="authorization__inps">
					<Input value={ email } setValue={ setEmail } id="email" type="text" placeholder="Введите адрес электронной почты..." />
					<Input value={ password } setValue={ setPassword } id="password" type="text" placeholder="Введите пароль..." />
				</div>
				<div>
					<button onClick={ () => dispatch(login(email, password)) } type="button" className="authorization__btn">Войти</button>
				</div>
			</form>
		</div>
	)
}

export default Authorization