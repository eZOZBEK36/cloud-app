import './Popup.scss'
import React, { useState } from 'react'
import Input from '../../UI/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { setPopupDisplay } from '../../redux/reducers/fileReducer'
import { createFiles } from '../../redux/actions/file'

const Popup = () => {
	const dispatch = useDispatch()
	const [ dirName, setDirName ] = useState('')
	const currentDir = useSelector(state => state.files.currentDir)
	const popupDisplay = useSelector(state => state.files.popupDisplay)

	const popupHandler = (e) => {
		if (e.target.matches('._popup') || e.target.matches('._popup__close')) {
			dispatch(setPopupDisplay())
		}
		if (e.target.matches('._popup__create_btn')) {
			setDirName('')
			dispatch(createFiles(currentDir, dirName))
			dispatch(setPopupDisplay())
		}
	}
	return (
		<div onClick={ popupHandler } className={ popupDisplay ? "_popup _open" : "_popup" }>
			<div className="_popup__wrapper">
				<div className="_popup__content">
					<div className="_popup__header">
						<div className="_popup__title">Создать новую папку</div>
						<div className="_popup__close">
							<div></div>
							<div></div>
						</div>
					</div>
					<div className="_popup__form">
						<Input id="_popup_inp" value={ dirName } setValue={ setDirName } type="text" placeholder="Введите название папки..." />
					</div>
					<div className="_popup__create">
						<button className="_popup__create_btn">Создать папку</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Popup