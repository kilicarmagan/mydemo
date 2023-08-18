import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Frankfurt 60598</p>
                            <p>Germany</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                        <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        +90 5551566176
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        contact@armagankilic.com
                        </h4>
                    </div>
                </div>
                
                <div className="right">
                    <h4>Armagan Kilic - IT Consulting</h4>
                    <div className="social">
                        <Link to="https://www.linkedin.com/in/kilicarmagan/">
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </Link>
                    <Link to="https://github.com/kilicarmagan/">
                    <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </Link>

                    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer