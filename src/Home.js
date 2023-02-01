import React from "react"
import NavBar from "./NavBar"
import Slider from "./Slider"

function Home () {
    const container = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    }

    return (
        <div className="home-header">
            <div className="home-nav">
                <h1>Tech Display</h1>
                <NavBar />
            </div>
        
            <div className="home">
                <h2>Be upto date with the current trends in technology</h2>
                <h4>The field of technology is one which keeps changing every minute. There are very many trends in technology today which everyone needs to know</h4>
                <div className="centre">
                    <div className="space">
                        <div style={container}>
                            <Slider/>
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>
    )
}

export default Home