import React from 'react'
import HeaderContainer from './components/Header/HeaderContainer'
import Content from './components/Content/Content'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginContainer from './components/Auth/Login/LoginContainer'
import { connect } from 'react-redux'
import { checkIsAuth, logOut } from './redux/authReducer'
import ModalWindow from './components/common/ModalWindow/ModalWindow'
import { showGratitude } from './redux/donationReducer'
import AdminContent from './components/AdminContent/AdminContent'
import jwt_decode from 'jwt-decode'

const App = (props) => {
    const showContent = () => {
        const token = localStorage.getItem('token')
        const userdata = jwt_decode(token)
        if (userdata.role === 'ADMIN') {
            return <AdminContent />
        } else {
            return <Content />
        }
    }
    props.checkIsAuth()
    return (
        <div className="App">
            <BrowserRouter>
                <ModalWindow
                    isShowing={props.isShowingGratitude}
                    showGratitude={props.showGratitude}
                />

                <HeaderContainer {...props} />
                <Routes>
                    <Route
                        path="/*"
                        element={
                            props.isAuth ? showContent() : <LoginContainer />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    role: state.auth.role,
    email: state.auth.role,
    isShowingGratitude: state.donation.isShowingGratitude,
})
export default connect(mapStateToProps, { checkIsAuth, logOut, showGratitude })(
    App
)
