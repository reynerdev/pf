import React from 'react';
import Link from 'next/link';

const Works = () => {
    return (
        <div id="portfolio" className="work-area ptb-100">
            <div className="container">
                <div className="section-title four">
                    <h2>At First See My Awesome <span>Work</span> That Gain A Vast Popularity</h2>
                </div>  

                <div className="row">
                    <div className="col-lg-4">
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

                    <div className="col-lg-5">
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

                    <div className="col-lg-3">
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

                <div className="text-center">
                    <Link href="/works">
                        <a className="common-btn four" target="_blank">Explore All Work</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Works;