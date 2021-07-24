import React from 'react';
import Navbar from '../components/LandingPageSix/Navbar';
import MainBanner from '../components/LandingPageSix/MainBanner'; 
import Services from '../components/LandingPageSix/Services';
import AboutMe from '../components/LandingPageSix/AboutMe';
import FunFacts from '../components/LandingPageSix/FunFacts';
import Pricing from '../components/LandingPageSix/Pricing';
import BlogPost from '../components/LandingPageSix/BlogPost';
import Testimonials from '../components/LandingPageSix/Testimonials';
import ContactForm from '../components/LandingPageSix/ContactForm';
import Footer from '../components/LandingPageSix/Footer';
import Gallery from '../components/LandingPageSix/Gallery';
import Partners from '../components/LandingPageSix/Partners';
 
const Index6 = () => {
    return (
        <React.Fragment> 
            <div className="body-bg-five">
                <Navbar />
                <MainBanner />
                <AboutMe />
                <Services />
                <FunFacts />
                <Gallery />
                <Pricing />
                <Testimonials />
                <Partners />
                <BlogPost />
                <ContactForm />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Index6;