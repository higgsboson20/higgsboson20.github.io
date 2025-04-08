import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Import images properly
// Note: You'll need to move your images from public/img to src/assets/images
import headshot from './assets/images/headshot.jpg';
import metalbeating from './assets/images/metalbeating.png';
import ucdavisSeal from './assets/images/UCDavisUnofficialSeal_2Color_0.png';
import iotProj from './assets/images/IoTProj.png';
import iotDesignDoc from './assets/images/IoTDesignDoc.png';
import gaussian from './assets/images/gaussian.webp';
import dmvLogo from './assets/images/DMV_Logo.png';
import splashLogo from './assets/images/splash.svg';
import michiganLogo from './assets/images/michigan.webp';
import mscLogo from './assets/images/MSC-Logo_Rev2a.png';

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

// ScrollToTop component to ensure page starts at top when navigating
function ScrollToTop() {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
}

function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'bg-dark shadow-sm scrolled' : 'bg-dark'}`}>
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    <span className="text-primary">Sam</span> Asbell
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="navbarNav" 
                    aria-expanded={expanded} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link mx-2" to="/about" onClick={() => setExpanded(false)}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-2" to="/education" onClick={() => setExpanded(false)}>Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-2" to="/internships" onClick={() => setExpanded(false)}>Internships</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-2" to="/projects" onClick={() => setExpanded(false)}>Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function Home() {
    return (
        <>
            <section className="hero-section d-flex align-items-center text-center text-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="profile-img-container mb-4">
                                <img src={headshot} alt="Profile Photo" className="profile-image" />
                            </div>
                            <h1 className="display-4 fw-bold mb-3 animated-title">Sam Asbell</h1>
                            <p className="lead fs-4 mb-4">Software & Hardware Engineer</p>
                            <hr className="divider mx-auto" />
                            <p className="lead mb-5">Building innovative solutions from code to circuits</p>
                        </div>
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </section>
            
            <section className="skills-section py-5">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-4">
                            <div className="skill-card text-center p-4">
                                <div className="icon-container mb-3">
                                    <i className="bi bi-code-square"></i>
                                </div>
                                <h3>Software Engineering</h3>
                                <p>Experienced in multiple languages and frameworks with a focus on efficient, maintainable code</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="skill-card text-center p-4">
                                <div className="icon-container mb-3">
                                    <i className="bi bi-cpu"></i>
                                </div>
                                <h3>Embedded Systems</h3>
                                <p>Developing firmware and hardware solutions for IoT and real-time applications</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="skill-card text-center p-4">
                                <div className="icon-container mb-3">
                                    <i className="bi bi-gear"></i>
                                </div>
                                <h3>Problem Solving</h3>
                                <p>Committed to finding optimal solutions to complex technical challenges</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function About() {
    return (
        <section className="about-section py-5 mt-5">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h2>About Me</h2>
                    <div className="underline mx-auto"></div>
                </div>
                
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <div className="about-image-container">
                            <img src={metalbeating} alt="Profile" className="about-image img-fluid rounded" />
                            <div className="experience-badge">
                                <span className="number">2+</span>
                                <span className="text">Years Experience</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-content">
                            <p className="lead">
                                Computer science engineering student passionate about all levels of the IT stack, with intensive experience in software, firmware, and embedded systems.
                            </p>
                            <p>
                                I love the dynamic nature of software engineering—every project brings new challenges and opportunities to learn. My expertise spans modeling and visualizing complex systems in fields such as materials science, robotics, and gaming, paired with a deep understanding of the underlying technologies.
                            </p>
                            <p>
                                I'm a quick learner, a collaborative team player, and a problem solver dedicated to finding optimal solutions.
                            </p>
                            
                            <div className="interests mt-4">
                                <h4>When I'm not coding, I enjoy:</h4>
                                <div className="interests-items">
                                    <span className="interest-tag">Blacksmithing</span>
                                    <span className="interest-tag">Working on Cars</span>
                                    <span className="interest-tag">Backpacking</span>
                                    <span className="interest-tag">Biking</span>
                                    <span className="interest-tag">Grilling</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Education() {
    return (
        <section className="education-section py-5 mt-5">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h2>Education</h2>
                    <div className="underline mx-auto"></div>
                </div>
                
                <div className="education-card">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-4">
                            <div className="text-center p-4">
                                <img src={ucdavisSeal} className="education-logo img-fluid" alt="UC Davis Logo" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="education-content p-4">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h3 className="university-name">University of California, Davis</h3>
                                    <span className="education-date">2023 - 2025</span>
                                </div>
                                <h4 className="degree-name">Bachelor's in Computer Science</h4>
                                <div className="role-badge mb-3">
                                    Founding Software Lead @ <a href="https://cyclone-robosub.github.io" target="_blank" rel="noopener noreferrer">Cyclone Robosub</a>
                                </div>
                                
                                <h5 className="courses-title">Relevant Coursework</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="courses-list">
                                            <li>Object Oriented Programming (C++/Java)</li>
                                            <li>Data Structures & Algorithms (Python)</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="courses-list">
                                            <li>Operating Systems, Embedded Systems, Computer Networks</li>
                                            <li>Graduate and Undergraduate Computer Architecture</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const ExperienceCard = ({ imgSrc, title, company, date, description, skills = [] }) => {
    return (
        <div className="experience-card mb-4">
            <div className="card-header d-flex align-items-center">
                <div className="company-logo">
                    <img src={imgSrc} alt={company} className="img-fluid" />
                </div>
                <div className="ms-3">
                    <h4 className="position-title mb-0">{title}</h4>
                    <div className="company-name">{company}</div>
                    <div className="experience-date">{date}</div>
                </div>
            </div>
            <div className="card-body">
                <p className="description">{description}</p>
                {skills.length > 0 && (
                    <div className="skills-used">
                        {skills.map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function Internships() {
    return (
        <section className="internships-section py-5 mt-5">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h2>Professional Experience</h2>
                    <div className="underline mx-auto"></div>
                </div>
                
                <div className="timeline">
                    <ExperienceCard 
                        imgSrc={dmvLogo}
                        title="Software Engineer Intern"
                        company="California DMV"
                        date="June 2024 - Present"
                        description="Developed full-stack automated testing solutions using JUnit, Selenium, and JavaScript, improving application reliability by over 50%. Collaborated with Agile, cross-functional teams to enhance system performance and integration."
                        skills={["JUnit", "Selenium", "JavaScript", "Agile", "Full Stack"]}
                    />
                    
                    <ExperienceCard 
                        imgSrc={splashLogo}
                        title="Founding Software Development Intern"
                        company="Splash Technologies"
                        date="September 2024 - December 2024"
                        description="As a lead developing founder, I contributed to designing a cloud-based pool maintenance solution, connecting hardware with a user-friendly interface and robust analytics."
                        skills={["Cloud Development", "IoT", "System Design", "Analytics"]}
                    />
                    
                    <ExperienceCard 
                        imgSrc={michiganLogo}
                        title="Computational Materials Researcher"
                        company="University of Michigan ECE"
                        date="May 2023 - August 2023"
                        description="Conducted hands-on and computational research on wide bandgap semiconductors, specifically Gallium Nitride, using C++, Python, and MATLAB for simulations and data analysis."
                        skills={["C++", "Python", "MATLAB", "Research", "Data Analysis"]}
                    />
                    
                    <ExperienceCard 
                        imgSrc={mscLogo}
                        title="Embedded Software Engineering Intern"
                        company="Matrix Switch Corp"
                        date="July 2022 - October 2022"
                        description="Led Python development for configuring a 4x1 Crosspoint board, enhancing hardware testing efficiency by ensuring accurate configurations and streamlining the testing process."
                        skills={["Python", "Embedded Systems", "Hardware Testing"]}
                    />
                </div>
            </div>
        </section>
    );
}

const ProjectCard = ({ imgSrc, title, date, description, link = null, isFeatured = false, techStack = [] }) => {
    const [hovered, setHovered] = useState(false);
    
    return (
        <div 
            className={`project-card ${isFeatured ? 'featured' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="project-image">
                <img src={imgSrc} alt={title} className="img-fluid" />
                <div className={`project-overlay ${hovered ? 'hovered' : ''}`}>
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                            <i className="bi bi-link-45deg"></i> View Project
                        </a>
                    )}
                </div>
            </div>
            <div className="project-content">
                <div className="project-tags">
                    {techStack.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
                <h3 className="project-title">{title}</h3>
                <div className="project-date">{date}</div>
                <p className="project-description">{description}</p>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <section className="projects-section py-5 mt-5">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h2>Projects</h2>
                    <div className="underline mx-auto"></div>
                </div>
                
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="project-card featured h-100">
                            <div className="project-image">
                                <img src={iotProj} alt="IoT Smart Home Device" className="img-fluid" />
                            </div>
                            <div className="project-content">
                                <div className="project-tags">
                                    {["C", "Embedded Systems", "AWS", "IoT"].map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <h3 className="project-title">IoT Smart Home Device</h3>
                                <div className="project-date">June 2024</div>
                                <p className="project-description">
                                    Designed and implemented C-based firmware on the TI CC3200 embedded board, utilizing I2C and SPI drivers to interface with sensors for real-time data collection. Integrated AWS services for voice commands.
                                </p>
                                
                                <div className="design-doc-container mt-3">
                                    <h6 className="design-doc-title">Backend Design Document</h6>
                                    <img src={iotDesignDoc} alt="IoT Design Document" className="img-fluid design-doc-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="project-card h-100">
                            <div className="project-image">
                                <img src={gaussian} alt="Gaussian Blur with CUDA" className="img-fluid" />
                                <div className="project-overlay">
                                    <a href="https://github.com/higgsboson20/CUDA_Gaussian_Blur" target="_blank" rel="noopener noreferrer" className="project-link">
                                        <i className="bi bi-link-45deg"></i> View Project
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-tags">
                                    {["CUDA", "C++", "Parallel Computing", "Image Processing"].map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <h3 className="project-title">Gaussian Blur with CUDA</h3>
                                <div className="project-date">May 2024</div>
                                <p className="project-description">
                                    Developed a GPU-accelerated image processing pipeline using CUDA, implementing parallel algorithms for edge detection and filtering. The solution dramatically improved processing speed for high-resolution images.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <h4>Sam Asbell</h4>
                        <p>Software & Hardware Engineer</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="social-icons">
                            <a href="https://linkedin.com/in/sam-asbell-873757163/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://github.com/higgsboson20" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="mailto:stasbell@ucdavis.edu">
                                <i className="bi bi-envelope"></i>
                            </a>
                        </div>
                        <p className="copyright">&copy; 2024 Sam Asbell. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default App;