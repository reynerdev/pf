import React from 'react';
import Link from 'next/link';

const Gallery = () => {
    return (
        <div id="portfolio" className="gallery-area pb-100">
            <div className="container">
                <div className="section-title two">
                    <span className="sub-title">GALLERY</span>
                    <h2>Here Are Some Of My <span>Creation</span> Which Amazed People By Heart</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="gallery-item">
                                    <img src="/images/gallery/gallery1.jpg" alt="Gallery" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="#">
                                                <a>Blue Heart</a>
                                            </Link>
                                        </h3>
                                        <span>Creative</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="gallery-item">
                                    <img src="/images/gallery/gallery4.jpg" alt="Gallery" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="#">
                                                <a>Wind Color</a>
                                            </Link>
                                        </h3>
                                        <span>Thriller</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="gallery-item">
                                    <img src="/images/gallery/gallery5.jpg" alt="Gallery" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="#">
                                                <a>Life's Color</a>
                                            </Link>
                                        </h3>
                                        <span>Romantic</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="gallery-item">
                                    <img src="/images/gallery/gallery2.jpg" alt="Gallery" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="#">
                                                <a>Mind Color</a>
                                            </Link>
                                        </h3>
                                        <span>Thriller</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6">
                                <div className="gallery-item">
                                    <img src="/images/gallery/gallery3.jpg" alt="Gallery" />
                                    <div className="inner">
                                        <h3>
                                            <Link href="#">
                                                <a>Heart Touch</a>
                                            </Link>
                                        </h3>
                                        <span>Romantic</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="#">
                        <a className="common-btn two">See Full Gallery</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Gallery;