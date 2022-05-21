import Navigation from '../Navigation/Navigation'
import styles from './Profile.module.css'
import user from '../../../../assets/images/user.png'

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <div className={styles.profileInfo}>
                <div className={styles.userlogo}>
                    <img src={user} alt="Logo" />
                </div>

                <div className={styles.userdata}>
                    <div>
                        <span>{'Email: '} </span>
                        {props.userdata.email}
                    </div>
                    <div>
                        <span> {'Username: '}</span>
                        {props.userdata.name}
                    </div>
                </div>
            </div>
            <Navigation />
        </div>
    )
}
export default Profile
