import React from 'react';
import { useState } from 'react';
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <Link className="navbar-brand ml-2" to="/">Sam Asbell</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/education">Education</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/internships">Internships</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                </ul>
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
        <section className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <img src="../img/metalbeating.png" alt="Profile Photo" className="img-fluid rounded-circle" />
                </div>
                <div className="col-md-8">
                    <h2>About Me</h2>
                    <p>Computer science engineering student passionate about all levels of the IT stack, with intensive experience
                        developing software, firmware, and embedded systems.
                    </p>
                    <p>
                        I find particular interest in software engineering due to the amount of new stuff I learn during every
                        project and the fact that I can see the results of my work in real-time. My particular fields of interest in 
                        software center around modelling and visualizing systems in fields such as materials science, robotics, and
                        games. I am highly competent in most common languages, and have an in-depth, intuitive understanding of what goes on
                        beneath the hood. With this, I have experience with embedded systems, IoT, and digital circuit design.
                    </p>
                    <p>
                        If you are to take me on as an engineer for your team, you will find that I am a quick learner, a team player who understands cross-functionality principles, 
                        and someone who is committed to finding the most optimal solution to any hard problem I encounter.
                    </p>
                    <p>
                        When all is done, I enjoy blacksmithing, working on cars, backpacking, biking, and grilling.
                    </p>
                </div>
            </div>
        </section>
    );
}

function Education() {
    return (
        <section className="container my-5">
            <h2>Education</h2>
            <div className="card my-5">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="../img/UCDavisUnofficialSeal_2Color_0.png" className="img-fluid rounded-circle" alt="UC Davis Logo" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">UC Davis</h3>
                            <p>Bachelor's in Computer Science (2023 - 2025)</p>
                            <p>Founding Software Lead @ <a href="https://cyclone-robosub.github.io" target="_blank" rel="noopener noreferrer">Cyclone Robosub</a></p>
                            <label>Relevant Courses</label>
                            <div id="courses">
                                <ul>
                                    <li>Object Oriented Programming (C++/Java)</li>
                                    <li>Data Structures & Algorithms (Python)</li>
                                    <li>Operating Systems, Embedded Systems, Computer Networks</li>
                                    <li>Graduate and undergraduate computer architecture </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Card = ({ imgSrc, title, date, detailsId, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="card internship-card mt-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={imgSrc} className="card-img" alt="Image" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h4>{date}</h4>
                        <button className="btn btn-link" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? 'Hide Details' : 'View Details'}
                        </button>
                        {isOpen && <div id={detailsId}>{children}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

// https://github.com/higgsboson20/CUDA_Gaussian_Blur
function Projects() {
    return (
        <section className="container mt-5">
            <h2>Projects</h2>
            <Card
                imgSrc="../img/IoTProj.png"
                title="IoT Smart Home Device"
                date="June 2024"
                detailsId="eec172"
            >
                <p>
                Designed and implemented C-based firmware on the TI CC3200 embedded board, utilizing I2C and SPI drivers to interface with
                temperature and proximity sensors for real-time data collection. Utilized AWS Transcribe for voice transcription and AWS Lambda for automating actions 
                based on voice commands, enabling a seamless interaction between the user and the smart hub.
                </p>
                <label> Backend Design Document </label>
                <img src="../img/IoTDesignDoc.png" alt="IoT Project Design Doc" className="img-fluid" />
            </Card>
            <Card
                imgSrc="../img/gaussian.webp"
                title="Gaussian Blur Function Implemented in CUDA"
                date="May 2024"
                detailsId="ecs158"
            >
                <p>
                Developed a GPU-accelerated image processing pipeline using CUDA, implementing parallel algorithms for tasks like edge detection
                and filtering, significantly improving processing speed relative to serial. Can be efficiently used to blur images of very large 
                resolutions. <a href = "https://github.com/higgsboson20/CUDA_Gaussian_Blur" target="_blank">Link to code.</a>
                </p>
            </Card>
        </section>
    );
}

function Internships() {
    return (
        <section className="container mt-5">
            <h2>Internships</h2>
            <Card
                imgSrc="../img/DMV_Logo.png"
                title="California DMV - Software Engineer Intern"
                date="June 2024 - Present"
                detailsId="dmv"
            >
                <p>
                    Developed full-stack automated testing solutions using JUnit, Selenium, and JavaScript, significantly improving the reliability and engineer experience of the DMV's web applications by eliminating legacy script deadlocks, boosting testing efficiency by over 50%.
                    Collaborated with Agile, cross-functional teams across UI/UX design and DevOps to troubleshoot system performance, enhance backend-to-frontend integration, and improve overall application reliability.
                </p>
            </Card>
            <Card
                imgSrc="../img/splash.svg"
                title="Splash Technologies - Founding Full Stack Engineer"
                date="September 2024 - December 2024"
                detailsId="splash"
            >
                <p>
                    One of the lead developing founders of a startup dedicated to designing cloud-based pool maintenance solutions. I worked
                    on connecting our pool monitoring and chemical dispensing system to the cloud, where the user can interact with it 
                    and receive analytics pertaining to their pool quality. Alongside, I contributed to the systems design of their 
                    hardware-database interface.
                </p>
            </Card>
            <Card
                imgSrc="../img/michigan.webp"
                title="University of Michigan - Computational Materials Researcher"
                date="May 2023 - August 2023"
                detailsId="umich"
            >
                <p>
                    Performed hands-on and computational research on wide bandgap semiconductors, specifically Gallium Nitride. 
                    Molecular dynamics sims were done through monte carlo methods, written in C++. Handled scripting with Python and 
                    handled mathematical calculations with MATLAB.
                </p>
            </Card>
            <Card
                imgSrc="../img/MSC-Logo_Rev2a.png"
                title="Matrix Switch Corp - Systems Engineering Intern"
                date="July 2022 - October 2022"
                detailsId="matrix"
            >
                <p>
                    Led Python development for configuring the Matrix Switch 4x1 Crosspoint board (4 analog inputs, 1 analog output) for testing, 
                    ensuring all configurations were accurately programmed into the system, significantly enhancing the efficiency of hardware testing against known working code.
                </p>
            </Card>
        </section>
    );
}

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <p>&copy; 2024 Sam Asbell</p>
        </footer>
    );
}

export default App;
// <a target="_blank" href="https://matrixswitchcorp.com/model-msc-utx41l/#tab-id-1">