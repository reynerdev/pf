import React from 'react';
import Navbar from '../components/LandingPageFive/Navbar';
import MainBanner from '../components/LandingPageFive/MainBanner';
import CaseStudy from '../components/LandingPageFive/CaseStudy';
import Services from '../components/LandingPageFive/Services';
import AboutMe from '../components/LandingPageFive/AboutMe';
import FunFacts from '../components/LandingPageFive/FunFacts';
import Pricing from '../components/LandingPageFive/Pricing';
import BlogPost from '../components/LandingPageFive/BlogPost';
import Testimonials from '../components/LandingPageFive/Testimonials';
import ContactForm from '../components/LandingPageFive/ContactForm';
import Footer from '../components/LandingPageFive/Footer';

const Index5 = () => {
  return (
    <React.Fragment>
      <div className="body-bg-five">
        <Navbar />
        <MainBanner />
        <CaseStudy />
        {/* <Services /> */}
        {/* <AboutMe /> */}
        {/* <FunFacts /> */}
        {/* <Pricing /> */}
        {/* <BlogPost /> */}
        {/* <Testimonials /> */}
        {/* <ContactForm /> */}
        {/* <Footer /> */}
      </div>
    </React.Fragment>
  );
};

export default Index5;
