import React from 'react'
import cl from './Input.module.scss'

const Input = ({ id, type, placeholder, value, setValue, callback }) => {
	setTimeout(() => {
		const el = document.getElementById(id)
		if (el) {
			el.addEventListener('focusin', (e) => {
				e.target.nextElementSibling.style = 'bottom: 30px; left: 0px; font-size: 16px;'
			})
			el.addEventListener('focusout', (e) => {
				if (el.value.length === 0)
					e.target.nextElementSibling.style = 'bottom: 5px; left: 5px; font-size: 18px;'
			})
		}
	}, 0)

	const changeHandler = (e) => {
		setValue(e.target.value)
		if (callback) callback(e.target.value)
	}

	return (
		<div className={ cl._input }>
			<input value={ value } onChange={ (e) => changeHandler(e) } type={ type } id={ id } />
			<label htmlFor={ type }>{ placeholder }</label>
		</div>
	)
}

export default Input