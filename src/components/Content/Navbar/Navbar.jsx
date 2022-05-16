import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = (props) => {
    let isActive = (navData) => (navData.isActive ? styles.active : styles.item)
    const onToggleNavBar = () => {
        return props.toggleShowingNavbar()
    }
    return (
        <div className={styles.menu_wrapper}>
            <div
                className={
                    styles.hidden_menu +
                    ' ' +
                    (props.isShowingNavBar ? styles.showNavBar : null)
                }
            >
                <div
                    className={styles.hidden_menu_toggler}
                    onMouseOver={onToggleNavBar}
                ></div>
                <div className={styles.menu_title}>
                    Menu
                    <hr />
                </div>

                <div className={styles.menu_list}>
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
            </div>
        </div>
    )
}
export default Navbar
