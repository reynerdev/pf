import React from 'react';
import Link from 'next/link';

const BlogPost = () => {
    return (
        <div id="blog" className="blog-area border-bottom ptb-100">
            <div className="common-right-text">
                <span>BLOG</span>
            </div>

            <div className="container">
                <div className="section-title">
                    <span className="sub-title">BLOG</span>
                    <h2>Read My <span>Blog</span> To Know More About My Design Process</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <div className="blog-item">
                            <div className="top">
                                <Link href="/blog-details">
                                    <a target="_blank">
                                        <img src="/images/blog/blog1.jpg" alt="Blog" />
                                    </a>
                                </Link>
                                <h4>12 <span>Oct</span></h4>
                            </div>
                            <div className="bottom">
                                <h3>
                                    <Link href="/blog-details">
                                        <a target="_blank">How To Improve Design Skill & Manage Design Work</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>

                                <Link href="/blog-details">
                                    <a className="blog-btn" target="_blank">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-6">
                        <div className="blog-item">
                            <div className="top">
                                <Link href="/blog-details">
                                    <a target="_blank">
                                        <img src="/images/blog/blog2.jpg" alt="Blog" />
                                    </a>
                                </Link>
                                <h4>13 <span>Oct</span></h4>
                            </div>
                            <div className="bottom">
                                <h3>
                                    <Link href="/blog-details">
                                        <a target="_blank">How To Solve Design Problem Within Few Hours</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>

                                <Link href="/blog-details">
                                    <a className="blog-btn" target="_blank">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/blog">
                        <a className="common-btn" target="_blank">Explore Blog</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;