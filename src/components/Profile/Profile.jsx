import './Profile.scss'
import React from 'react'
import { APIURL } from '../../config'
import AvatarLogo from '../Header/img/avatar.svg'
import Container from '../../UI/Container/Container'
import { useDispatch, useSelector } from 'react-redux'
import { uploadAvatar, deleteAvatar } from '../../redux/actions/user'

const Profile = () => {
	const dispatch = useDispatch()
	const currentUser = useSelector(state => state.user.currentUser)
	const avatar = currentUser.avatar ? `${APIURL}/static/${currentUser.id || currentUser._id}/${currentUser.avatar}` : AvatarLogo

	const uploadAvatarHandler = file => {
		dispatch(uploadAvatar(file))
	}

	return <div className="profile">
		<div className="profile__wrapper">
			<Container parent="profile">
				{/* <div className="profile__goback">
					<NavLink to="/">
						<span></span>
						<span></span>
					</NavLink>
				</div> */}
				<div className="profile__actions">
					<div className="profile__img">
						<img src={ avatar } alt="Avatar" />
						{ currentUser.avatar && <div onClick={ () => dispatch(deleteAvatar()) } className="profile__delete">
							<span></span>
							<span></span>
						</div> }
					</div>
					<div className="profile__form">
						<input accept="image/*" onChange={ e => uploadAvatarHandler(e.target.files[ 0 ]) } type="file" name="avatarinput" id="avatarinput" />
						<label htmlFor="avatarinput">Загрузить...</label>
					</div>
				</div>
			</Container>
		</div>
	</div>

}

export default Profile