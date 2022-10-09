import React, { Component } from 'react';
import {useRouter} from "next/router";
import ru from "../../locales/ru/common.json";
import kk from "../../locales/kk/common.json";
import en from "../../locales/en/common.json";

export default function FeaturedService() {
    const {locale} = useRouter();
    const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

        return (
            <section className="software-section pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="software-content">
                                <h2>{t.our_departments}</h2>

                                <ul className="features-list">
                                    <li>
                                        <span>{t.direction1}</span>
                                    </li>
                                    <li>
                                        <span>{t.direction2}</span>
                                    </li>
                                    <li>
                                        <span>{t.direction3}</span>
                                    </li>
                                    <li>
                                        <span>{t.direction4}</span>
                                    </li>
                                    <li>
                                        <span>{t.direction5}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="software-image">
                                <img src="/images/undraw_product_iteration_kjok.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}

