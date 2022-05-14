import React from 'react'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Sidebar from './components/Sidebar/SideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginContainer from './components/Auth/Login/LoginContainer'
import { connect } from 'react-redux'

const Main = () => {
    return (
        <div className="App">
            <Navbar />
            <Content />
            <Sidebar />
        </div>
    )
}

function App(props) {
    return (
        <BrowserRouter>
            <HeaderContainer />

            <Routes>
                <Route
                    path="/*"
                    element={
                        sessionStorage.getItem('token') ? (
                            <Main />
                        ) : (
                            <LoginContainer />
                        )
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {})(App)
