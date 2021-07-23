import React from 'react';
import Link from 'next/link';

const BlogPost = () => {
    return (
        <div id="blog" className="blog-area four pb-70">
            <div className="container">
                <div className="section-title four">
                    <h2>Here Are Some <span>Writings</span> Which Will Give You Better Idea</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="blog-item">
                            <div className="top">
                                <Link href="/blog-details">
                                    <a target="_blank">
                                        <img src="/images/blog/blog3.jpg" alt="Blog" />
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

                    <div className="col-sm-6 col-lg-4">
                        <div className="blog-item">
                            <div className="top">
                                <Link href="/blog-details">
                                    <a target="_blank">
                                        <img src="/images/blog/blog4.jpg" alt="Blog" />
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

                    <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div className="blog-item">
                            <div className="top">
                                <Link href="/blog-details">
                                    <a target="_blank">
                                        <img src="/images/blog/blog5.jpg" alt="Blog" />
                                    </a>
                                </Link>
                                <h4>14 <span>Oct</span></h4>
                            </div>

                            <div className="bottom">
                                <h3>
                                    <Link href="/blog-details">
                                        <a target="_blank">Old Tradition Of Art Is Changed Throughout These Years</a>
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
            </div>
        </div>
    )
}

export default BlogPost;