import React from 'react';
import Link from 'next/link';

const Pricing = () => {
    return (
        <div className="pricing-area pb-70">
            <div className="container">
                <div className="section-title six">
                    <h2>Here Are My Affordable <span>Pricing</span> To Choose Your Best One</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="pricing-item mt5">
                            <div className="top">
                                <span>BASIC PLAN</span>
                            </div>
                            <div className="middle">
                                <h3>$49 <span>/Project</span></h3>
                            </div>
                            <div className="end">
                                <ul>
                                    <li>8 Hrs Photography Session</li>
                                    <li>1 Senior Photographer</li>
                                    <li>Provide All Photography Instrument</li>
                                    <li><del>Provide Soft Copy</del></li>
                                    <li><del>2 Junior Photographer</del></li>
                                    <li><del>Provide Hard Copy</del></li>
                                </ul>

                                <Link href="#">
                                    <a className="common-btn six">Choose The Plan</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="pricing-item">
                            <div className="top">
                                <span>POPULAR PLAN</span>
                            </div>
                            <div className="middle">
                                <h3>$69 <span>/Project</span></h3>
                            </div>
                            <div className="end">
                                <ul>
                                    <li>8 Hrs Photography Session</li>
                                    <li>1 Senior Photographer</li>
                                    <li>Provide All Photography Instrument</li>
                                    <li><del>Provide Soft Copy</del></li>
                                    <li>2 Junior Photographer</li>
                                    <li><del>Provide Hard Copy</del></li>
                                    <li><del>Videography</del></li>
                                </ul>
                                
                                <Link href="#">
                                    <a className="common-btn six">Choose The Plan</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div className="pricing-item mt5">
                            <div className="top">
                                <span>ADVANCED PLAN</span>
                            </div>
                            <div className="middle">
                                <h3>$139 <span>/Project</span></h3>
                            </div>
                            <div className="end">
                                <ul>
                                    <li>8 Hrs Photography Session</li>
                                    <li>1 Senior Photographer</li>
                                    <li>Provide All Photography Instrument</li>
                                    <li>Provide Soft Copy</li>
                                    <li>2 Junior Photographer</li>
                                    <li>Provide Hard Copy</li>
                                </ul>
                                
                                <Link href="#">
                                    <a className="common-btn six">Choose The Plan</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;