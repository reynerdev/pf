import React from 'react';
import TopHeader from '../components/Works/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Works/Footer'; 
import Link from 'next/link';
import ContactForm from '../components/ServiceDetails/ContactForm';

const WorkDetails = () => {
    return (
        <React.Fragment>  
            <TopHeader />
            <PageBanner 
                bgText="Pancake Logo" 
                pageTitle="Pancake Logo" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Pancake Logo" 
            /> 

            <div id="works" className="work-details-area pt-100">
                <div className="container">
                    <div className="details-img">
                        <img src="/images/work/work-details1.jpg" alt="Details" />

                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="details-img-inner">
                                    <h3>Client</h3>
                                    <ul>
                                        <li>Furnish Furniture Co.</li>
                                        <li>152 san Francisco, USA</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="details-img-inner">
                                    <h3>Date</h3>
                                    <ul>
                                        <li>15th, September 2020</li>
                                        <li>6th, October 2020</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="details-img-inner">
                                    <h3>Categories</h3>
                                    <ul>
                                        <li>Website Design</li>
                                        <li>Website Development</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="details-img-inner">
                                    <h3>Working Role</h3>
                                    <ul>
                                        <li>User Interface & UX Design</li>
                                        <li>User Interface & UI Design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="details-description">
                        <h3>Description</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ips um dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore mag na aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>

                        <div className="row">
                            <div className="col-sm-6 col-lg-6">
                                <div className="img">
                                    <img src="/images/work/work-details2.jpg" alt="Details" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="img">
                                    <img src="/images/work/work-details3.jpg" alt="Details" /> 
                                </div>
                            </div>
                        </div>

                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy tempor invidunt ut labore et dolore</p>
                    </div>

                    <div className="details-pages">
                        <div className="row align-items-center">
                            <div className="col-sm-4 col-lg-4">
                                <div className="pages-item">
                                    <a className="pre-project" href="#">
                                        <i className="flaticon-right-arrow"></i> Previous Project
                                    </a>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-4">
                                <div className="pages-item two">
                                    <Link href="/works">
                                        <a className="common-btn">Go Back To Work</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-4">
                                <div className="pages-item three">
                                    <a className="next-project" href="#">
                                        Next Project <i className="flaticon-right-arrow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-area pb-70">
                        <div className="container">
                            <div className="section-title">
                                <h2>Have Any Project? Just <span>Drop A Line</span>. I Always Love To Hear From You</h2>
                            </div>

                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <ContactForm />
                                </div>

                                <div className="col-lg-5">
                                    <div className="contact-content">
                                        <div className="top">
                                            <ul>
                                                <li>
                                                    <span>Phone:</span>
                                                    <a href="tel:+00932123456">+009 321 23456</a>
                                                </li>
                                                <li>
                                                    <span>Email:</span>
                                                    <a href="mailto:hello@reton.com">hello@reton.com</a>
                                                </li>
                                                <li>
                                                    <span>Website:</span>
                                                    <a href="#" target="_blank">www.reton.com</a>
                                                </li>
                                                <li>
                                                    <span>Address:</span>
                                                    <a href="#">12/7, Mc Street, Canada</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bottom">
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
                    </div>
                </div>
            </div>
 
            <Footer />
        </React.Fragment>
    )
}

export default WorkDetails;