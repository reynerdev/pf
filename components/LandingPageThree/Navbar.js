import React, { Component } from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SidebarDemosModal from '../_App/SidebarDemosModal';

class Navbar extends Component {
    state = {
        collapsed: true,
        sidebarModal: false
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    // Sidebar Modal
    toggleModal = () => {
        this.setState({
            sidebarModal: !this.state.sidebarModal
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);

        this.menuActiveClass()
    }

    menuActiveClass = () => {
        let mainNavLinks = document.querySelectorAll(".navbar-nav li a");
        window.addEventListener("scroll", () => {
            let fromTop = window.scrollY;
            mainNavLinks.forEach(link => {
                if (link.hash){
                    let section = document.querySelector(link.hash);
            
                    if (
                        section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                }
            });
        });
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <React.Fragment>
                <nav id="navbar" className="navbar navbar-expand-lg pufo-aside bg-0f1d22">
                    <div className="container">
                        <Link href="/index-3">
                            <a className="navbar-brand logo">
                                <img src="/images/logo-four.png" alt="logo" />
                            </a>
                        </Link>

                        <button 
                            onClick={this.toggleNavbar}
                            className={classTwo} 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <AnchorLink 
                                        onClick={this.toggleNavbar} 
                                        offset={() => 100} 
                                        className="nav-link active" 
                                        href="#home"
                                    >
                                        Home
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink 
                                        onClick={this.toggleNavbar} 
                                        offset={() => -1} 
                                        className="nav-link" 
                                        href="#about"
                                    >
                                        About
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink 
                                        onClick={this.toggleNavbar} 
                                        offset={() => -1} 
                                        className="nav-link" 
                                        href="#portfolio"
                                    >
                                        Portfolio
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink 
                                        onClick={this.toggleNavbar} 
                                        offset={() => -1} 
                                        className="nav-link" 
                                        href="#blog"
                                    >
                                        Blog
                                    </AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink 
                                        onClick={this.toggleNavbar} 
                                        offset={() => -1} 
                                        className="nav-link" 
                                        href="#contact"
                                    >
                                        Contact
                                    </AnchorLink>
                                </li>
                            </ul>

                            <div className="aside-footer">
                                <Link href="#">
                                    <a className="common-btn three">
                                        Download CV <i className='bx bxs-download'></i>
                                    </a>
                                </Link>
                                <ul className="social">
                                    <li><a href="#" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                    <li><a href="#" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                    <li><a href="#" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    <li><a href="#" target="_blank"><i className='bx bxl-behance'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Sidebar Demos Modal */}
                <div className="demo-side-icon">
                    <button type="button" className="modal-btn" 
                       onClick={this.toggleModal}
                    >
                        <span>Demos</span>
                    </button>
                </div>

                <SidebarDemosModal onClick={this.toggleModal} active={this.state.sidebarModal ? 'show' : ''} />
            </React.Fragment>
        );
    }
}

export default Navbar;