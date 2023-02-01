import React from "react"
import NavBar from "./NavBar"

function About () {
    return (
        <div className="about">
            <div className="nav-container">
             <div className="nav">
             <NavBar/>
             </div>
            </div>
            <h1>About Us</h1>
            <div className="float-image">
                <div className="header4">
                <h4>This is your favorite home for trending technologies</h4>
                <p>Maybe you've not been able to get access to information concerning the new trending technologies. We provide a very easy way to get informed, everything you want to know is here.</p>
                </div>
                <img src="https://img.freepik.com/free-photo/about-as-service-contact-information-concept_53876-138509.jpg?w=1060&t=st=1658913540~exp=1658914140~hmac=a47efdc0bb41078615760e3482f399eb537837d2ac58837b0881c1e3e2b311cb" alt="About"/>
            <div className="update">
              <h6 className="header6">We are responsible for your tech update, get informed by us. Let's move with the speed of technology</h6>
            </div>
            </div>
            
        </div>
    )
}

export default About