import React from 'react'
import cl from './Container.module.scss'

const Container = ({ children, parent }) => {
	return (
		<div className={ `${parent}__container ${cl._container}` }>
			{ children }
		</div>
	)
}

export default Container