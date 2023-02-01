import React from "react"
import NavBar from "./NavBar"

function Contact () {
    return (
        <div className="container">
            <div className="nav-container">
             <div className="nav">
                <NavBar/>
             </div>
            </div>
           <div className="contact">
            <h2> CONTACT US!</h2>
                <h5>Any inqury?</h5>
                <p>Send us a message</p>
                <form className="form-elements">
                    <input type="text"  placeholder="Your name"/><br/><br/>
                    <input name="email" type="text"  placeholder="Your Email"/><br/><br/>
                    <textarea name=""  cols="30" rows="10" placeholder="Massage...."/><br/><br/>
                    <span><input type="checkbox"/>  I am not a robot </span> <br/><br/>
                    <button id="submit">SEND</button>
                </form>
           </div>
        </div>
    )

}
export default Contact