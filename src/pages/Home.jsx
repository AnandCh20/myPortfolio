import React from 'react';

import NavBar from '../components/NavBar';

export default function Home() {


    return (
        <div>
            <NavBar />

            <div style={{
                margin:"1rem"
            }}>
                <h1>About me</h1>
                <p>
                    Dynamic and motivated Web Developer with over a year of experience building solid and scalable online applications. Proficient in both front-end and back-end technologies, with a solid knowledge of React frameworks and libraries. I want to use my talents and expertise to contribute to innovative initiatives in a collaborative team setting.
                    I hold a Bachelor's degree in Electrical from Career Point University, Kota, and I am proficient in Python programming language. I am passionate about staying updated with the latest industry trends and integrating emerging technologies to create innovative and adaptive solutions. My goal is to leverage my coding expertise and teaching skills to contribute to the IT sector and empower the next generation of coders.
                </p>
            </div>

            <section style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px", // Adjust the gap between columns and rows as needed
                padding: "20px",
                borderRadius: "1rem",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow
            }}>
                <div className="card" style={{
                    height: "200px",
                    padding: "20px",
                    borderRadius: "1rem",
                    background: "#212529", // Dark background color
                    color: "#ffffff", // Text color
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Box shadow
                }}>
                    <h2>Web Design</h2>
                    <p>
                        Creating visually appealing and user-friendly web designs to enhance user experience.
                    </p>
                </div>

                <div className="card" style={{
                    height: "200px",
                    padding: "20px",
                    borderRadius: "1rem",
                    background: "#212529", // Dark background color
                    color: "#ffffff", // Text color
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Box shadow
                }}>
                    <h2>Web Development</h2>
                    <p>
                        Building robust and scalable web applications using modern web technologies.
                    </p>
                </div>

                <div className="card" style={{
                    height: "200px",
                    padding: "20px",
                    borderRadius: "1rem",
                    background: "#212529", // Dark background color
                    color: "#ffffff", // Text color
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Box shadow
                }}>
                    <h2>Application Development</h2>
                    <p>
                        Developing efficient and user-friendly mobile and desktop applications.
                    </p>
                </div>
            </section>
        </div>
    );
}
