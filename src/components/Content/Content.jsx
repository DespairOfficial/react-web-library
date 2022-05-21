import React, { useState } from 'react'
import styles from './Content.module.scss'
import Sidebar from './Sidebar/SideBar'
import Navbar from './Navbar/Navbar'
import CenterContent from './CenterContent/CenterContent'

const Content = (props) => {
    const [isShowingNavBar, setIsShowingNavBar] = useState(false)
    const toggleShowingNavbar = () => {
        setIsShowingNavBar(!isShowingNavBar)
    }
    return (
        <div className={styles.content}>
            <Navbar
                toggleShowingNavbar={toggleShowingNavbar}
                isShowingNavBar={isShowingNavBar}
            />

            <CenterContent
                isShowingNavBar={isShowingNavBar}
                userdata={props.userdata}
            />
            <Sidebar
                isShowingNavBar={isShowingNavBar}
                userdata={props.userdata}
            />
        </div>
    )
}
export default Content
