import React, { useEffect, useState } from "react";
import Link from "next/link";

import ru from "../../locales/ru/common.json";
import kk from "../../locales/kk/common.json";
import en from "../../locales/en/common.json";
import { useRouter } from "next/router";

export default function OurServices() {
  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;
  const [clubs, setClubs] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(`/galam/publication/club?limit=3&page=0`);
      const { result } = await res.json();
      setClubs(result);
    } catch (err) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="services-section pt-50 pb-70">
      <div className="container">
        <div className="section-title">
          <span>{t.clubs}</span>
          <h2>{t.our_clubs}</h2>
        </div>

        <div className="row">
          {clubs.length === 0 && (
            <div>
              <h2 style={{ textAlign: "center" }}>
                Уже скоро опубликуем клубы/кружки!
              </h2>
            </div>
          )}
          {clubs.map((club, index) => {
            return (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-services-box">
                  <div className="icon">
                    <i className="flaticon-data-management"></i>
                  </div>
                  <h3>{club.club.name}</h3>
                  <p>
                    {club.club.description.split(" ").slice(0, 15).join(" ")}
                  </p>

                  <Link href="/service-details">
                    <a className="service-btn">
                      {club.club_tutors[0]
                        ? club.club_tutors[0].client.profile.firstname
                        : ""}{" "}
                      {club.club_tutors[0]
                        ? club.club_tutors[0].client.profile.lastname
                        : ""}
                      <i className="flaticon-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
