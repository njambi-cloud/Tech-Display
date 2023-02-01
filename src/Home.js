import React from "react"
import NavBar from "./NavBar"

function Home () {

    return (
        <div className="home-header">
            <div className="home-nav">
                <h1>Tech Display</h1>
                <NavBar />
            </div>
        
            <div className="home">
                <h2>Be upto date with the current trends in technology</h2>
                <h4>The field of technology is one which keeps changing every minute. There are very many trends in technology today which everyone needs to know</h4>
            </div>
            
        </div>
    )
}

export default Home