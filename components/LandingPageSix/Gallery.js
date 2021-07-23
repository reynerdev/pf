import React from 'react';
import Link from 'next/link';

const Gallery = () => {
    return (
        <div id="portfolio" className="creation-area pb-100">
            <div className="container">
                <div className="section-title six">
                    <span className="sub-title">GALLERY</span>
                    <h2>Here Are Some Of My <span>Creation</span> Which Amazed People By Heart</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="creation-item">
                            <img src="/images/gallery/gallery6.jpg" alt="Gallery" />
                            <div className="inner">
                                <span>WEDDING PHOTO</span>
                                <h3>
                                    <Link href="#">
                                        <a>Jenny's Wedding</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                        <div className="creation-item">
                            <img src="/images/gallery/gallery7.jpg" alt="Gallery" />
                            <div className="inner">
                                <span>TRAVEL</span>
                                <h3>
                                    <Link href="#">
                                        <a>Travel On Caravan</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="creation-item">
                            <img src="/images/gallery/gallery8.jpg" alt="Gallery" />
                            <div className="inner">
                                <span>NATURE</span>
                                <h3>
                                    <Link href="#">
                                        <a>Life On Boat</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                        <div className="creation-item">
                            <img src="/images/gallery/gallery9.jpg" alt="Gallery" />
                            <div className="inner">
                                <span>Personal Photography</span>
                                <h3>
                                    <Link href="#">
                                        <a>Girl Wedding Hat</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div className="creation-item">
                            <img src="/images/gallery/gallery10.jpg" alt="Gallery" />
                            <div className="inner">
                                <span>COMMERCIAL SHOOT</span>
                                <h3>
                                    <Link href="#">
                                        <a>Crazy Bike</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                        <div className="creation-item">
                            <img src="/images/gallery/gallery11.jpg" alt="Gallery" />
                            <div className="inner">
                                <span>LOVE STORY</span>
                                <h3>
                                    <Link href="#">
                                        <a>Love Met</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="#">
                        <a className="common-btn six">Explore Portfolio</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Gallery;