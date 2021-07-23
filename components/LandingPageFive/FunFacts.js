import React from 'react'; 

const FunFacts = () => {
    return (
        <div className="counter-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="counter-item">
                            <img src="/images/counter-shape.png" alt="Shape" />
                            <h3>
                                123 <span className="target">+</span>
                            </h3>
                            <p>CLIENTS</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="counter-item mt5">
                            <img src="/images/counter-shape.png" alt="Shape" />
                            <h3>
                                100 <span className="target">+</span>
                            </h3>
                            <p>PROJECTS DONE</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="counter-item">
                            <img src="/images/counter-shape.png" alt="Shape" />
                            <h3>
                                500 <span className="target">+</span>
                            </h3>
                            <p>REVIEWS</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="counter-item mt5">
                            <img src="/images/counter-shape.png" alt="Shape" />
                            <h3>
                                50 <span className="target">+</span>
                            </h3>
                            <p>AWARDS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunFacts;