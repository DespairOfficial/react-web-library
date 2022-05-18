import { donate, getSumOfFees } from '../http/donationAPI'
const SET_SUM_OF_FEES = 'SET-SUM-OF-FEES'
const SET_CURRENT_DONATON = 'SET-CURRENT-DONATION'
const SET_GRATITUDE = 'SET-GRATITUDE'
const initialState = {
    currentDonation: 0,
    sumOfFees: 0,
    purpose: 100,
    isShowingGratitude: false,
}
const donationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUM_OF_FEES: {
            return { ...state, sumOfFees: action.value }
        }
        case SET_CURRENT_DONATON: {
            return { ...state, currentDonation: action.value }
        }
        case SET_GRATITUDE: {
            return { ...state, isShowingGratitude: action.isShowing }
        }
        default:
            return { ...state }
    }
}
const setFees = (value) => {
    return { type: SET_SUM_OF_FEES, value }
}
const setDonate = (value) => {
    return { type: SET_CURRENT_DONATON, value }
}
const setGratitude = (isShowing) => {
    return { type: SET_GRATITUDE, isShowing }
}
export const setSumOfFees = () => {
    return (dispatch) => {
        getSumOfFees().then((data) => {
            if (data.status === 0) {
                dispatch(setFees(data.sumOfFees))
            }
        })
    }
}
export const donation = (value) => {
    return (dispatch) => {
        donate(value).then((data) => {
            if (data.status === 0) {
                dispatch(setDonate(value))
                dispatch(setSumOfFees())
            }
        })
    }
}
export const showGratitude = (isShowing) => {
    return (dispatch) => {
        dispatch(setGratitude(isShowing))
    }
}
export default donationReducer
