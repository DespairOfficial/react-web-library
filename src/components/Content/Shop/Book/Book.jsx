import React from "react";
import styles from './Book.module.css'

const Book = (props) =>{
    return (
        <div className={styles.book}>
            <img src={props.image} alt="cover" />
            <p className={styles.title}>{props.title}</p> 
            <p className={styles.authors}>{props.authors.join(' ')}</p> 
            
            
        </div>
    )
}
export default Book