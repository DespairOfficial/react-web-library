import React from "react";
import styles from './Content.module.css'
import { Routes, Route} from 'react-router-dom'
import MyProfile from './MyProfile/MyProfile'
import ReadingRoom from './ReadingRoom/ReadingRoom'
import Shop from './Shop/Shop'
import Donate from './Donate/Donate'

const Content =(props)=>{
    return(
        <div className={styles.content}>
            <Routes>
                <Route path='myProfile' element={<MyProfile/>}/>
            </Routes>
            <Routes>
                <Route path='readingRoom' element={<ReadingRoom/>}/>
            </Routes>
            <Routes>
                <Route path='shop' element={<Shop state={props.state.shop}/>}/>
            </Routes>
            <Routes>
                <Route path='donate' element={<Donate/>}/>
            </Routes>
        </div>
    )
}
export default Content