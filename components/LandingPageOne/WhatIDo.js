import React from 'react';
import Link from 'next/link';

const WhatIDo = () => {
    return (
        <div className="what-area border-bottom pt-100 pb-70">
            <div className="common-right-text">
                <span>SERVICE</span>
            </div>

            <div className="container">
                <div className="section-title">
                    <span className="sub-title">WHAT I DO</span>
                    <h2>Here Are My All Skills</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <div className="what-item">
                            <i className="flaticon-global icon"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a target="_blank">Web Design</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>

                            <Link href="/service-details">
                                <a className="what-btn" target="_blank">
                                    Explore More <i className="flaticon-right-arrow"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="what-item">
                            <i className="flaticon-smartphone icon"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a target="_blank">App Design</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>

                            <Link href="/service-details">
                                <a className="what-btn" target="_blank">
                                    Explore More <i className="flaticon-right-arrow"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="what-item">
                            <i className="flaticon-paintbrush icon"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a target="_blank">Illustration</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            
                            <Link href="/service-details">
                                <a className="what-btn" target="_blank">
                                    Explore More <i className="flaticon-right-arrow"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="what-item">
                            <i className="flaticon-branding icon"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a target="_blank">Branding</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            
                            <Link href="/service-details">
                                <a className="what-btn" target="_blank">
                                    Explore More <i className="flaticon-right-arrow"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIDo;