import React from "react";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Error from "../../src/pages/Error/Error";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const Rotas = ()=>{
    return(
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Projects" element={<Projects/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
    );
}

export default Rotas;