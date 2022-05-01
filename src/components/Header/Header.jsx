import React from 'react'
import styles from './Header.module.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const onLogOut = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <div className={styles.header}>
            <div className={styles.logo}>Header</div>
            <div className={styles.authBlock}>
                <div className={styles.login}>
                    <NavLink to="/login">Login</NavLink>
                </div>
                <div className={styles.logout}>
                    <p onClick={onLogOut}>Log out</p>
                </div>
            </div>
        </div>
    )
}
export default Header
