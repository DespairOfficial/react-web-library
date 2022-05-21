import React from 'react'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyBooks from './MyBooks/MyBooks'
const MyProfile = (props) => {
    return (
        <div>
            <ProfileInfo userdata={props.userdata} />
            <MyBooks books={props.books} />
        </div>
    )
}
export default MyProfile
