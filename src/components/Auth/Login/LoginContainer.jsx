import { connect } from 'react-redux'
import { setCurrentUserData } from '../../../redux/authReducer'
import Login from './Login'

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        username: state.auth.username,
        password: state.auth.password,
    }
}
export default connect(mapStateToProps, { setCurrentUserData })(Login)
