import React from "react";
import './SideBar.css';

export default function SideBar() {
    return (
            <div className="sideBar">
                <div className="sideImg">
                    <img
                        src="MY.png"
                        alt="AC"
                        className="img-thumbnail rounded-circle"
                        width={"200px"}
                    />
                    <h4>Anand Chaurasia</h4>
                    <p>Web Developer</p>
                </div>
                <div className="sideContact">
                    <h5>Contact Information</h5>
                    <ul className="list-unstyled">
                        <li>Email: anandchaurasia99@gmail.com</li>
                        <li>Phone: (+91) 7737730345</li>
                        <li>Location: Kota, Rajasthan</li>
                    </ul>
                </div>
                <div className="sideSocial">
                    <h5>Social Media</h5>
                    <ul className="list-unstyled">
                        <li><a href="https://www.linkedin.com/in/anand-chaurasia-30a754120/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/Anandch20" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>
            </div>

    )
}
