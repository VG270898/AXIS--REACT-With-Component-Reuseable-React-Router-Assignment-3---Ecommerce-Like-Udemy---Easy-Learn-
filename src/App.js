import React from 'react';
import Navbar from './NavComponents/NavBar';
import Home from './NavComponents/Home';
import About from './NavComponents/About';
import Profile from './NavComponents/Profile';
import Login from './NavComponents/Login';
import Footer from './NavComponents/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App(){
    return (
        <BrowserRouter>
        <div style={{padding:'20px'}}>

            <Navbar/>
            <hr></hr>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <hr style={{marginTop:'40px'}}></hr>

            <Footer/>

        </div>
        </BrowserRouter>


    )
    // return(
        
        
    //     <BrowserRouter>
    //   <div className="App">
    //     <Navbar />
    //     <div className="content">
    //       <Routes>
    //         <Route exact path="/" element={<Home/>} />
    //         <Route exact path="/home" element={<Home/>} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/contact" element={<Contact />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </BrowserRouter>

        
    // )
}
export default App