import React from 'react';
import Link from 'next/link';

const BlogPost = () => {
    return (
        <div id="blog" className="blog-area five pb-70">
            <div className="container">
                <div className="section-title five">
                    <h2>Here Are Some <span>Writings</span> Which Will Give You Better Idea</h2>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="blog-item">
                            <div className="top">
                                <Link href="/blog-details">
                                    <a target="_blank">
                                        <img src="/images/blog/blog6.jpg" alt="Blog" />
                                    </a>
                                </Link>
                                <h4>12 <span>Oct</span></h4>
                            </div>
                            <div className="bottom">
                                <h3>
                                    <Link href="/blog-details">
                                        <a target="_blank">How To Improve Design Sense & Skill To Manage Design Work Efficiently & Make Client Happy</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.dolore magna aliquyam erat</p>
                                
                                <Link href="/blog-details">
                                    <a className="blog-btn" target="_blank">
                                        Read More <i className="flaticon-right-arrow"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="blog-thumb-item">
                            <ul className="align-items-center">
                                <li>
                                    <span>13 Oct</span>
                                    <img src="/images/blog/blog-thumb1.jpg" alt="Blog" />
                                </li>
                                <li>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a target="_blank">How Design Became Fun In My Life & Took The Empty</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog-details">
                                        <a className="blog-btn" target="_blank">
                                            Read More <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="blog-thumb-item">
                            <ul className="align-items-center">
                                <li>
                                    <span>14 Oct</span>
                                    <img src="/images/blog/blog-thumb2.jpg" alt="Blog" />
                                </li>
                                <li>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a target="_blank">How Graphic Design Take The Place Of Next Generation</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog-details">
                                        <a className="blog-btn" target="_blank">
                                            Read More <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="blog-thumb-item">
                            <ul className="align-items-center">
                                <li>
                                    <span>15 Oct</span>
                                    <img src="/images/blog/blog-thumb3.jpg" alt="Blog" />
                                </li>
                                <li>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a target="_blank">Age Old Tradition Of Art Are Changed Throughout These</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog-details">
                                        <a className="blog-btn" target="_blank">
                                            Read More <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="blog-thumb-item">
                            <ul className="align-items-center">
                                <li>
                                    <span>16 Oct</span>
                                    <img src="/images/blog/blog-thumb4.jpg" alt="Blog" />
                                </li>
                                <li>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a target="_blank">How To Become A Pro Level Graphic Designer For Work</a>
                                        </Link>
                                    </h3>
                                    <Link href="/blog-details">
                                        <a className="blog-btn" target="_blank">
                                            Read More <i className="flaticon-right-arrow"></i>
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

export default BlogPost;