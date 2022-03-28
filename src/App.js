import React from "react";
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Sidebar from './components/Sidebar/SideBar'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/state'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header/>
            <Navbar/>
            <Content state={store.state}/>
            <Sidebar/>
        </div>
    </BrowserRouter>
  );
}

export default App;
