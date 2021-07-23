import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="banner-area four">
            <div className="banner-img">
                <img src="/images/banner/banner-main3.png" alt="Image" />
            </div>

            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <span className="sub-head">Hey It's</span>
                            <h1>Reton Milano</h1>
                            <p>Hello I am a <span>Graphic Designer</span> from San Francisco. I have rich experience of 5+ years in Logo design and Flyer design</p>
                            
                            <div className="banner-btn-area">
                                <Link href="#">
                                    <a className="common-btn">Contact With Me</a>
                                </Link>
                                <Link href="#">
                                    <a className="common-btn banner-btn">Hire Me</a>
                                </Link>
                            </div>

                            <ul>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className='bx bxl-behance'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className='bx bxl-dribbble'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;