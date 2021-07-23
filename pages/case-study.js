import React from 'react'; 
import TopHeader from '../components/CaseStudy/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/CaseStudy/Footer'; 
import Link from 'next/link';

const CaseStudy = () => {
    return (
        <React.Fragment>  
            <TopHeader />
            <PageBanner 
                bgText="Case Study" 
                pageTitle="Case Study" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Case Study" 
            /> 

            <div id="case-study" className="case-study-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="case-study-img">
                                <div className="overlay">
                                    <img src="/images/case-study/case-study1.jpg" alt="Work" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="/case-study-details">
                                                <a target="_blank">Furniture Website</a>
                                            </Link>
                                        </h3>
                                        <span>Logo</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="case-study-content">
                                <h3>
                                    <Link href="/case-study-details">
                                        <a target="_blank">Furniture Website Logo Design</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu</p>

                                <Link href="/case-study-details">
                                    <a className="case-study-btn" target="_blank">
                                        Explore More
                                        <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="case-study-content">
                                <h3>
                                    <Link href="/case-study-details">
                                        <a target="_blank">ERP Software Logo</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu</p>

                                <Link href="/case-study-details">
                                    <a className="case-study-btn" target="_blank">
                                        Explore More
                                        <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="case-study-img">
                                <div className="overlay">
                                    <img src="/images/case-study/case-study2.jpg" alt="Work" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="/case-study-details">
                                                <a target="_blank">ERP Website</a>
                                            </Link>
                                        </h3>
                                        <span>ERP</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="case-study-img">
                                <div className="overlay">
                                    <img src="/images/case-study/case-study3.jpg" alt="Work" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="/case-study-details">
                                                <a target="_blank">Restaurant Website Logo Design</a>
                                            </Link>
                                        </h3>
                                        <span>Restaurant</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="case-study-content">
                                <h3>
                                    <Link href="/case-study-details">
                                        <a target="_blank">Restaurant Website Logo Design</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu</p>
                                
                                <Link href="/case-study-details">
                                    <a className="case-study-btn" target="_blank">
                                        Explore More
                                        <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="case-study-content">
                                <h3>
                                    <Link href="/case-study-details">
                                        <a target="_blank">Travel App Logo Design</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu</p>
                                
                                <Link href="/case-study-details">
                                    <a className="case-study-btn" target="_blank">
                                        Explore More
                                        <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="case-study-img">
                                <div className="overlay">
                                    <img src="/images/case-study/case-study4.jpg" alt="Work" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="/case-study-details">
                                                <a target="_blank">Travel App Logo Design</a>
                                            </Link>
                                        </h3>
                                        <span>App</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
            <Footer />
        </React.Fragment>
    )
}

export default CaseStudy;