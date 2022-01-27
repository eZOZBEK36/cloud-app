import arrow from './arrow-down.svg'
import cl from './Select.module.scss'
import React, { useState } from 'react'

const Select = ({ options, sortOption }) => {
	const [ title, setTitle ] = useState(options[ 0 ].name)
	const [ isOpen, setIsOpen ] = useState(false)

	const selectHandler = () => setIsOpen(!isOpen)
	const optionTitleHandler = (value) => setTitle(value)

	return (
		<div className={ cl._select } onClick={ selectHandler }>
			<div className={ cl._select_title }>
				{ title }
				<img style={ isOpen ? { transform: 'rotate(-180deg)' } : {
					transform: 'rotate(0)'
				} } src={ arrow } alt="" />
			</div>
			<div style={ isOpen ? { visibility: 'visible', opacity: 1 } : {
				visibility: 'hidden', opacity: 0
			} } className={ cl._options }>
				{ options.map((opt, i) => {
					return <div key={ i } onClick={ () => {
						optionTitleHandler(opt.name)
						sortOption(opt.value)
					} }>{ opt.name }</div>
				}) }
			</div>
		</div>
	)
}

export default Select