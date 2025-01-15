import React from 'react';
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
                    <li className="nav-item"><a className="nav-link" href="./blog.html" target="_blank">Blog</a></li>
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
                <p className="lead">Passionate Software and Hardware Engineer</p>
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
                    <img src="../public/img/metalbeating.png" alt="Profile Photo" className="img-fluid rounded-circle" />
                </div>
                <div className="col-md-8">
                    <h2>About Me</h2>
                    <p>Computer science engineering student passionate about all levels of the IT stack, with intensive experience
                        developing software, firmware, and embedded systems.
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Internships() {
    return (
        
    );
}

function Projects() {
    return (
        <section class="container mt-5">
            <h2>Internships</h2>
            <div class="card internship-card mt-5">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="../img/splash.svg" class="card-img" alt="Internship Image">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Splash Technologies - Founding Full Stack Engineer</h5>
                            <h4>September 2024 - Present</h4>
                            <button class="btn btn-link" data-toggle="collapse" data-target="#splash">View Details</button>
                            <div id="splash" class="collapse">
                                <p> One of the lead developing founders of a startup dedicated to designing cloud-based pool maintenance solutions. I am currently
                                    working on connecting our pool monitoring and chemical dispensing system to the cloud, where the user can interact with it 
                                    and receieve analytics pertaining to their pool quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card internship-card mt-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="../img/DMV_Logo.png" class="card-img" alt="Internship Image">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">California DMV - Software Engineer Intern</h5>
                            <h4> June 2024 - Present</h4>
                            <button class="btn btn-link" data-toggle="collapse" data-target="#dmv">View Details</button>
                            <div id="dmv" class="collapse">
                                <p>
                                    Developed full-stack automated testing solutions using JUnit, Selenium, and JavaScript, significantly improving the reliability and engineer experience of the DMV's web applications by eliminating legacy script deadlocks, boosting testing efficiency by over 50%.
                                    Collaborated with Agile, cross-functional teams across UI/UX design and DevOps to troubleshoot system performance, enhance backend-to-frontend integration, and improve overall application reliability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card internship-card mt-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="../img/michigan.webp" class="card-img" alt="Internship Image">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">University of Michigan - Computational Materials Researcher</h5>
                            <h4> May 2023 - August 2023</h4>
                            <button class="btn btn-link" data-toggle="collapse" data-target="#umich">View Details</button>
                            <div id="umich" class="collapse">
                                <p>
                                    Performed hands-on and computational research on wide bandgap semiconductors, specifically Gallium Nitride. 
                                    Molecular dynamics sims were done through monte carlo methods, written in C++. Handled scripting with Python and 
                                    handled mathematical calculations with MATLAB.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card internship-card mt-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="../img/MSC-Logo_Rev2a.png" class="card-img" alt="Internship Image">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Matrix Switch Corp - Systems Engineering Intern</h5>
                            <h4> July 2022 - October 2022</h4>
                            <button class="btn btn-link" data-toggle="collapse" data-target="#matrix">View Details</button>
                            <div id="matrix" class="collapse">
                                
                                    Led Python development for configuring the Matrix Switch <a target = "_blank" href = "https://matrixswitchcorp.com/model-msc-utx41l/#tab-id-1">4x1 Crosspoint board</a>, ensuring all configurations were accurately programmed into the system, significantly enhancing the efficiency of hardware testing against known working code.</li>
                                
                            </div>
                        </div>
                    </div>
            </div>
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
