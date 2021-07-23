import React from 'react';
import Link from 'next/link';

const Services = () => {
    return (
        <div className="what-area six pb-70">
            <div className="container">
                <div className="section-title six">
                    <span className="sub-title">SERVICES</span>
                    <h2>The <span>Services</span> That I Provide For My Client's Ultimate Satisfaction</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="what-item">
                            <img src="/images/services/service1.jpg" alt="Service" />
                            <h3>
                                <Link href="/service-details">
                                    <a target="_blank">Wedding Photography</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi praesentium tenetur earum accusantium</p>

                            <Link href="/service-details">
                                <a className="what-btn" target="_blank">
                                    Explore More <i className="flaticon-right-arrow"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="what-item">
                            <img src="/images/services/service2.jpg" alt="Service" />
                            <h3>
                                <Link href="/service-details">
                                    <a target="_blank">Personal Photography</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi praesentium tenetur earum accusantium</p>
                            
                            <Link href="/service-details">
                                <a className="what-btn" target="_blank">
                                    Explore More <i className="flaticon-right-arrow"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="what-item">
                            <img src="/images/services/service3.jpg" alt="Service" />
                            <h3>
                                <Link href="/service-details">
                                    <a target="_blank">Pre-wedding Photography</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi praesentium tenetur earum accusantium</p>
                            
                            <Link href="/service-details">
                                <a className="what-btn" target="_blank">
                                    Explore More <i className="flaticon-right-arrow"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="what-item">
                            <img src="/images/services/service4.jpg" alt="Service" />
                            <h3>
                                <Link href="/service-details">
                                    <a target="_blank">Commercial Photography</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi praesentium tenetur earum accusantium</p>
                            
                            <Link href="/service-details">
                                <a className="what-btn" target="_blank">
                                    Explore More <i className="flaticon-right-arrow"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="what-item">
                            <img src="/images/services/service5.jpg" alt="Service" />
                            <h3>
                                <Link href="/service-details">
                                    <a target="_blank">Travel Photography</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi praesentium tenetur earum accusantium</p>
                            
                            <Link href="/service-details">
                                <a className="what-btn" target="_blank">
                                    Explore More <i className="flaticon-right-arrow"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="what-item">
                            <img src="/images/services/service6.jpg" alt="Service" />
                            <h3>
                                <Link href="/service-details">
                                    <a target="_blank">Nature Photography</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi praesentium tenetur earum accusantium</p>
                            
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