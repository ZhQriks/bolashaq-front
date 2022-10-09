import React, { Component } from 'react';
import {useRouter} from "next/router";
import ru from "../../locales/ru/common.json";
import kk from "../../locales/kk/common.json";
import en from "../../locales/en/common.json";

export default function FeaturedService() {
    const { locale } = useRouter();
    const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

        return (
            <div className="subscribe-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="subscribe-content">
                                <h2>{t.newsletter}</h2>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <form className="newsletter-form">
                                <input type="email" className="input-newsletter" name="email" placeholder={t.subscribe} required />
                                <button type="submit">{t.subscribe}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
}