import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from "../assets/pexels-lukas-574069.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER</p>
            <h1>M365 Consultant</h1>
            <div>
                <Link to="/service" className="btn">Services</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg