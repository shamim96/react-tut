import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = ()=>{
    const style = {
      color: "black",
      fontWeight: "bold"
    };
    return(
        <nav>
            <NavLink exact activeStyle={style} to="/"> Home </NavLink>
            <NavLink activeStyle={style} to="/about">About</NavLink>
            <NavLink activeStyle={style} to="/contact">Contact </NavLink>
        </nav>
    )
};
export default Nav;