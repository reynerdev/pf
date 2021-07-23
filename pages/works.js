import React from 'react';
import TopHeader from '../components/Works/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Works/Footer'; 
import Link from 'next/link';

const Works = () => {
    return (
        <React.Fragment>  
            <TopHeader />
            <PageBanner 
                bgText="Works" 
                pageTitle="Works" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Works" 
            /> 

            <div id="works" className="work-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="work-item">
                                <div className="overlay">
                                    <img src="/images/work/work1.jpg" alt="Work" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="/work-details">
                                                <a target="_blank">Pancake Logo</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="overlay">
                                    <img src="/images/work/work2.jpg" alt="Work" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="/work-details">
                                                <a target="_blank">Business Card</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="overlay">
                                    <img src="/images/work/work3.jpg" alt="Work" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="/work-details">
                                                <a target="_blank">Brochure</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-5">
                            <div className="work-item">
                                <div className="overlay">
                                    <img src="/images/work/work4.jpg" alt="Work" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="/work-details">
                                                <a target="_blank">Flyer</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="overlay">
                                    <img src="/images/work/work5.jpg" alt="Work" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="/work-details">
                                                <a target="_blank">Packaging</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="overlay">
                                    <img src="/images/work/work6.jpg" alt="Work" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="/work-details">
                                                <a target="_blank">Illustration</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-3">
                            <div className="work-item">
                                <div className="overlay">
                                    <img src="/images/work/work7.jpg" alt="Work" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="/work-details">
                                                <a target="_blank">UX/UI</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="overlay">
                                    <img src="/images/work/work8.jpg" alt="Work" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="/work-details">
                                                <a target="_blank">Web Design</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="overlay">
                                    <img src="/images/work/work9.jpg" alt="Work" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="/work-details">
                                                <a target="_blank">Web Development</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="overlay">
                                    <img src="/images/work/work10.jpg" alt="Work" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="/work-details">
                                                <a target="_blank">Animation</a>
                                            </Link>
                                        </h3>
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

export default Works;