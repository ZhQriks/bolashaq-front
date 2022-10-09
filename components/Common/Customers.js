import React, { Component } from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";
import ru from "../../locales/ru/common.json";
import kk from "../../locales/kk/common.json";
import en from "../../locales/en/common.json";

export default function FeaturedService() {
    const { locale } = useRouter();
    const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

        return (
            <div className="partner-section pt-100 pb-70">
                <div className="container">
                    <div className="partner-title">
                        <h2>{t.our_partners}</h2>
                    </div>

                    <div className="partner-list row justify-content-center">
                        {/*<div className="partner-item">*/}
                        {/*    <Link href="/partner">*/}
                        {/*        <a>*/}
                        {/*            <img className='miras-short' src="/images/partner/partner1.png" alt="image" />*/}
                        {/*        </a>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}

                        <div className="partner-item">
                            <Link href="#">
                                <a>
                                    <img className='miras-short' src="/images/partner/1-removebg-preview.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        {/*<div className="partner-item">*/}
                        {/*    <Link href="/partner">*/}
                        {/*        <a>*/}
                        {/*            <img className='miras-short' src="/images/partner/partner3.png" alt="image" />*/}
                        {/*        </a>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}

                        <div className="partner-item">
                            <Link href="#">
                                <a>
                                    <img className='miras-s' src="/images/partner/4062f2e638fc72d2a74c9e0c9fff1a08_original.127362-removebg-preview.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        {/*<div className="partner-item">*/}
                        {/*    <Link href="/partner">*/}
                        {/*        <a>*/}
                        {/*            <img className='miras-short' src="/images/partner/partner5.png" alt="image" />*/}
                        {/*        </a>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}

                        {/*<div className="partner-item">*/}
                        {/*    <Link href="/partner">*/}
                        {/*        <a>*/}
                        {/*            <img className='miras-short' src="/images/partner/partner5.png" alt="image" />*/}
                        {/*        </a>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}

                        <div className="partner-item">
                            <Link href="#">
                                <a>
                                    <img className='miras-short' src="/images/partner/unnamed-removebg-preview.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        {/*<div className="partner-item">*/}
                        {/*    <Link href="/partner">*/}
                        {/*        <a>*/}
                        {/*            <img className='miras-short' src="/images/partner/partner7.png" alt="image" />*/}
                        {/*        </a>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}

                        {/*<div className="partner-item">*/}
                        {/*    <Link href="/partner">*/}
                        {/*        <a>*/}
                        {/*            <img className='miras-short' src="/images/partner/partner8.png" alt="image" />*/}
                        {/*        </a>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className="partner-shape">
                    <img src="/images/shape/partnar-shape-1.png" alt="main-image" />
                </div>
                <div className="partner-shape-img1">
                    <img src="/images/shape/partnar-shape-2.png" alt="image" />
                </div>
            </div>
        );
}
