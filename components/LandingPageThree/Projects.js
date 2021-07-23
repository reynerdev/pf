import React from 'react';
import Link from 'next/link';

const Projects = () => {
    return (
        <div id="portfolio" className="projects-area border-bottom-two ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">PROJECTS</span>
                    <h2>Here Are Some Projects Which Gain A Great Success</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-7">
                        <div className="projects-item">
                            <img src="/images/projects/project1.jpg" alt="Projects" />
                            <div className="inner">
                                <div className="inner">
                                    <h3>
                                        <Link href="/work-details">
                                            <a target="_blank">Furniture Website</a>
                                        </Link>
                                    </h3>
                                    <span>Logo</span>
                                </div>
                            </div>
                        </div>

                        <div className="projects-item">
                            <img src="/images/projects/project2.jpg" alt="Projects" />
                            <div className="inner">
                                <div className="inner">
                                    <h3>
                                        <Link href="/work-details">
                                            <a target="_blank">Travel App Logo Design</a>
                                        </Link>
                                    </h3>
                                    <span>App</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-5">
                        <div className="projects-item two">
                            <img src="/images/projects/project3.jpg" alt="Projects" />
                            <div className="inner">
                                <div className="inner">
                                    <h3>
                                        <Link href="/work-details">
                                            <a target="_blank">ERP Design</a>
                                        </Link>
                                    </h3>
                                    <span>Design</span>
                                </div>
                            </div>
                        </div>

                        <div className="projects-item two">
                            <img src="/images/projects/project4.jpg" alt="Projects" />
                            <div className="inner">
                                <div className="inner">
                                    <h3>
                                        <Link href="/work-details">
                                            <a target="_blank">Restaurant Design</a>
                                        </Link>
                                    </h3>
                                    <span>Restaurant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/works">
                        <a className="common-btn three" target="_blank">Explore Projects</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Projects;