import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
  return (
    <div id="home" className="banner-area five">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="banner-content">
              <span className="sub-head">Hey It's</span>
              <h1>Reyner</h1>
              <p>
                Hello I am a <span>Mechatronic Engineer</span> and
                <span> Full Stack Developer</span> from Peru
              </p>

              <div className="banner-btn-area">
                <Link href="#">
                  <a className="common-btn five">Contact With Me</a>
                </Link>
                <Link href="#">
                  <a className="common-btn five banner-btn">Hire Me</a>
                </Link>
              </div>

              <div className="banner-img">
                <img src="/images/photos/blancoSinFondo.png" alt="Banner" />
              </div>

              <div className="banner-social-text">
                <ul>
                  <li>
                    <a href="#" target="blank">
                      FB
                    </a>
                  </li>
                  <li>
                    <a href="#" target="blank">
                      TW
                    </a>
                  </li>
                  <li>
                    <a href="#" target="blank">
                      LN
                    </a>
                  </li>
                  <li>
                    <a href="#" target="blank">
                      BE
                    </a>
                  </li>
                  <li>
                    <a href="#" target="blank">
                      DRI
                    </a>
                  </li>
                  <li>
                    <a href="#" target="blank">
                      INS
                    </a>
                  </li>
                </ul>
              </div>

              <div className="banner-email">
                <a href="mailto:hello@reton.com">hreloza@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default MainBanner;
