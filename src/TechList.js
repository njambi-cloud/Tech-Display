import React,{useState, useEffect} from "react"
import AddTech from "./AddTech";
import NavBar from "./NavBar";

function TechList () {
  const [technology, setTechnology] = useState([]);
  const [likes, setLikes] = useState(0)
  const [showForm, setShowForm] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)

  function toggleFavorite() {
    setIsFavorite((isFavorite) => !isFavorite)
  }
  let icon=!isFavorite? "https://www.pngall.com/wp-content/uploads/5/Like-Button-PNG-Image-File.png" : "https://i.pinimg.com/originals/96/a2/71/96a27139e8352b383677452d7dd6edd2.jpg"

  function handleClickLike (e) {
    setLikes((prevLikes) => prevLikes + 1)
  }

  function handleShowForm () {
    setShowForm((showForm => !showForm))
  }

  function onAdd(newTechnology) {
    setTechnology({...technology, newTechnology})
  }

 useEffect(() => {
  fetch ("http://localhost:3000/techology")
    .then((r) => r.json())
    .then((technology) => setTechnology(technology))
}, [])

    const techList = technology.map((item) => {
        return(
            <div key={item.id} className="trending">
             <div className="trends"> 
              <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
              <img src={item.image} alt="Tech Display Photos"/>
              </div>
              <div key ={item.id} onClick={handleClickLike} className="image"><img src={icon} alt="Icon" onClick={toggleFavorite}/></div>
              <h5>{likes} Likes</h5>
            </div>
        )
    })
    return (
        <div className="trendlist">
         <div className="nav-container">
          <div className="nav">
          <NavBar/>
            </div>
         </div>
          <h1>Trends in Technology</h1>
          <button className="add-trend" onClick={handleShowForm}>{showForm ? "Add Trend" : "Hide Form"}</button>
            {!showForm ? <AddTech onaddTech={onAdd}/> : showForm}
            {techList}
            
        </div>
    )
}
export default TechList