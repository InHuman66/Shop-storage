import React from 'react';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";






const Header= () => {
    return (
        <div className={' container'}>
                <div className={classes.backGround}>
                    <NavLink to={'/ShopList'} activeClassName={classes.header_button_active} className={classes.header_button}>Shop list </NavLink>
                    <NavLink to={'/BuyList'} className={classes.header_button}>Buy list</NavLink>
                </div>
        </div>
    );
}
export default Header;