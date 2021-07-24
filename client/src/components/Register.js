import React, { useEffect, useState } from 'react';
import './Register.css'
import Compressor from 'compressorjs'




const Register = () => {

  const [selectedImage, setSelectedImage] = useState("")
  const [info, setInfo] = useState({
    firstname: "",
    email: '',
    password: ''
})




  const handleImageChange = (e) => {
    if (e.target.files.length) {
        const myImage = e.target.files[0]
        new Compressor(myImage, {
            quality: 0.8,
            success(result) {
                const reader = new FileReader()
                reader.readAsDataURL(result)
                reader.onloadend = () => {
                    setSelectedImage(reader.result)
                    setInfo({ image: reader.result })
                }

            }
        })
    }
}
    return (
        <div>
                        
<div className="container" onclick="onclick">
  <div className="top"></div>
  <div className="bottom"></div>
  <div className="center">
    <h2> Register Here </h2>

    {selectedImage && <img name="preview" style={{ height: "120px", width: "80px" }} src={selectedImage || "./images/default.jpg"} alt="preview"></img>}

        <input type="text" placeholder="username"/>
    <input type="email" placeholder="email"/>
    <input type="password" placeholder="password"/>
    <input type="text" placeholder="bio"/>
    <input
                                accept="image/*"
                                className="pic"
                                id="contained-button-file"
                                type="file"
                                onChange={handleImageChange}
                            />  
    <a href="/profile">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button type="submit" className="btn">Submit</button> 
    </a>


    <h2>&nbsp;</h2>
  </div>
</div>

        </div>
    )
}

export default Register
