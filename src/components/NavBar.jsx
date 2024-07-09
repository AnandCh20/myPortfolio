import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const goToHome = () => {
        closeMenu();
        navigate('/');
    };

    const goToProjects = () => {
        closeMenu();
        navigate('/projects');
    };

    const goToContact = () => {
        closeMenu();
        navigate('/contact');
    };

    return (
        <div>
            <header style={{ borderRadius: "1rem", padding: "20px", background: "#343a40", color: "#ffffff", width:"70vw" }}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                    <div className="container-fluid justify-content-end">
                        <button
                            className="navbar-toggler"
                            type="button"
                            aria-controls="navbarSupportedContent"
                            aria-expanded={isMenuOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                            onClick={toggleMenu}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                            <div className="navbar-nav">
                                <NavLink className="nav-link" exact to="/" onClick={goToHome}>Home</NavLink>
                                <NavLink className="nav-link" to="/projects" onClick={goToProjects}>Projects</NavLink>
                                <NavLink className="nav-link" to="/contact" onClick={goToContact}>Contact</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default NavBar;
