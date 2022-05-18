import React, { useState } from 'react'
import donationImage from '../../../../assets/images/donation.png'
import styles from './Donate.module.scss'
import { connect } from 'react-redux'
import { donation, showGratitude } from '../../../../redux/donationReducer'
const Donate = (props) => {
    const [sumToDonate, setSumToDonate] = useState('0.25')
    const onDonate = () => {
        props.showGratitude(true)
        props.donation(sumToDonate)
    }
    return (
        <div className={styles.donationPage}>
            <img src={donationImage} alt="Donate" />

            <div className={styles.donationDescription}>
                Вы можете поддержать проект, осуществив пожертвование
            </div>
            <div className={styles.donateActions}>
                <div className={styles.box}>
                    <select
                        onChange={(e) => {
                            setSumToDonate(e.target.value)
                        }}
                    >
                        <option value="0.25">0.25$</option>
                        <option value="1">1$</option>
                        <option value="5">5$</option>
                        <option value="25">25$</option>
                        <option value="100">100$</option>
                    </select>
                </div>
                <button
                    onClick={onDonate}
                    className={styles.donateButton + ' ' + styles.raise}
                >
                    Donate
                </button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        currentDonation: state.donation.currentDonation,
        isShowingGratitude: state.donation.isShowingGratitude,
    }
}
export default connect(mapStateToProps, { donation, showGratitude })(Donate)
