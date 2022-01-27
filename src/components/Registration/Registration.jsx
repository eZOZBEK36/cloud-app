import './Registration.scss'
import React, { useState } from 'react'
import Input from '../../UI/Input/Input'
import { registration } from '../../redux/actions/user'

const Registration = (props) => {
	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	return (
		<div className="registration">
			<div className="registration__header">Регистрация</div>
			<form className="registration__form">
				<div className="registration__inps">
					<Input value={ email } setValue={ setEmail } id="email" type="text" placeholder="Введите адрес электронной почты..." />
					<Input value={ password } setValue={ setPassword } id="password" type="text" placeholder="Введите пароль..." />
				</div>
				<div>
					<button type="button" onClick={ () => registration(email, password) } className="registration__btn">Войти</button>
				</div>
			</form>
		</div>
	)
}

export default Registration