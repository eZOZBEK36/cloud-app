import './FileList.scss'
import React from 'react'
import File from './file/File'
import { useSelector } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const FileList = () => {
	const files = useSelector(state => state.files.files)
	const filesView = useSelector(state => state.files.view)

	if (filesView === 'bigplate' || filesView === 'plate') return (
		<div className={ `list-disk _${filesView}` }>
			{ files.length ?
				files.map(file =>
					<File key={ file._id } file={ file } />
				)
				: <div className="list-disk__notfound">Файлы не найдены</div>
			}
		</div>
	)

	return (
		<div className="list-disk _list">
			<div className="list-disk__header">
				<div>Название</div>
				<div>Дата</div>
				<div>Размер</div>
			</div>
			{ files.length ?
				<TransitionGroup className="list-disk__body">
					{ files.map(file =>
						<CSSTransition
							timeout={ 300 }
							key={ file._id }
							classNames="files"
						>
							<File file={ file } />
						</CSSTransition>
					) }
				</TransitionGroup>
				:
				<div className="list-disk__notfound">Файлы не найдены</div>
			}
		</div>
	)
}

export default FileList