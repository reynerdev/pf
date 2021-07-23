import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="banner-area border-bottom-two three">
            <div className="common-right-text-two">
                <span>Reton <br /> MILANOS <br /> HIGHLY <br /> EXPERIENCED <br /> WEB <br /> DEVELOPER</span>
            </div>
            
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-content">
                            <h1><span>Reton</span> Milano</h1>
                            <p>Hello I am a <span>UI/UX Designer</span> from San Francisco. I have rich experience of 5+ years  in web site design and app design, also I am good at extraordinary design concept. I love to hear from you about your unique needs.</p>

                            <div className="banner-btn-area">
                                <Link href="#">
                                    <a className="common-btn three">Contact With Me</a>
                                </Link>
                                <Link href="#">
                                    <a className="common-btn banner-btn three">Hire Me</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;