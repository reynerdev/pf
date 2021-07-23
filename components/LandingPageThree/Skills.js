import React from 'react'; 

const Skills = () => {
    return (
        <div className="skills-area border-bottom-two ptb-100">
            <div className="container">
                <div className="section-title three">
                    <span className="sub-title">SKILLS</span>
                    <h2>Here Are Some Overview Of My Skills Just Have A Look</h2>
                </div>

                <div className="skill-wrap">
                    <div className="skill">
                        <h3>JAVASCRIPT</h3>
                        <div className="skill-bar skill1 wow fadeInLeftBig">
                            <span className="skill-count1">90%</span>
                        </div>
                    </div>

                    <div className="skill">
                        <h3>REACT JS</h3>
                        <div className="skill-bar skill2 wow fadeInLeftBig">
                            <span className="skill-count2">70%</span>
                        </div>
                    </div>

                    <div className="skill">
                        <h3>ANGULAR JS</h3>
                        <div className="skill-bar skill3 wow fadeInLeftBig">
                            <span className="skill-count3">80%</span>
                        </div>
                    </div>

                    <div className="skill">
                        <h3>PYTHON</h3>
                        <div className="skill-bar skill4 wow fadeInLeftBig">
                            <span className="skill-count4">98%</span>
                        </div>
                    </div>

                    <div className="skill">
                        <h3>PHP</h3>
                        <div className="skill-bar skill5 wow fadeInLeftBig">
                            <span className="skill-count5">78%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;