import React from 'react'
import styles from './ProfileInfo.module.css'
import user from '../../../../../assets/images/user.png'
const ProfileInfo = (props) => {
    return (
        <div>
            <div className={styles.profileInfo}>
                <div className={styles.userlogo}>
                    <img src={user} alt="Logo" />
                </div>

                <div className={styles.userdata}>
                    <div>email: {props.userdata.email}</div>
                    <div>username: {props.userdata.name}</div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo
