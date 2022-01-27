import React from 'react'
import cl from './Loader.module.scss'

const Loader = (props) => {
	return <div className="_loader">
		<div className={ cl.lds_roller }>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
}

export default Loader