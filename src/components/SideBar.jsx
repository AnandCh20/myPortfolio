import React from "react";
import { NavLink } from 'react-router-dom';

export default function SideBar() {
    return (
        <div>
            <div className="d-flex flex-column bg-dark text-white p-3 rounded-3 m-2"style={{ minWidth: '250px', maxWidth: '20vw' }}>
                <div className="text-center mb-4 =" style={{width:'15vw'}}>
                    <img
                        src="src\MY.png"
                        alt="AC"
                        className="img-thumbnail rounded-circle"
                    />
                    <h4 className="mt-2">Anand Chaurasia</h4>
                    <p className="text-muted">Web Developer</p>
                </div>
                <div className="mt-4">
                    <h5>Contact Information</h5>
                    <ul className="list-unstyled">
                        <li>Email: anandchaurasia99@gmail.com</li>
                        <li>Phone: (+91) 7737730345</li>
                        <li>Location: Kota, Rajasthan</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h5>Social Media</h5>
                    <ul className="list-unstyled">
                        <li><a href="https://www.linkedin.com/in/anand-chaurasia-30a754120/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/Anandch20" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}