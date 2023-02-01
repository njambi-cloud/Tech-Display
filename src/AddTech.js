import React, {useState} from "react"

function AddTech ({onAddTech}) {
    const [formData, setFormData] = useState({
        title: "", description: "", category: "", image: ""

    })

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
      }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/techology", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then ((res) => res.json())
            .then((data) => {
                onAddTech(data)
                setFormData({...formData, title: "", description: "", category: "", image: ""})
            })
    }
    
    return (
        <div>
            <h2>Add a new tech</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className="small-inputs">
                        <input name="title" type="text" value={formData.title} placeholder="Type the title.." onChange={handleChange}/> 
                        <input name="image" type="text" value={formData.image} placeholder="Input image url " onChange={handleChange}/>
                        <input name="category" type="text" value={formData.category} placeholder="Input category " onChange={handleChange}/>
                    </div>
                        
                    <div className="textarea">
                            <textarea name="description" cols="40" rows="8" type="text" value={formData.description} placeholder="Type description..." onChange={handleChange}/><br/>
                     </div>
                </div>
                <button className="submit">Submit</button>
                
            </form>
        </div>
    )
}
export default AddTech