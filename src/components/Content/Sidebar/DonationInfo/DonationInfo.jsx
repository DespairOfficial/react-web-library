import React, { useEffect } from 'react'
import styles from './DonationInfo.module.scss'
import { setSumOfFees } from '../../../../redux/donationReducer'
import { connect } from 'react-redux'
const DonationInfo = (props) => {
    useEffect(() => {
        props.setSumOfFees()
    }, [])
    const calculateHeightOfWater = (props.sumOfFees / props.purpose) * 100
    const getHeightOfWater = () => {
        if (calculateHeightOfWater > 100) return 100
        else if (calculateHeightOfWater == null) {
            return 0
        } else {
            return calculateHeightOfWater
        }
    }
    const heightOfWater = getHeightOfWater()
    return (
        <div className={styles.donationInfo}>
            <div className={styles.box}>
                <div
                    style={{ top: `calc(55% - ${heightOfWater}%)` }}
                    className={styles.frontEllipse}
                ></div>
                <div
                    style={{ top: `calc(55%  - ${heightOfWater}%)` }}
                    className={styles.backEllipse}
                ></div>

                <div
                    style={{ bottom: `${heightOfWater * 0.9}%` }}
                    className={styles.percent}
                >
                    {(props.sumOfFees == null ? 0 : props.sumOfFees) +
                        '$ of ' +
                        props.purpose +
                        '$'}
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        sumOfFees: state.donation.sumOfFees,
        purpose: state.donation.purpose,
    }
}
export default connect(mapStateToProps, { setSumOfFees })(DonationInfo)
