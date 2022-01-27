import './Uploader.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideUploader, removeUploadFile } from '../../../redux/reducers/uploadReducer'

const Uploader = () => {
	const dispatch = useDispatch()
	const files = useSelector(state => state.upload.files)
	const isVisible = useSelector(state => state.upload.isVisible)
	return (
		<div style={ isVisible ? { transform: 'translate(0, 0)' } : { transform: 'translate(0, 100%)' } } className="uploader">
			<div className="uploader__wrapper">
				<div className="uploader__header">
					<div className="uploader__title">Загрузки</div>
					<button onClick={ () => dispatch(hideUploader()) } className="uploader__close">X</button>
				</div>
				<div className="uploader__body">
					{
						files.map(file => {
							return (
								<div key={ file.id } className="upload-file">
									<div className="upload-file__header">
										<div className="upload-file__name">{ file.name }</div>
										<div onClick={ () => dispatch(removeUploadFile(file.id)) } className="upload-file__remove">X</div>
									</div>
									<div className="upload-file__progress">
										<div style={ { width: file.progress + '%' } } className="upload-file__bar"></div>
										<div className="upload-file__percent">{ file.progress }%</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}

export default Uploader