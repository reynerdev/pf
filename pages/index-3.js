import React from 'react';
import Navbar from '../components/LandingPageThree/Navbar';
import MainBanner from '../components/LandingPageThree/MainBanner';
import About from '../components/LandingPageThree/About';
import Services from '../components/LandingPageThree/Services';
import Experience from '../components/LandingPageThree/Experience';
import Skills from '../components/LandingPageThree/Skills';
import Projects from '../components/LandingPageThree/Projects';
import BlogPost from '../components/LandingPageThree/BlogPost';
import Testimonials from '../components/LandingPageThree/Testimonials';
import ContactForm from '../components/LandingPageThree/ContactForm';
import Footer from '../components/LandingPageThree/Footer';

const Index3 = () => {
    return (
        <React.Fragment> 
            <div className="body-bg-five">
                <div className="main-area two">
                    <Navbar />
                    <div className="main-content two">
                        <MainBanner />
                        <About />
                        <Services />
                        <Experience />
                        <Skills />
                        <Projects />
                        <BlogPost />
                        <Testimonials />
                        <ContactForm />
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Index3;