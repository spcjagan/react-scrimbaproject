import React from "react";
import  ReactDOM  from "react";
import Image from "../images/image.png"
import Email from "../images/Email-icon.png"
import LinkedIn from "../images/LinkedIn-icon.png"

export default function Info(){
    return(
        <section className="info-container">
          <img src ={Image} className="info-image" alt ="This is an image of an employee" />
          <h1 className="info-heading">Laura Smith</h1>
          <p className="info-paragraph">Frontend Developer</p>
          <small>laurasmith.website</small><br/>
          <div className="info-buttons">
           <button type= "button" className="info-button1" ><img src={Email} />Email</button>
           <button type= "button" className="info-button2" ><img src={LinkedIn}/>LinkedIn</button>
          </div>
        </section>
        
    )
}