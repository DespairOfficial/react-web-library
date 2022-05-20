import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
let isActive = (navData) => (navData.isActive ? styles.active : styles.item)
const Navbar = () => {
    return (
        <div className={styles.menu_wrapper}>
            <div className={styles.menu}>
                <div className={styles.menu_title}>
                    Menu
                    <hr />
                </div>

                <div className={styles.menu_list}>
                    <NavLink to="/users" className={isActive}>
                        users
                    </NavLink>
                    <NavLink to="/booksBought" className={isActive}>
                        booksBought
                    </NavLink>
                    <NavLink to="/booksRated" className={isActive}>
                        booksRated
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Navbar
