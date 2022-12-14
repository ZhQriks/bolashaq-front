import React, { Component } from 'react';
import Link from 'next/link';

class BlogCard extends Component {
    render() {
        return (
            <section className="blog-section ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Blog</span>
                        <h2>Our Recent Post</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <Link href="/#">
                                    <a>
                                        <img src="/images/blog/blog1.png" alt="image" />
                                    </a>
                                </Link>
 
                                <div className="blog-content">
                                    <ul className="meta-tags">
                                        <li>
                                            <Link href="/blog/#">
                                                <a>
                                                    <i className="fa fa-user-alt"></i> 
                                                    Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog/#">
                                                <a>
                                                    <i className="fas fa-calendar-week"></i>
                                                    7 Dec 2020
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="far fa-comments"></i> 
                                            3 Comments
                                        </li>
                                    </ul>

                                    <h3>
                                        <Link href="/#">
                                            <a>
                                                Startup marketing solution for business owner
                                            </a>
                                        </Link>
                                    </h3>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                
                                    <Link href="/#">
                                        <a className="read-more">
                                            Read More
                                            <i className="fa fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div> 
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <Link href="/#">
                                    <a>
                                        <img src="/images/blog/blog2.png" alt="image" />
                                    </a>
                                </Link>
 
                                <div className="blog-content">
                                    <ul className="meta-tags">
                                        <li>
                                            <Link href="/blog/#">
                                                <a>
                                                    <i className="fa fa-user-alt"></i> 
                                                    Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog/#">
                                                <a>
                                                    <i className="fas fa-calendar-week"></i>
                                                    7 Dec 2020
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="far fa-comments"></i> 
                                            3 Comments
                                        </li>
                                    </ul>

                                    <h3>
                                        <Link href="/#">
                                            <a>
                                                Web developement best work in future world
                                            </a>
                                        </Link>
                                    </h3>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

                                    <Link href="/#">
                                        <a className="read-more">
                                            Read More
                                            <i className="fa fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div> 
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <Link href="/#">
                                    <a>
                                        <img src="/images/blog/blog3.png" alt="image" />
                                    </a>
                                </Link>
 
                                <div className="blog-content">
                                    <ul className="meta-tags">
                                        <li>
                                            <Link href="/blog/#">
                                                <a>
                                                    <i className="fa fa-user-alt"></i> 
                                                    Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog/#">
                                                <a>
                                                    <i className="fas fa-calendar-week"></i>
                                                    7 Dec 2020
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="far fa-comments"></i> 
                                            3 Comments
                                        </li>
                                    </ul>

                                    <h3>
                                        <Link href="/#">
                                            <a>
                                                Creative solutions to improve your business!
                                            </a>
                                        </Link>
                                    </h3>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

                                    <Link href="/#">
                                        <a className="read-more">
                                            Read More
                                            <i className="fa fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <Link href="/#">
                                    <a>
                                        <img src="/images/blog/blog4.png" alt="image" />
                                    </a>
                                </Link>
 
                                <div className="blog-content">
                                    <ul className="meta-tags">
                                        <li>
                                            <Link href="/blog/#">
                                                <a>
                                                    <i className="fa fa-user-alt"></i> 
                                                    Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog/#">
                                                <a>
                                                    <i className="fas fa-calendar-week"></i>
                                                    7 Dec 2020
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="far fa-comments"></i> 
                                            3 Comments
                                        </li>
                                    </ul>

                                    <h3>
                                        <Link href="/#">
                                            <a>
                                                Making peace with the feast or famine of freelancing
                                            </a>
                                        </Link>
                                    </h3>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

                                    <Link href="/#">
                                        <a className="read-more">
                                            Read More
                                            <i className="fa fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <Link href="/#">
                                    <a>
                                        <img src="/images/blog/blog5.png" alt="image" />
                                    </a>
                                </Link>
 
                                <div className="blog-content">
                                    <ul className="meta-tags">
                                        <li>
                                            <Link href="/blog/#">
                                                <a>
                                                    <i className="fa fa-user-alt"></i> 
                                                    Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog/#">
                                                <a>
                                                    <i className="fas fa-calendar-week"></i>
                                                    7 Dec 2020
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="far fa-comments"></i> 
                                            3 Comments
                                        </li>
                                    </ul>

                                    <h3>
                                        <Link href="/#">
                                            <a>
                                                Instagram feed add to your WordPress site
                                            </a>
                                        </Link>
                                    </h3>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

                                    <Link href="/#">
                                        <a className="read-more">
                                            Read More
                                            <i className="fa fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <Link href="/#">
                                    <a>
                                        <img src="/images/blog/blog6.png" alt="image" />
                                    </a>
                                </Link>
 
                                <div className="blog-content">
                                    <ul className="meta-tags">
                                        <li>
                                            <Link href="/blog/#">
                                                <a>
                                                    <i className="fa fa-user-alt"></i> 
                                                    Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog/#">
                                                <a>
                                                    <i className="fas fa-calendar-week"></i>
                                                    7 Dec 2020
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="far fa-comments"></i> 
                                            3 Comments
                                        </li>
                                    </ul>

                                    <h3>
                                        <Link href="/#">
                                            <a>
                                                I used the web for a day on a 50 mb budget
                                            </a>
                                        </Link>
                                    </h3>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

                                    <Link href="/#">
                                        <a className="read-more">
                                            Read More
                                            <i className="fa fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <Link href="/blog/#">
                                    <a className="prev page-numbers">
                                        <i className="fas fa-angle-double-left"></i>
                                    </a>
                                </Link>

                                <Link href="/blog/#">
                                    <a className="page-numbers">1</a>
                                </Link>

                                <span className="page-numbers current">2</span>

                                <Link href="/blog/#">
                                    <a className="page-numbers">3</a>
                                </Link>

                                <Link href="/blog/#">
                                    <a className="page-numbers">4</a>
                                </Link>

                                <Link href="/blog/#">
                                    <a className="next page-numbers">
                                        <i className="fas fa-angle-double-right"></i>
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

export default BlogCard;