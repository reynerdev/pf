import React from 'react'; 
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
};

const Partners = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="logo-area ptb-100">
            <div className="container">
                {display ? <OwlCarousel 
                    className="logo-slider owl-carousel owl-theme"
                    {...options}
                >  
                    <div className="logo-item">
                        <img src="/images/logo/logo1.png" alt="Logo" />
                    </div>

                    <div className="logo-item">
                        <img src="/images/logo/logo2.png" alt="Logo" />
                    </div>

                    <div className="logo-item">
                        <img src="/images/logo/logo3.png" alt="Logo" />
                    </div>

                    <div className="logo-item">
                        <img src="/images/logo/logo4.png" alt="Logo" />
                    </div>

                    <div className="logo-item">
                        <img src="/images/logo/logo5.png" alt="Logo" />
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Partners;