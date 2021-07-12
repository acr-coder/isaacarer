import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Home from './components/Home';
import logo from "./my_logo.png"


function App() {
  const [language, setLanguage] = useState(0)
  
  return (
    
      <div>
        
        <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container p-2">
  <a class="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
  
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">{language ? "Anasayfa" : "Home"} </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">{language ? "Hakkımda" : "About Me"}</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/courses">{language ? "Udemy Kurslarım" : "My Udemy Courses"}</Link>
      </li>
      
      <li class="nav-item">
        <Link class="nav-link" to="contact">{language ? "İletişim" : "Contact"}</Link>
      </li>
      <li class="nav-item">
      <button onClick={()=>setLanguage(1)} type="button" class="btn btn-primary  m-1 ">Turkish</button>
      </li>
      <li class="nav-item">
      <button onClick={()=>setLanguage(0)} type="button" class="btn btn-secondary m-1">English</button>
      </li>
      
    </ul>
    
  </div>
  
  
  </div>
</nav>
    
    
    <Switch>
    <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/courses">
        <Courses/>
      </Route>

    </Switch>
    </Router>
    
    </div> 
    
  );
}

export default App;
