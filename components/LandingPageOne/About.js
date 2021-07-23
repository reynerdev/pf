import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <div id="about" className="about-area border-bottom ptb-100">
            <div className="common-right-text">
                <span>ABOUT</span>
            </div>

            <div className="container">
                <div className="about-content">
                    <div className="section-title">
                        <span className="sub-title">ABOUT ME</span>
                        <h2>I Am A Product Designer, Specialized In UI/UX Design & Digital Design</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 col-lg-6">
                            <div className="left">
                                <ul>
                                    <li>
                                        <span>Age:</span> 26 Years
                                    </li>
                                    <li>
                                        <span>Residence:</span> San Francisco
                                    </li>
                                    <li>
                                        <span>Address:</span>
                                        <Link href="#" target="_blank">
                                            <a>12/7, Mc Street, Canada</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-6">
                            <div className="right">
                                <ul>
                                    <li>
                                        <span>Phone:</span>
                                        <a href="tel:+00932123456">+009 321 23456</a>
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        <a href="mailto:hello@reton.com">hello@reton.com</a>
                                    </li>
                                    <li>
                                        <span>Website:</span>
                                        <Link href="#">
                                            <a target="_blank">www.reton.com</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;