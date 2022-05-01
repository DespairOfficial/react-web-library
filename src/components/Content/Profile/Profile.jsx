import React from 'react'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyBooksContainer from './MyBooksContainer/MyBooksContainer'
const MyProfile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyBooksContainer />
        </div>
    )
}
export default MyProfile
