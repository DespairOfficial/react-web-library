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
                    Меню
                    <hr />
                </div>

                <div className={styles.menu_list}>
                    <NavLink to="/profile" className={isActive}>
                        Профиль
                    </NavLink>
                    <NavLink to="/readingRoom" className={isActive}>
                        Читать
                    </NavLink>

                    <NavLink to="/books" className={isActive}>
                        Книги
                    </NavLink>
                    <NavLink to="/donate" className={isActive}>
                        Поддержка
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Navbar
