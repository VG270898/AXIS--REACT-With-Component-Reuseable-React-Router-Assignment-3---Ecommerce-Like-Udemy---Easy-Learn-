import React from "react";
import { ReactDOM } from "react";
import i1 from "./image/fb.png"
import i2 from "./image/insta.png"
import i3 from "./image/youtube.png"
import i4 from "./image/twitter.png"
import i5 from "./image/link.png"
import logo from "./image/logobw.png"


const Footer = ()=>{
    return(
        <div class="ui visible message" style={{backgroundColor:'#514b4b00',display:'flex'}}>
            <div className="content"  style={{display:'flex',alignItems:'center',width:'100%',justifyContent:'space-around'}}>

                <div class='content'>

                    <img src={logo} style={{width:'230px',height:'120px',marginLeft:'-30px',marginRight:'30px'}}></img>
                </div>

                <div class='content'>
                    <h3 class='ui heading' >About Us</h3>
                    <p style={{color:'white'}}>Whether you want to learn or to share what you know, </p>
                    <p style={{color:'white'}} >you’ve come to the right place.</p>

                </div>

                <div class='content' style={{display:'block',justifyContent:'center',alignItems:'center'}}>
                    <h3 class='ui heading'>Contact Us</h3>
                    <p style={{color:'white'}} class='ui sub heading'>Lucknow , Uttar Pradesh, India</p>
                    <p style={{color:'white'}}>+91 76787 87656</p>
                    <p style={{color:'white'}}>info@EasyLearn.com</p>
                </div>

                <div style={{display:'flex',justifyContent:'end',alignItems:'center'}}>

                <div className="item"><a href="#"><img style={{width:'40px',height:'40px',paddingLeft:'3px'}} src={i1}></img></a></div>
                <div className="item"><a href="#"><img style={{width:'40px',height:'40px',paddingLeft:'3px'}} src={i2}></img></a></div>
                <div className="item"><a href="#"><img style={{width:'40px',height:'40px',paddingLeft:'3px'}} src={i3}></img></a></div>
                <div className="item"><a href="#"><img style={{width:'40px',height:'40px',paddingLeft:'3px'}} src={i4}></img></a></div>
                <div className="item"><a href="#"><img style={{width:'40px',height:'40px',paddingLeft:'3px'}} src={i5}></img></a></div>
                </div>
            </div>

            <div class="extra content">

            </div>
        </div>
    )
}


export default Footer