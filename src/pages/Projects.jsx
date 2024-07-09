import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const ProjectCard = () => {
    const [activeIndex, setActiveIndex] = useState(null); // State to manage active accordion item

    // Function to handle accordion item toggle
    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <NavBar />
            <div className="card" style={{
                margin:"1rem",
                padding: "20px",
                borderRadius: "1rem",
                background: "#212529",
                color: "#ffffff",
                boxShadow: "0 2px 4px rgb(255, 255, 255)",
            }}>
                <h2>My Projects</h2>

                <div className="accordion m-4" id="accordionExample">
                    {/* Project 1 */}
                    <div className="accordion-item bg-dark text-white">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className={`accordion-button ${activeIndex === 0 ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => handleToggle(0)}
                                aria-expanded={activeIndex === 0}
                                aria-controls="collapseOne"
                            >
                                E-Commerce Website
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className={`accordion-collapse collapse ${activeIndex === 0 ? 'show' : ''}`}
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <h5 className="fw-bold text-white mb-2">About</h5>
                                This project is a simple e-commerce website built using HTML, CSS, and JavaScript.
                                <p><a className="link-opacity-25-hover" href="https://your-e-commerce-website-url.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>🔗 Visit Website</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="accordion-item bg-dark text-white">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className={`accordion-button ${activeIndex === 1 ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => handleToggle(1)}
                                aria-expanded={activeIndex === 1}
                                aria-controls="collapseTwo"
                            >
                                KwikNotes
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className={`accordion-collapse collapse ${activeIndex === 1 ? 'show' : ''}`}
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <h5 className="fw-bold text-white mb-2">About</h5>
                                A website for the computer department Students.
                                <p><a className="link-opacity-25-hover" href="https://kwiknotes-website-url.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>🔗 Visit Website</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="accordion-item bg-dark text-white">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className={`accordion-button ${activeIndex === 2 ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => handleToggle(2)}
                                aria-expanded={activeIndex === 2}
                                aria-controls="collapseThree"
                            >
                                Product Management System
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className={`accordion-collapse collapse ${activeIndex === 2 ? 'show' : ''}`}
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <h5 className="fw-bold text-white mb-2">About</h5>
                                A product management system with CRUD operations.
                                <p><a className="link-opacity-25-hover" href="https://product-management-url.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>🔗 Visit Website</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
