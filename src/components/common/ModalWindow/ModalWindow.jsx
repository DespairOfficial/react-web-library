import React from 'react'
import styles from './ModalWindow.module.scss'
import remove from '../../../assets/images/remove.png'
import Fireworks from '../Fireworks/Fireworks'
import thanks from '../../../assets/images/thanks.png'
const ModalWindow = (props) => {
    const onCloseModal = () => {
        props.showGratitude(false)
    }
    if (props.isShowing) {
        return (
            <div className={styles.modal}>
                <Fireworks />
                <div className={styles.modalContent}>
                    <div className={styles.close} onClick={onCloseModal}>
                        <img src={remove} alt="close" />
                    </div>

                    <div className={styles.thanks}>
                        <img src={thanks} alt="Thank you!" />
                        <p>Спасибо за поддержку!</p>
                    </div>
                </div>
                <div className={styles.overlay}></div>
            </div>
        )
    }
    return null
}
export default ModalWindow
