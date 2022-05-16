import React from 'react'
import sadSmile from '../../../../../../assets/images/sadSmile.png'
import styles from './NotFound.module.css'
const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <img src={sadSmile} alt="" />
            Nothing was found found
        </div>
    )
}
export default NotFound
