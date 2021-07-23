import React from 'react';
import Link from 'next/link';

const Experience = () => {
    return (
        <div className="experience-area three border-bottom-two ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">EXPERIENCE</span>
                    <h2>I Have 6+ Years Of Experience With Many Awards</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et.</p>
                </div>

                <div className="experience-content">
                    <div className="experience-inner">
                        <ul className="align-items-center">
                            <li>
                                <span>2014-2016</span>
                            </li>
                            <li>
                                <span>Graphic Designer, Art Company, DC</span>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="experience-inner">
                        <ul className="align-items-center">
                            <li>
                                <span>2016-2017</span>
                            </li>
                            <li>
                                <span>UX/UI Designer, Dribble</span>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="experience-inner">
                        <ul className="align-items-center">
                            <li>
                                <span>2017-2018</span>
                            </li>
                            <li>
                                <span>Product Designer, Dribble</span>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="experience-inner">
                        <ul className="align-items-center">
                            <li>
                                <span>2018-2020</span>
                            </li>
                            <li>
                                <span>Senior Designer, Dribble</span>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <Link href="/portfolio">
                            <a className="common-btn three">See My Portfolio</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;