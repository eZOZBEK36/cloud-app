import './Disk.scss'
import Popup from './Popup'
import sort from './img/sort.svg'
import goback from './img/goback.svg'
import Input from '../../UI/Input/Input'
import FileList from './fileList/FileList'
import bigBadges from './img/grid-2x2.svg'
import Uploader from './Uploader/Uploader'
import Select from '../../UI/Select/Select'
import lineBadges from './img/grid-2x3.svg'
import smallBadges from './img/grid-3x3.svg'
import React, { useEffect, useState } from 'react'
import Container from '../../UI/Container/Container'
import { useDispatch, useSelector } from 'react-redux'
import { showLoader } from '../../redux/reducers/appReducer'
import { getFiles, searchFiles, uploadFiles } from '../../redux/actions/file'
import { setCurrentDir, setPopupDisplay, changeFileView } from '../../redux/reducers/fileReducer'

const Disk = () => {
	const [ dragEnter, setDragEnter ] = useState(false)
	const [ sortOption, setSortOption ] = useState('type')
	const [ searchTimeOut, setSearchTimeOut ] = useState(false)
	const [ searchInputValue, setSearchInputValue ] = useState('')
	const options = [
		{
			name: 'По имени',
			value: 'name'
		},
		{
			name: 'По типу',
			value: 'type'
		},
		{
			name: 'По дате',
			value: 'date'
		}
	]
	const dispatch = useDispatch()
	const files = useSelector(state => state.files.files)
	const dirStack = useSelector(state => state.files.dirStack)
	const currentDir = useSelector(state => state.files.currentDir)

	const showPopup = () => {
		dispatch(setPopupDisplay())
	}
	const goBackHandler = () => {
		const backDirId = dirStack.pop()
		dispatch(setCurrentDir(backDirId))
	}
	const fileUploadHandler = e => {
		const files = [ ...e.target.files ]
		files.forEach(file => dispatch(uploadFiles(file, currentDir)))
	}

	const dragEnterHandler = e => {
		e.preventDefault()
		e.stopPropagation()
		setDragEnter(true)
	}
	const dragLeaveHandler = e => {
		e.preventDefault()
		e.stopPropagation()
		setDragEnter(false)
	}

	const dropHandler = e => {
		e.preventDefault()
		e.stopPropagation()
		setDragEnter(false)
		const files = [ ...e.dataTransfer.files ]
		files.forEach(file => dispatch(uploadFiles(file, currentDir)))
	}

	const searchHandler = value => {
		if (searchTimeOut) clearTimeout(searchTimeOut)
		dispatch(showLoader())
		if (value !== '') setSearchTimeOut(setTimeout(val => dispatch(searchFiles(val)), 300, value))
		else dispatch(getFiles(currentDir))
	}

	useEffect(() => {
		dispatch(getFiles(currentDir, sortOption))
	}, [ currentDir, sortOption ])

	return (!dragEnter ?
		<div className="disk"
			onDragEnter={ e => dragEnterHandler(e) }
			onDragLeave={ e => dragLeaveHandler(e) }
			onDragOver={ e => dragEnterHandler(e) }
		>
			<div className="disk__wrapper">
				<Container parent="disk">
					<div className="disk__title">Files</div>
					<div className="disk__actions actions-disk">
						<div className="actions-disk__back">
							<button onClick={ goBackHandler } type="button">
								<img src={ goback } alt="" />
							</button>
						</div>
						<div className="actions-disk__search">
							<Input
								type="text"
								id="search-input"
								placeholder="Поиск..."
								callback={ searchHandler }
								value={ searchInputValue }
								setValue={ setSearchInputValue }
							/>
						</div>
						<div className="actions-disk__sort disk-sort">
							<div className="disk-sort__btn">
								<img src={ sort } alt="" />
							</div>
							<div className="disk-sort__select">
								<Select options={ options } sortOption={ setSortOption } />
							</div>
							<div className="disk-sort__view view-sort">
								<div className="view-sort__bigbadges">
									<img src={ bigBadges } alt="" onClick={ () => dispatch(changeFileView('bigplate')) } />
								</div>
								<div className="view-sort__smallbadges">
									<img src={ smallBadges } alt="" onClick={ () => dispatch(changeFileView('plate')) } />
								</div>
								<div className="view-sort__linebadges">
									<img src={ lineBadges } alt="" onClick={ () => dispatch(changeFileView('list')) } />
								</div>
							</div>
						</div>
					</div>
					<div className="disk__creators">
						<button className="disk__createDir" onClick={ showPopup }>
							Создать новую папку
						</button>
						<div className="disk__uploadfile">
							<label htmlFor="disk__uploadfile">Загрузить...</label>
							<input multiple={ true } onChange={ e => fileUploadHandler(e) } type="file" name="file" id="disk__uploadfile" />
						</div>
						<Popup />
						<Uploader />
					</div>
					<FileList />
				</Container>
			</div>
		</div>
		:
		<div className="_drag"
			onDrop={ e => dropHandler(e) }
			onDragEnter={ e => dragEnterHandler(e) }
			onDragLeave={ e => dragLeaveHandler(e) }
			onDragOver={ e => dragEnterHandler(e) }
		>
			<div>
				Перетащите файлы сюда
			</div>
		</div>
	)
}

export default Disk