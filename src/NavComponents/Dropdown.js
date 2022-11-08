import React from "react";
import Dropitems from "./DropItem";

const Dropdown = () => {
    return (
        <div class="ui simple dropdown">
            More
            <i class="dropdown icon" style={{marginLeft:'10px'}}></i>
            <div class="menu" style={{padding:'10px',width:'200px',fontSize:'16px'}}>
                <a class='items'style={{display:'block',padding:'5px'}}><Dropitems category="Web Development" courses={["JavaScript","ReactJs","CSS","Angular","HTML"]}/></a>
                <a class='items'style={{display:'block',padding:'5px'}}><Dropitems category="Data Science" courses={["Python","Machine Learning","Data Analysis","Artificial Inteligence"]}/></a>
                <a class='items'style={{display:'block',padding:'5px'}}><Dropitems category="Programming Languages" courses={["Java","Python","C","C++","Dot Net"]} /></a>
            </div>
        </div>
    )
}


export default Dropdown