import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="banner-area-two">
            <div className="banner-shape-img">
                <img src="/images/banner/banner-main2.png" alt="Shape" />
            </div>

            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">

                        <div className="banner-content">
                            <span>Welcome To</span>
                            <h1>Reton's World</h1>
                            <Link href="#">
                                <a className="common-btn two">Start A Project</a>
                            </Link>

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