import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    let isActive = (navData) => (navData.isActive ? styles.active : styles.item)

    return (
        <div className={styles.navbar}>
            <NavLink to="/profile" className={isActive}>
                Profile
            </NavLink>
            <NavLink to="/readingRoom" className={isActive}>
                Reading room
            </NavLink>

            <NavLink to="/books" className={isActive}>
                Books
            </NavLink>
            <NavLink to="/donate" className={isActive}>
                Support
            </NavLink>
            <NavLink to="/dialogs" className={isActive}>
                Dialogs
            </NavLink>
        </div>
    )
}
export default Navbar
