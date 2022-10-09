import React, { Component } from 'react';
import Link from 'next/link';
import ru from "../../locales/ru/common.json";
import kk from "../../locales/kk/common.json";
import en from "../../locales/en/common.json";
import {useRouter} from "next/router";

export default function AboutUs() {
    const { locale } = useRouter();
    const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

        return (
            <section className="about-section pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img className='miras-long' src="/images/undraw_Team_collaboration_re_ow29.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span></span>
                                <h2>{t.focused_learning}</h2>
                                <p>{t.focused_learning_info}</p>

                                <Link href="/about-us">
                                    <a className="default-btn">
                                        {t.contact_us} <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}
