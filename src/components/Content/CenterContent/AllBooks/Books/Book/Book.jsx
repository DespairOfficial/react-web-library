import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Book.module.scss'
import LikeButton from '../../../../../common/LikeButton/LikeButton'
const Book = (props) => {
    const onToggleCard = () => {
        props.onToggleBookCard(props.id, props.isInCard)
    }
    return (
        <div className={styles.book}>
            <div className={styles.like}>
                <LikeButton
                    isInCard={props.isInCard}
                    onToggleCard={onToggleCard}
                />
            </div>
            <div className={styles.mainInfo}>
                <NavLink to={'/books/' + props.id}>
                    <img src={props.image} alt="cover" />
                </NavLink>
                <div className={styles.title}>{props.title} </div>
                <div className={styles.authors}>{props.authors.join(' ')}</div>
            </div>

            <div className={styles.buttons}>
                <div className={styles.description}>
                    <NavLink to={'/books/' + props.id}>
                        <button type="button" className={styles.fill}>
                            Описание
                        </button>
                    </NavLink>
                </div>
                <div className={styles.read}>
                    <NavLink to={'/readingRoom/' + props.id}>
                        <button
                            type="button"
                            className={styles.fill + ' ' + styles.readButton}
                        >
                            Читать
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Book
