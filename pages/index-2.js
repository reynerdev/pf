import React from 'react';
import Navbar from '../components/LandingPageTwo/Navbar';
import MainBanner from '../components/LandingPageTwo/MainBanner';
import About from '../components/LandingPageTwo/About';
import Gallery from '../components/LandingPageTwo/Gallery';
import AwardsWon from '../components/LandingPageTwo/AwardsWon';
import BlogPost from '../components/LandingPageTwo/BlogPost';
import Ticket from '../components/LandingPageTwo/Ticket';
import Testimonials from '../components/LandingPageTwo/Testimonials';
import ContactForm from '../components/LandingPageTwo/ContactForm';
import Footer from '../components/LandingPageTwo/Footer';

const Index2 = () => {
    return (
        <React.Fragment> 
            <Navbar />
            <MainBanner />
            <About />
            <Gallery />
            <AwardsWon />
            <BlogPost />
            <Ticket />
            <Testimonials />
            <ContactForm />
            <Footer />
        </React.Fragment>
    )
}

export default Index2;