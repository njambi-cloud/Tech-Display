import React, {useState} from "react"

function Slider () {
    const [currentIndex, setCurrentIndex] = useState(0)

    const slides=[
        {url: "https://blogs.iadb.org/integration-trade/wp-content/uploads/sites/13/2021/12/Telemedicina_Blog_BLOG_HEADER.png", title: "Telemedicine"},
        {url: "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/transportation-technology-pillar-page-overview_0.jpeg", title: "Transport"},
        {url: "https://www.asme.org/getmedia/fc2f6d70-790d-42e0-b228-c2955ec9331a/062221_navysetssail_header02.jpg?width=970&height=720&ext=.jpg", title: "Mechanical Engineering"},
        {url: "https://www.analyticsinsight.net/wp-content/uploads/2021/12/The-Future-of-Robotics-Its-Implications-in-2021-and-Beyond.jpg", title: "Robotics"},
        {url: "https://www.kaspersky.com/content/en-global/images/repository/isc/2017-images/What-is-Cyber-Security.jpg", title: "Cybersecurity"},
        {url: "https://kenyanwallstreet.com/wp-content/uploads/2022/03/Blockchain.jpeg", title: "Blockchain"},
        {url: "https://letstalkscience.ca/sites/default/files/styles/width_800px/public/2021-12/gps_on_phone.jpg?itok=oCW2o0MN", title: "GPS"},
        {url: "http://ecotechschool.com/wp-content/uploads/2022/04/10081_00_N57_web.jpg", title: "Surgical"},
        {url: "https://d1jbg4la8qhw2x.cloudfront.net/wp-content/uploads/2020/02/Skills.-ICT.-IOT..jpg", title: "Communication"}
    ]

    const sliderStyles={
        height: "100%",
        position: "relative"
    }

    const slideStyles={
        width: "100%",
        height: "80%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const rightArrow ={
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50)",
        right: "50px",
        fontSize: "34px",
        color: "white",
        zIndex: 1,
        cursor: "pointer",
        background: "black",
        width: "90px",
        borderRadius: "10px"

    }

    const leftArrow ={
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50)",
        left: "50px",
        fontSize: "34px",
        color: "white",
        zIndex: 1,
        cursor: "pointer",
        background: "black",
        width: "90px",
        borderRadius: "10px"

    }

    const dotsContainer ={
        display: "flex",
        justifyContent: "center"
    }

    const dotStyles = {
        margin: "0 3px",
        marginBottom: "40px",
        marginTop: "0px",
        cursor: "pointer",
        fontSize: "75px",
        color: "blue"
    }

    function previous(){
        const isFirstSlide = currentIndex=== 0;
        const newIndex=isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    function next(){
        const isLastSlide = currentIndex=== slides.length - 1;
        const newIndex=isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    function goToSlide (index) {
        setCurrentIndex(index)
    }

    return (
        <div style={sliderStyles}>
            <div className="left" style={leftArrow} onClick={previous}>Prev</div>
            <div className="right" style={rightArrow} onClick={next}>Next</div>
            <div style={slideStyles}></div>
            <div style={dotsContainer}>
                {slides.map((slide, index) => (
                        <div className="dots" key={index} style={dotStyles} onClick={() => goToSlide(index)}>.</div>
                    ))} 
            </div>
        </div>
    )
}
export default Slider