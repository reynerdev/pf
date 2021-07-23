import React from 'react';
import Link from 'next/link';

const CaseStudy = () => {
    return (
        <div id="portfolio" className="case-study-area two pb-100">
            <div className="container">
                <div className="section-title five">
                    <h2>Some In Depth <span>Case Study</span> Of My Successful Project</h2>
                </div> 

                <div className="row align-items-center">
                    <div className="col-sm-6 col-lg-7">
                        <div className="case-study-img">
                            <div className="overlay">
                                <img src="/images/case-study/case-study1.jpg" alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a>Furniture Website</a>
                                        </Link>
                                    </h3>
                                    <span>Logo</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-5">
                        <div className="case-study-content">
                            <h3>
                                <Link href="/case-study-details">
                                    <a>Furniture Website Logo Design</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu</p>

                            <Link href="/case-study-details">
                                <a className="case-study-btn">
                                    Explore More <i className="flaticon-right-arrow"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-5">
                        <div className="case-study-content">
                            <h3>
                                <Link href="/case-study-details">
                                    <a>ERP Software Logo</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu</p>
                            
                            <Link href="/case-study-details">
                                <a className="case-study-btn">
                                    Explore More <i className="flaticon-right-arrow"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-7">
                        <div className="case-study-img">
                            <div className="overlay">
                                <img src="/images/case-study/case-study2.jpg" alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a>ERP Website</a>
                                        </Link>
                                    </h3>
                                    <span>ERP</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-7">
                        <div className="case-study-img">
                            <div className="overlay">
                                <img src="/images/case-study/case-study3.jpg" alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a>Restaurant Website Logo Design</a>
                                        </Link>
                                    </h3>
                                    <span>Restaurant</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-5">
                        <div className="case-study-content">
                            <h3>
                                <Link href="/case-study-details">
                                    <a>Restaurant Website Logo Design</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu</p>
                            
                            <Link href="/case-study-details">
                                <a className="case-study-btn">
                                    Explore More <i className="flaticon-right-arrow"></i>
                                </a>
                            </Link>
                        </div>
                    </div>


 
                    <div className="col-sm-6 col-lg-5">
                        <div className="case-study-content">
                            <h3>
                                <Link href="/case-study-details">
                                    <a>Travel App Logo Design</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu</p>
                            
                            <Link href="/case-study-details">
                                <a className="case-study-btn">
                                    Explore More <i className="flaticon-right-arrow"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-7">
                        <div className="case-study-img">
                            <div className="overlay">
                                <img src="/images/case-study/case-study4.jpg" alt="Work" />
                                <div className="inner">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a>Travel App Logo Design</a>
                                        </Link>
                                    </h3>
                                    <span>Restaurant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/case-study">
                        <a className="common-btn five">Explore More</a>
                    </Link>
                </div>
            </div>
        </div>
    )   
}

export default CaseStudy;