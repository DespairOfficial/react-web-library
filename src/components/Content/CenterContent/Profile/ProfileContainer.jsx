import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'

const ProfileContainer = (props) => {
    return <Profile {...props} />
}
const mapStateToProps = (state) => {
    return {
        books: state.profile.books,
    }
}
export default connect(mapStateToProps, {})(ProfileContainer)
