import React from 'react'
import HeaderContainer from './components/Header/HeaderContainer'
import Content from './components/Content/Content'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginContainer from './components/Auth/Login/LoginContainer'
import { connect } from 'react-redux'
import { checkIsAuth, logOut } from './redux/authReducer'
import ModalWindow from './components/common/ModalWindow/ModalWindow'
import { showGratitude } from './redux/donationReducer'

const App = (props) => {
    const isAuthed = props.checkIsAuth()
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
                            props.isAuth ? <Content /> : <LoginContainer />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isShowingGratitude: state.donation.isShowingGratitude,
})
export default connect(mapStateToProps, { checkIsAuth, logOut, showGratitude })(
    App
)
