import React from 'react'; 

const About = () => {
    return (
        <div id="about" className="about-area two pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="/images/about1.jpg" alt="About" />
                            <img src="/images/about2.jpg" alt="About" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title two">
                                <span className="sub-title">ABOUT ME</span>
                                <h2>Hey It's <span>Reton Milan</span>. I Am A Passionate <span>Artist</span> Who Loves To See The World With Colors</h2>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo</p>
                            </div>

                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="left">
                                        <ul>
                                            <li>
                                                <span>Age:</span>
                                                26 Years
                                            </li>
                                            <li>
                                                <span>Residence:</span>
                                                San Francisco
                                            </li>
                                            <li>
                                                <span>Address:</span>
                                                <a href="#" target="_blank">12/7, Mc Street, Canada</a>
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
                                                <a href="#" target="_blank">www.reton.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;