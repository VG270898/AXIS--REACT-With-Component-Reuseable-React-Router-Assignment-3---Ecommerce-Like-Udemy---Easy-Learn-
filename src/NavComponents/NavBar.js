import React from "react";
import { ReactDOM } from "react";
import logo from "./image/logo.png"
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="ui secondary menu" style={{backgroundColor:'#514b4b00'}}>
            <a class="item"><img className="ui image" src={logo} style={{width:'130px',height:'60px'}}></img></a>
            <a class="active item" style={{color:'white'}} href="/home">Home</a>
            <a class="item" style={{color:'white'}} href="#">Our Course</a>
            <a class="item" style={{color:'white'}} href="/about">About</a>
            {/* <a class="item" style={{color:'white'}} href="/profile">Profile</a> */}
            <div class="right menu">
                <div class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search..." />
                        <i aria-hidden="true" class="search icon"></i>
                    </div>
                </div>
                <a class="item" style={{color:'white'}} href="/login">Login</a>
            </div>
        </div>
    )
}

export default Navbar