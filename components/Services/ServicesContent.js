import React, {Component, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";
import ru from "../../locales/ru/common.json";
import kk from "../../locales/kk/common.json";
import en from "../../locales/en/common.json";

export default function FeaturedService() {
    const {locale} = useRouter();
    const t = locale === "ru" ? ru : locale === "kk" ? kk : en;
    const [clubs, setClubs] = React.useState([]);
    useEffect(async () => {
        try {
            const res = await fetch(`http://api.galam.life:3000/api/v1/publication/club?limit=6&page=0`);
            const {result} = await res.json();
            setClubs(result);
        } catch (err) {
            console.log(err);
        }
    }, [])
    return (
        <section className="services-section pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>{t.clubs}</h2>
                </div>

                <div className="row">
                    {
                        clubs.map((club, index) => {
                            return <div className="col-lg-4 col-md-6" key={index}>
                                <div className="single-services-box">
                                    <div className="icon">
                                        <i className="flaticon-data-management"></i>
                                    </div>
                                    <h3>{club.club.name}</h3>
                                        <p>{club.club.description}</p>

                                    <Link href="/service-details">
                                        <a className="service-btn">
                                            {club.club_tutors[0].client.profile.firstname} {club.club_tutors[0].client.profile.lastname}
                                            <i className="flaticon-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    );
}
