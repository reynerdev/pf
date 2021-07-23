import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="review-area two three five border-bottom-two ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">TESTIMONIAL</span>
                    <h2>Some Generous Words Of My Satisfied Client Who Love My Work</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et.</p>
                </div>

                {display ? <OwlCarousel 
                    className="review-slider owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="review-item">
                        <i className='bx bxs-quote-right'></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim illo magni debitis in at culpa quidem eum molestiae reiciendis provident, officiis consequatur voluptates error maiores, pariatur natus ex quaerat</p>
                        <img src="/images/review/review1.jpg" alt="Review" />
                        <h3>Andrew Smith</h3>
                        <span>Web Developer</span>
                    </div>

                    <div className="review-item">
                        <i className='bx bxs-quote-right'></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim illo magni debitis in at culpa quidem eum molestiae reiciendis provident, officiis consequatur voluptates error maiores, pariatur natus ex quaerat</p>
                        <img src="/images/review/review2.jpg" alt="Review" />
                        <h3>Tom Henry</h3>
                        <span>UX/UI Designer</span>
                    </div>

                    <div className="review-item">
                        <i className='bx bxs-quote-right'></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim illo magni debitis in at culpa quidem eum molestiae reiciendis provident, officiis consequatur voluptates error maiores, pariatur natus ex quaerat</p>
                        <img src="/images/review/review3.jpg" alt="Review" />
                        <h3>Jac Jacson</h3>
                        <span>SEO Expert</span>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Testimonials;