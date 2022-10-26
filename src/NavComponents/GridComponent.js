import React from "react";
import ReactDOM from "react";

const Courses = (props)=>{
    return(
       
            <div class="column">
                <div class='ui card' style={{padding:'10px'}}>
                <img src={props.template} class="ui image"/>
                <div class="ui header"><a href="#">{props.title}</a>
                <div class="ui sub header">{props.author}</div></div>
                <div class="ui label">Cost:
                <div className="ui detail" style={{float:'right'}}>{props.cost}</div>
                </div>
                </div>

            </div>
        
    )
}

export default Courses