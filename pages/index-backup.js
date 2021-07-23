import React from 'react';
import Navbar from '../components/LandingPageOne/Navbar';
import MainBanner from '../components/LandingPageOne/MainBanner';
import About from '../components/LandingPageOne/About';
import WhatIDo from '../components/LandingPageOne/WhatIDo';
import MyExperience from '../components/LandingPageOne/MyExperience';
import Portfolio from '../components/LandingPageOne/Portfolio';
import AwardsWon from '../components/LandingPageOne/AwardsWon';
import BlogPost from '../components/LandingPageOne/BlogPost';
import Testimonials from '../components/LandingPageOne/Testimonials';
import ContactForm from '../components/LandingPageOne/ContactForm';
import Footer from '../components/LandingPageOne/Footer';

const Index = () => {
    return (
        <React.Fragment> 
            <Navbar />

            <div className="main-area">
                <div className="main-left-img">
                    <img src="/images/banner/banner-main1.jpg" alt="Image" />
                </div>

                <div className="main-content">
                    <MainBanner />
                    <About />
                    <WhatIDo />
                    <MyExperience />
                    <Portfolio />
                    <AwardsWon />
                    <BlogPost />
                    <Testimonials />
                    <ContactForm />
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Index;