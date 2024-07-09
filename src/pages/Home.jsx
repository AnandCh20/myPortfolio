import React from 'react';

import NavBar from '../components/NavBar';

import './Home.css';

export default function Home() {


    return (
        <div className='mycontainer'>
            <NavBar />
            <div id="aboutme" style={{
                
                margin:"1rem"
            }}>
                <h1>About me</h1>
                <p>
                    Dynamic and motivated Web Developer with over a year of experience building solid and scalable online applications. Proficient in both front-end and back-end technologies, with a solid knowledge of React frameworks and libraries. I want to use my talents and expertise to contribute to innovative initiatives in a collaborative team setting.
                    I hold a Bachelor's degree in Electrical from Career Point University, Kota, and I am proficient in Python programming language. I am passionate about staying updated with the latest industry trends and integrating emerging technologies to create innovative and adaptive solutions. My goal is to leverage my coding expertise and teaching skills to contribute to the IT sector and empower the next generation of coders.
                </p>
            </div>

            <section>
                <div className="cards">
                    <h2>Web Design</h2>
                    <p>
                        Creating visually appealing and user-friendly web designs to enhance user experience.
                    </p>
                </div>

                <div className="cards">
                    <h2>Web Development</h2>
                    <p>
                        Building robust and scalable web applications using modern web technologies.
                    </p>
                </div>

                <div className="cards">
                    <h2>Application Development</h2>
                    <p>
                        Developing efficient and user-friendly mobile and desktop applications.
                    </p>
                </div>

                <div className="cards">
                    <h2>Photography</h2>
                    <p>
                        Developing efficient and user-friendly mobile and desktop applications.
                    </p>
                </div>
            </section>
        </div>
    );
}
