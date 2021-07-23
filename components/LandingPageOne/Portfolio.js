import React from 'react';
import Link from 'next/link';

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio-area border-bottom ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">PORTFOLIO</span>
                    <h2>See My Works Which Will Amaze You</h2>
                </div>
                
                <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src="/images/portfolio/portfolio1.jpg" alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a target="_blank">Restaurant App</a>
                                        </Link>
                                    </h3>
                                    <span>APP DESIGN</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>

                                    <Link href="/case-study-details">
                                        <a target="_blank">
                                            Explore More <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src="/images/portfolio/portfolio2.jpg" alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a target="_blank">Vegetable Shop</a>
                                        </Link>
                                    </h3>
                                    <span>Vegetable</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                    <Link href="/case-study-details">
                                        <a target="_blank">
                                            Explore More <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src="/images/portfolio/portfolio3.jpg" alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a target="_blank">Business Card Design</a>
                                        </Link>
                                    </h3>
                                    <span>Card</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nostrum ipsam suscipit dignissimos quis animi quod culpa</p>
                                    <Link href="/case-study-details">
                                        <a target="_blank">
                                            Explore More <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src="/images/portfolio/portfolio4.jpg" alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a target="_blank">Food Illustration</a>
                                        </Link>
                                    </h3>
                                    <span>Illustration</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                    <Link href="/case-study-details">
                                        <a target="_blank">
                                            Explore More <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="portfolio-item">
                            <div className="top">
                                <img src="/images/portfolio/portfolio5.jpg" alt="Portfolio" />
                            </div>
                            <div className="bottom">
                                <div className="bottom-one">
                                    <h3>
                                        <Link href="/case-study-details">
                                            <a target="_blank">Package Design</a>
                                        </Link>
                                    </h3>
                                    <span>Package</span>
                                </div>
                                <div className="bottom-two">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                    <Link href="/case-study-details">
                                        <a target="_blank">
                                            Explore More <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="#">
                        <a className="common-btn">Explore All Work</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;