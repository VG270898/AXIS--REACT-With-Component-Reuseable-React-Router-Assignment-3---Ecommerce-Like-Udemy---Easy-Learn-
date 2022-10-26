import React from "react";
import Courses from "./GridComponent";

import t1 from "./image/t1.png"
import t2 from "./image/t2.png"
import t3 from "./image/t3.png"
import t4 from "./image/t4.png"
import t5 from "./image/t5.png"


const Home = (props)=>{
    return(
       
            <div>
            <h2 class="ui header" style={{color:'white'}}>Available Courses</h2>
            <div class="ui very relaxed five column grid">

                <Courses
                    author="Vishal Gupta"
                    cost="Rs.500"
                    title="HTML Tutorial"
                    template={t1}
                />

                <Courses
                    author="Sandeep Kumar"
                    cost="Rs.450"
                    title="CSS Tutorial"
                    template={t2}
                />

                <Courses
                    author="Anmol Rajput"
                    cost="Rs.560"
                    title="JS Tutorial"
                    template={t3}
                />

                <Courses
                    author="Arun Kumar"
                    cost="Rs.650"
                    title="React Tutorial"
                    template={t4}
                />

                <Courses
                    author="Rajshekar"
                    cost="Rs.460"
                    title="Angular Tutorial"
                    template={t5}
                /></div>

            <h3 class="ui dividing header"></h3>
            <div class="ui very relaxed five column grid">
                <Courses
                    author="Vishal Gupta"
                    cost="Rs.500"
                    title="HTML Tutorial"
                    template={t1}
                />

                <Courses
                    author="Sandeep Kumar"
                    cost="Rs.450"
                    title="CSS Tutorial"
                    template={t2}
                />

                <Courses
                    author="Anmol Rajput"
                    cost="Rs.560"
                    title="JS Tutorial"
                    template={t3}
                />

                <Courses
                    author="Arun Kumar"
                    cost="Rs.650"
                    title="React Tutorial"
                    template={t4}
                />

                <Courses
                    author="Rajshekar"
                    cost="Rs.460"
                    title="Angular Tutorial"
                    template={t5}
                />

            </div>

            </div>
        
    )
}

export default Home