import './File.scss'
import React from 'react'
import Trash from './img/trash.svg'
import fileIMG from './img/file.svg'
import folder from './img/folder.svg'
import Download from './img/save.svg'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFiles, downloadFiles } from '../../../../redux/actions/file'
import { pushToStack, setCurrentDir } from '../../../../redux/reducers/fileReducer'

const File = ({ file }) => {
	const dispatch = useDispatch()
	const filesView = useSelector(state => state.files.view)
	const currentDir = useSelector(state => state.files.currentDir)

	const openDirHandler = () => {
		if (file.type === 'dir') {
			dispatch(pushToStack(currentDir))
			dispatch(setCurrentDir(file._id))
		}
	}
	const downloadClickHandler = e => {
		e.stopPropagation()
		downloadFiles(file)
	}
	const deleteClickHandler = e => {
		e.stopPropagation()
		dispatch(deleteFiles(file._id))
	}
	const sizeFormat = size => {
		if (size > (1024 ** 3)) return (size / (1024 ** 3)).toFixed(1) + 'GB'
		if (size > (1024 ** 2)) return (size / (1024 ** 2)).toFixed(1) + 'MB'
		if (size > 1024) return (size / 1024).toFixed(1) + 'KB'
		else return size + 'B'
	}

	if (filesView === 'bigplate' || filesView === 'plate') return (
		<div onClick={ openDirHandler } className={ file.type !== 'dir' ? `file _${filesView}` : `file _dir _${filesView}` }>
			<div className="file__header">
				<div className="file__img">
					<img src={ file.type === 'dir' ? folder : fileIMG } alt="" />
				</div>
				<div className="file__actions">
					{
						file.type !== 'dir' &&
						<div className="file__download">
							<button onClick={ e => downloadClickHandler(e) }>
								<img src={ Download } alt="" />
							</button>
						</div>
					}
					<div className="file__delete">
						<button onClick={ e => deleteClickHandler(e) }>
							<img src={ Trash } alt="" />
						</button>
					</div>
				</div>
			</div>
			<div className="file__name">
				<div>{ file.type === 'dir' ? file.name : file.name.slice(0, -file.type.length) }</div>
				<div>{ file.type !== 'dir' && file.name.slice(-file.type.length) }</div>
			</div>
		</div>
	)
	return (
		<div onClick={ openDirHandler } className={ file.type !== 'dir' ? `filelist` : `filelist _dir` }>
			<div className="filelist__img">
				<img src={ file.type === 'dir' ? folder : fileIMG } alt="" />
			</div>
			<div className="filelist__name">
				{ file.name }
			</div>
			<div className="filelist__date">
				{ file.date.slice(0, 10).replaceAll('-', '/') }
			</div>
			<div className="filelist__size">
				{ sizeFormat(file.size) }
			</div>
			{
				file.type !== 'dir' &&
				<div className="filelist__download">
					<button onClick={ e => downloadClickHandler(e) }>
						<img src={ Download } alt="" />
					</button>
				</div>
			}
			<div className="filelist__delete">
				<button onClick={ e => deleteClickHandler(e) }>
					<img src={ Trash } alt="" />
				</button>
			</div>
		</div>
	)
}

export default File