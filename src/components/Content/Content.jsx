import React from 'react'
import styles from './Content.module.css'
import { Routes, Route } from 'react-router-dom'
import MyProfile from './MyProfile/MyProfile'
import ReadingRoom from './ReadingRoom/ReadingRoom'
import Shop from './Shop/Shop'
import Donate from './Donate/Donate'
import CommentSection from './CommentSection/CommentSection'
import Dialogs from './Dialogs/Dialogs'

const Content = (props) => {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path="myProfile" element={<MyProfile />} />
                <Route path="readingRoom" element={<ReadingRoom />} />
                <Route path="shop" element={<Shop shop={props.state.shop} />} />
                <Route path="donate" element={<Donate />} />
                <Route
                    path="comments"
                    element={
                        <CommentSection
                            state={props.state.commentSection}
                            dispatch={props.dispatch}
                        />
                    }
                />
                <Route
                    path="dialogs"
                    element={
                        <Dialogs
                            dialogSection={props.state.dialogSection}
                            dispatch={props.dispatch}
                        />
                    }
                />
            </Routes>
        </div>
    )
}
export default Content
