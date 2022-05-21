import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddedBooks from './AddedBooks/AddedBooks'
import BoughtBooks from './BoughtBooks/BoughtBooks'
import { NavLink } from 'react-router-dom'
import styles from './MyBooks.module.css'
import favorites from '../../../../../assets/images/favorites.png'
import card from '../../../../../assets/images/card.png'
const MyBooks = (props) => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className={styles.routing}>
                            <div
                                className={styles.logo + ' ' + styles.favorites}
                            >
                                <NavLink to="./favorites">
                                    <img src={favorites} alt="Favorites" />
                                </NavLink>
                                Избранные
                            </div>
                            <div className={styles.logo + ' ' + styles.bought}>
                                <NavLink to="./bought">
                                    <img src={card} alt="bought" />
                                </NavLink>
                                Купленные
                            </div>
                        </div>
                    }
                ></Route>
                <Route
                    path="/favorites"
                    element={<AddedBooks books={props.books} />}
                ></Route>
                <Route
                    path="/bought"
                    element={<BoughtBooks books={props.books} />}
                ></Route>
            </Routes>
        </div>
    )
}
export default MyBooks
