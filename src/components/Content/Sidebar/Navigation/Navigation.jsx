import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'
import favorites from '../../../../assets/images/favorites.png'
import card from '../../../../assets/images/card.png'
import donate from '../../../../assets/images/donate.png'
const Navigation = () => {
    return (
        <div className={styles.routing}>
            <div className={styles.logo}>
                <NavLink to="/profile/favorites">
                    <div className={styles.item}>
                        <img src={favorites} alt="Favorites" />
                        Избранные
                    </div>
                </NavLink>
            </div>

            <div className={styles.logo}>
                <NavLink to="/profile/bought">
                    <div className={styles.item}>
                        <img src={card} alt="bought" />
                        Купленные
                    </div>
                </NavLink>
            </div>
            <div className={styles.logo}>
                <NavLink to="/donate">
                    <div className={styles.item}>
                        <img src={donate} alt="bought" />
                        Поддержка
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
export default Navigation
