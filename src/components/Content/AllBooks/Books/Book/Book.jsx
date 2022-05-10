import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Book.module.css'

const Book = (props) => {
    return (
        <div className={styles.book}>
            <NavLink to={'/readingRoom/' + props.id}>
                <img src={props.image} alt="cover" />
            </NavLink>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.authors}>{props.authors.join(' ')}</p>
            <button
                disabled={props.isAddingInCard(props.id)}
                onClick={() => {
                    props.onToggleBookCard(props.id, props.isInCard)
                }}
            >
                {props.isInCard ? 'Remove' : 'Add'}
            </button>
            <NavLink to={'/readingRoom/' + props.id}>
                <button>Читать</button>
            </NavLink>
            <NavLink to={'/books/' + props.id}>
                <button>Описание</button>
            </NavLink>
        </div>
    )
}
export default Book
