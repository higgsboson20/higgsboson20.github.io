import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Navigation />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/internships" element={<Internships />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
            <div className="container">
                <Link className="navbar-brand ms-2" to="/">Sam Asbell</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/education">Education</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/internships">Internships</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function Home() {
    return (
        <section className="jumbotron text-center">
            <div className="container">
                <img src="../img/headshot.jpg" alt="Profile Photo" className="fixed-circle-image mb-4" width="150" />
                <h1 className="display-4">Sam Asbell</h1>
                <p className="lead">Software and Hardware Engineer</p>
                <a href="https://linkedin.com/in/sam-asbell-873757163/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:stasbell@ucdavis.edu" className="btn btn-secondary">Contact Me</a>
                <a href="https://github.com/higgsboson20" className="btn btn-dark" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </section>
    );
}

function About() {
    return (
        <section className="container my-5 modern-section">
            <div className="row align-items-center">
                <div className="col-md-4 text-center">
                    <img src="../img/metalbeating.png" alt="Profile" className="img-fluid rounded-circle mb-3" />
                </div>
                <div className="col-md-8">
                    <h2>About Me</h2>
                    <p>
                        Computer science engineering student passionate about all levels of the IT stack, with intensive experience in software, firmware, and embedded systems.
                    </p>
                    <p>
                        I love the dynamic nature of software engineering—every project brings new challenges and opportunities to learn. My expertise spans modeling and visualizing complex systems in fields such as materials science, robotics, and gaming, paired with a deep understanding of the underlying technologies.
                    </p>
                    <p>
                        I’m a quick learner, a collaborative team player, and a problem solver dedicated to finding optimal solutions. When I'm not coding, I enjoy blacksmithing, working on cars, backpacking, biking, and grilling.
                    </p>
                </div>
            </div>
        </section>
    );
}

function Education() {
    return (
        <section className="container my-5 modern-section">
            <h2>Education</h2>
            <div className="card modern-card my-5">
                <div className="row g-0">
                    <div className="col-md-4 text-center">
                        <img src="../img/UCDavisUnofficialSeal_2Color_0.png" className="img-fluid rounded-circle p-3" alt="UC Davis Logo" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">UC Davis</h3>
                            <p>Bachelor's in Computer Science (2023 - 2025)</p>
                            <p>Founding Software Lead at <a href="https://cyclone-robosub.github.io" target="_blank" rel="noopener noreferrer">Cyclone Robosub</a></p>
                            <h5>Relevant Courses</h5>
                            <ul>
                                <li>Object Oriented Programming (C++/Java)</li>
                                <li>Data Structures & Algorithms (Python)</li>
                                <li>Operating Systems, Embedded Systems, Computer Networks</li>
                                <li>Graduate and Undergraduate Computer Architecture</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Card = ({ imgSrc, title, date, detailsId, children }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="flip-card card modern-card internship-card mt-4 h-100"
            onClick={() => setFlipped(!flipped)}
        >
            {/* Inner container handles the 3D flip */}
            <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
                {/* FRONT FACE */}
                <div className="flip-card-front h-100 w-100">
                    <div className="row g-0 h-100">
                        <div className="col-md-4">
                            <div className="card-img-container">
                                <img src={imgSrc} className="card-img" alt={title} />
                            </div>
                        </div>
                        <div className="col-md-8 d-flex flex-column">
                            <div className="card-body flex-grow-1">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-date text-muted">{date}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BACK FACE */}
                <div className="flip-card-back h-100 w-100">
                    <div className="row g-0 h-100">
                        <div className="col-12 d-flex flex-column">
                            <div className="card-body flex-grow-1">
                                <h5 className="card-title">Description</h5>
                                <div id={detailsId} className="card-details flex-grow-1">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



function Projects() {
    return (
        <section className="container my-5 modern-section">
            <h2>Projects</h2>
            <Card
                imgSrc="../img/IoTProj.png"
                title="IoT Smart Home Device"
                date="June 2024"
                detailsId="iot-project"
            >
                <p>
                    Designed and implemented C-based firmware on the TI CC3200 embedded board, utilizing I2C and SPI drivers to interface with temperature and proximity sensors for real-time data collection. Integrated AWS Transcribe for voice transcription and AWS Lambda for automated responses, delivering a seamless smart home experience.
                </p>
                <h6>Backend Design Document</h6>
                <img src="../img/IoTDesignDoc.png" alt="IoT Design Document" className="img-fluid my-2" />
            </Card>
            <Card
                imgSrc="../img/gaussian.webp"
                title="Gaussian Blur with CUDA"
                date="May 2024"
                detailsId="gaussian-blur"
            >
                <p>
                    Developed a GPU-accelerated image processing pipeline using CUDA, implementing parallel algorithms for edge detection and filtering. The solution dramatically improved processing speed, making it effective for high-resolution image manipulation.
                    <a href="https://github.com/higgsboson20/CUDA_Gaussian_Blur" target="_blank" rel="noopener noreferrer">View Code</a>
                </p>
            </Card>
        </section>
    );
}

function Internships() {
    return (
        <section className="container my-5 modern-section">
            <h2>Internships</h2>
            <div className="row g-4">
                <div className="col-md-6">
                    <Card
                        imgSrc="../img/DMV_Logo.png"
                        title="Department of Motor Vehicles - Software Engineer Intern"
                        date="June 2024 - Present"
                        detailsId="dmv"
                    >
                        <p>
                            Developed full-stack automated testing solutions using JUnit, Selenium, and JavaScript, improving application reliability by over 50%. Collaborated with Agile, cross-functional teams to enhance system performance and integration.
                        </p>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card
                        imgSrc="../img/splash.svg"
                        title="Splash Technologies - Founding Software Development Intern"
                        date="September 2024 - December 2024"
                        detailsId="splash"
                    >
                        <p>
                            As a lead developing founder, I contributed to designing a cloud-based pool maintenance solution, connecting hardware with a user-friendly interface and robust analytics.
                        </p>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card
                        imgSrc="../img/michigan.webp"
                        title="University of Michigan ECE - Computational Materials Researcher"
                        date="May 2023 - August 2023"
                        detailsId="umich"
                    >
                        <p>
                            Conducted hands-on and computational research on wide bandgap semiconductors, specifically Gallium Nitride, using C++, Python, and MATLAB for simulations and data analysis.
                        </p>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card
                        imgSrc="../img/MSC-Logo_Rev2a.png"
                        title="Matrix Switch Corp - Embedded Software Engineering Intern"
                        date="July 2022 - October 2022"
                        detailsId="matrix"
                    >
                        <p>
                            Led Python development for configuring a 4x1 Crosspoint board, enhancing hardware testing efficiency by ensuring accurate configurations and streamlining the testing process.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p className="mb-0">&copy; 2024 Sam Asbell. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default App;
