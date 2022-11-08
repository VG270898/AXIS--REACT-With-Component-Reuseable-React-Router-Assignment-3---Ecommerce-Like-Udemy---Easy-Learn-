import React from "react";



const Dropitems = (props) => {
    return (
        <div class="ui simple dropdown" style={{display:'flex'}}>
            <div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
            {props.category}
            <i class="dropdown icon" style={{paddingLeft:'10px',marginRight:'0'}}></i>
            </div>
            <div class="menu" style={{padding:'10px',width:'190px',fontSize:'16px'}}>
                <a class='items course'style={{display:'block',padding:'5px'}}></a>
            </div>
        </div>
    )
}


export default Dropitems