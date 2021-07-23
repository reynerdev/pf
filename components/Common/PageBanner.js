import React from 'react';
import Link from 'next/link';

const PageBanner = ({bgText, pageTitle, homePageUrl, homePageText, activePageText}) => {
    return (
        <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="title-content">
                            <span>{bgText}</span>
                            <h1>{pageTitle}</h1>
                            <ul>
                                <li>
                                    <Link href={homePageUrl}>
                                        <a>{homePageText}</a>
                                    </Link>
                                </li>
                                <li>{activePageText}</li>
                            </ul>
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
    )
}

export default PageBanner;