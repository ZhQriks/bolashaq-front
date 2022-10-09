import React, { Component } from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";
import ru from "../../locales/ru/about.json";
import kk from "../../locales/kk/about.json";
import en from "../../locales/en/about.json";

export default function OurServices() {
    const { locale } = useRouter();
    const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

        return (
            <section className="team-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>{t.sections}</span>
                    </div>

                    <div className="row">
                        <Link href="/about-us/documents">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-team-item">

                                    <div className="team-content">
                                        <h3>{t.documents}</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/about-us/administration">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-team-item">

                                    <div className="team-content">
                                        <h3>{t.administration}</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/about-us/tour">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-team-item">

                                    <div className="team-content">
                                        <h3>{t.tour}</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/about-us/gallery">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-team-item">

                                    <div className="team-content">
                                        <h3>{t.gallery}</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>
        );
}
