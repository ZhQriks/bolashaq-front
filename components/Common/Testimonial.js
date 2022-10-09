import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 20,
    navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 1,
        }
    }
}

class Testimonial extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){
        this._isMounted = true;
        this.setState({ display: true })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="testimonial-section ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Testimonial</span>
                        <h2>What Our Client Say</h2>
                    </div>

                    {this.state.display ? <OwlCarousel
                        className="testimonial-slider owl-carousel owl-theme"
                            {...options}
                        >
                        <div className="testimonial-single-item">
                            <div className="testimonial-image">
                                <img src="/images/clients/client1.jpg" alt="image" />
                            </div>

                            <div className="testimonial-info">
                                <h3>Richard Denial</h3>
                                <span>IT Executive</span>
                            </div>

                            <div className="testimonial-content">
                                <div className="icon">
                                    <i className="flaticon-quote"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                        </div>

                        <div className="testimonial-single-item">
                            <div className="testimonial-image">
                                <img src="/images/clients/client2.jpg" alt="image" />
                            </div>

                            <div className="testimonial-info">
                                <h3>Sarah Taylor</h3>
                                <span>Lead Architecure</span>
                            </div>

                            <div className="testimonial-content">
                                <div className="icon">
                                    <i className="flaticon-quote"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                        </div>

                        <div className="testimonial-single-item">
                            <div className="testimonial-image">
                                <img src="/images/clients/client3.jpg" alt="image" />
                            </div>
                            <div className="testimonial-info">
                                <h3>Alastair Cook</h3>
                                <span>Marketing Manager</span>
                            </div>
                            <div className="testimonial-content">
                                <div className="icon">
                                    <i className="flaticon-quote"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>

                {/* Shape Images */}
                <div className="testimonial-shape">
                    <img src="/images/shape/testimonial-shape-1.png" alt="main-image" />
                </div>
                <div className="testimonial-shape-img1">
                    <img src="/images/shape/testimonial-shape-2.png" alt="main-image" />
                </div>
                <div className="testimonial-shape-img2">
                    <img src="/images/shape/testimonial-shape-3.png" alt="main-image" />
                </div>
            </section>
        );
    }
}

export default Testimonial;