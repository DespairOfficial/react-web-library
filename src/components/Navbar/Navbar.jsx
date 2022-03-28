import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'

const Navbar =()=>{
    let isActive= navData=>navData.isActive? styles.active:styles.item 

    return(
        <div className={styles.navbar}>
            <NavLink to="/myProfile" className={isActive}>MyProfile</NavLink>
            <NavLink to="/readingRoom" className={isActive}>Reading room</NavLink>
           
            <NavLink to="/shop" className={isActive}>Shop</NavLink>
            <NavLink to="/donate" className={isActive}>Support</NavLink>
            
            
            
             
        </div>
    )
}
export default Navbar