import React from 'react';
import NavBar from '../components/NavBar';

const ContactCard = () => {
    return (
        <div>
            <NavBar />
            <div className="card" style={{
                // height: "200px",
                padding: "20px",
                margin: "1rem",
                borderRadius: "1rem",
                background: "#212529", // Dark background color
                color: "#ffffff", // Text color
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Box shadow
            }}>

                <div className="card shadow-lg rounded-3 bg-dark text-white my-2 py-4 px-4">
                    <h1 className="display-2 fw-bold text-center text-white mb-2 bg-dark ">Contact</h1>
                    <form>
                        <div className="mb-1 bg-dark">
                            <label htmlFor="name" className="form-label bg-dark">Name:</label>
                            <input type="text" className="form-control bg-dark text-white" id="name" name="name" required />
                        </div>
                        <div className="mb-1 bg-dark">
                            <label htmlFor="email" className="form-label bg-dark">Email:</label>
                            <input type="email" className="form-control bg-dark text-white" id="email" name="email" required />
                        </div>
                        <div className="mb-1 bg-dark">
                            <label htmlFor="message" className="form-label bg-dark">Message:</label>
                            <textarea className="form-control bg-dark text-white" id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default ContactCard;
