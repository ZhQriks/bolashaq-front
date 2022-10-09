import React, { Component } from 'react';
import Link from 'next/link';

class WorkingProcess extends Component {
    render() {
        return (


            <section className="process-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Our Working Process</span>
                        <h2>Software Testing Process</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="process-item">
                                <img className="miras" src="/images/process/undraw_Work_in_progress_re_byic.png" alt="image" />

                                <h3>Planning</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/project-details">
                                    <a className="process-btn">
                                        Read More
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="process-item">
                                <img src="/images/process/undraw_Voice_interface_re_206s.png" alt="image" />

                                <h3>Design & Execution</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/project-details">
                                    <a className="process-btn">
                                        Read More
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="process-item">
                                <img className="miras" src="/images/process/undraw_Growth_analytics_re_pyxf.png" alt="image" />

                                <h3>Analytics Projects</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                                <Link href="/project-details">
                                    <a className="process-btn">
                                        Read More
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WorkingProcess;
