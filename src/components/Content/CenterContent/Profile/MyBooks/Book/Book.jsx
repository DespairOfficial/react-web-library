import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Book.module.css'

const Book = (props) => {
    const onToggleCard = () => {
        props.onToggleBookCard(props.id, props.isInCard)
    }
    return (
        <section>
            <div className={styles.book}>
                <div className={styles.mainInfo}>
                    <NavLink to={'/books/' + props.id}>
                        <img src={props.image} alt="cover" />
                    </NavLink>
                    <div className={styles.title}>{props.title}</div>
                    <div className={styles.authors}>
                        {props.authors.join(' ')}
                    </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.description}>
                        <NavLink to={'/books/' + props.id}>
                            <button className={styles.fill}>Описание</button>
                        </NavLink>
                    </div>
                    <div className={styles.read}>
                        <NavLink to={'/readingRoom/' + props.id}>
                            <button
                                className={
                                    styles.fill + ' ' + styles.readButton
                                }
                            >
                                Читать
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Book
