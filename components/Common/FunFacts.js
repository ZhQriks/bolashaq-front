import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ru from "../../locales/ru/common.json";
import kk from "../../locales/kk/common.json";
import en from "../../locales/en/common.json";
import {useRouter} from "next/router";
export default function FunFacts() {
    const { locale } = useRouter();
    const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

        return (
            <div className="fun-facts-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="single-fun-fact">
                                    <h3>
                                        1.2K
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p>{t.students}</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="single-fun-fact">
                                    <h3>
                                        150
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p>{t.staff}</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                <div className="single-fun-fact">
                                    <h3>
                                        78
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p>{t.clubs}</p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                <div className="single-fun-fact">
                                    <h3>
                                        28
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p>{t.achievements}</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        );
}
