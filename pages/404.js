import React, { Component } from 'react';
import Link from 'next/link';

class Coustom404 extends Component {
    render() {
        return (
            <div className="error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="error-content">
                                <img src="/images/undraw_Page_not_found_re_e9o6.png" alt="Image" />

                                <h3>Page Not Found</h3>
                                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

                                <Link href="/">
                                    <a className="default-btn-one">
                                        Return To Home Page
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Coustom404;
