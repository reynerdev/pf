import React from 'react';
import Link from 'next/link';

const Services = () => {
    return (
        <div className="what-area two pb-70">
            <div className="container">
                <div className="section-title five">
                    <h2>Some Other <span>Services</span> That I Provide</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-4">
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

                    <div className="col-sm-6 col-lg-4">
                        <div className="what-item">
                            <i className="flaticon-smartphone icon"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a target="_blank">Front End Development</a>
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

                    <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div className="what-item">
                            <i className="flaticon-paintbrush icon"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a target="_blank">3D Illustration</a>
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

export default Services;