import React from "react"
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                
                <Typed
                className="typed-text"
                strings={["Frontend Developing","Udemy Courses", "Online Programming Education", "Backend Developing"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
            
        </div>
    )
}

export default Header
