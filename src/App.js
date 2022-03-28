import React from "react";
/*import ReactDOM from "react-dom";*/

import './styles.css'
import Navbar from "./Navbar"
import Masthead from "./Masthead";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";

const App = () => (
<div>
    <Navbar/>
    <Masthead/>
    <Portfolio/>
    <About/>
    <Contact/>
    <Footer/>
    <Copyright/>
</div>
)

export default App;