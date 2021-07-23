import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="banner-area border-bottom">
            <div className="common-right-text two">
                <span>RETON</span>
            </div>

            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <h1>Reton Milano</h1>
                            <p>Hello I am a <span>UI/UX Designer</span> from San Francisco. I have rich experience of 5+ years  in web site design and app design, also I am good at extraordinary design concept. I love to hear from you about your unique needs.</p>

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
                                    <Link href="#">
                                        <a target="_blank">
                                            <i className='bx bxl-facebook'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a target="_blank">
                                            <i className='bx bxl-twitter'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a target="_blank">
                                            <i className='bx bxl-behance'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a target="_blank">
                                            <i className='bx bxl-dribbble'></i>
                                        </a>
                                    </Link>
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