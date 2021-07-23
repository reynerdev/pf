import React from 'react'; 
import TopHeader from '../components/Blog/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Blog/Footer'; 
import Link from 'next/link';

const Blog = () => {
    return (
        <React.Fragment>  
            <TopHeader />
            <PageBanner 
                bgText="Blog" 
                pageTitle="Blog" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog" 
            /> 

            <div id="blog" className="blog-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="blog-item">
                                <div className="top">
                                    <Link href="/blog-details">
                                        <a target="_blank">
                                            <img src="/images/blog/blog10.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                    <h4>12 <span>Oct</span></h4>
                                </div>

                                <div className="bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a target="_blank">How To Improve Design Sense & Skill To Manage Design Work</a>
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
                                            <img src="/images/blog/blog11.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                    <h4>13 <span>Oct</span></h4>
                                </div>

                                <div className="bottom">
                                    <h3>
                                        <Link href="/blog-details" target="_blank">
                                            <a target="_blank">How Design Became Fun In My Life & Took The Empty Space Of Heart</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>

                                    <Link href="/blog-details" target="_blank">
                                        <a className="blog-btn">
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
                                            <img src="/images/blog/blog12.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                    <h4>14 <span>Oct</span></h4>
                                </div>
                                <div className="bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a target="_blank">Old Tradition Of Art Are Changed Throughout These Years</a>
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
                                            <img src="/images/blog/blog13.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                    <h4>15 <span>Oct</span></h4>
                                </div>
                                <div className="bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a target="_blank">How To Become A Pro Level Graphic Designer</a>
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
                                            <img src="/images/blog/blog14.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                    <h4>16 <span>Oct</span></h4>
                                </div>
                                <div className="bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a target="_blank">How Graphic Design Take The Place Of Next Generation</a>
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
                                            <img src="/images/blog/blog15.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                    <h4>17 <span>Oct</span></h4>
                                </div>
                                <div className="bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a target="_blank">How Photography Skill Helps In Graphic Design Profession</a>
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
                                            <img src="/images/blog/blog16.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                    <h4>18 <span>Oct</span></h4>
                                </div>
                                <div className="bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a target="_blank">How A Graphic Designer Travel All Over The World</a>
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
                                            <img src="/images/blog/blog17.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                    <h4>19 <span>Oct</span></h4>
                                </div>
                                <div className="bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a target="_blank">How To Manage Tuff Project With A Cool Mind & Succeeded</a>
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
                                            <img src="/images/blog/blog18.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                    <h4>20 <span>Oct</span></h4>
                                </div>
                                <div className="bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a target="_blank">How To Remain Cool In Every Tuff Situation & Overcome This</a>
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
   
            <Footer />
        </React.Fragment>
    )
}

export default Blog;