import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Sidebar from './components/Sidebar/SideBar'
import { BrowserRouter } from 'react-router-dom'

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Navbar />
                <Content state={props.state} dispatch={props.dispatch} />
                <Sidebar />
            </div>
        </BrowserRouter>
    )
}

export default App
