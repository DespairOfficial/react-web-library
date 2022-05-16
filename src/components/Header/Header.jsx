import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/images/logo.png'

const Header = (props) => {
    const onLogOut = () => {
        props.logOut()
    }
    const showLogButton = () => {
        if (props.isAuth) {
            return (
                <div className={styles.logout}>
                    <p onClick={onLogOut}>Log out</p>
                </div>
            )
        }
    }
    return (
        <div className={styles.header}>
            <div className={styles.logoWrapper}>
                <img src={logo} alt="Books" />
                <div className={styles.logoTitle}>
                    <b>Library</b>
                </div>
            </div>
            <div className={styles.authBlock}>{showLogButton()}</div>
        </div>
    )
}
export default Header
