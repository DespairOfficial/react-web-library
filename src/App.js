import React from 'react'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Sidebar from './components/Sidebar/SideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginContainer from './components/Auth/Login/LoginContainer'

function App(props) {
    return (
        <BrowserRouter>
            <HeaderContainer />
            <Routes>
                <Route path="/login" element={<LoginContainer />} />
                <Route path="/registration" element={<LoginContainer />} />
                <Route
                    path="/*"
                    element={
                        <div className="App">
                            <Navbar />
                            <Content />
                            <Sidebar />
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
