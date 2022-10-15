import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ru from "../../locales/ru/common.json";
import kk from "../../locales/kk/common.json";
import en from "../../locales/en/common.json";

export default function FeaturedService() {
  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;
  const [clubs, setClubs] = React.useState([]);

  const getShortenDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  const fetchData = async () => {
    try {
      const res = await fetch(`/galam/publication/club?limit=6&page=0`);
      const { result } = await res.json();
      setClubs(result);
    } catch (err) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="services-section pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>{t.clubs}</h2>
        </div>

        <div className="row">
          {clubs.map((club, index) => {
            return (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="blog-item shadow">
                  <a>
                    <img
                      className="miras-medium"
                      src={`http://api.galam.life:8080/api/v2/document/${club.club.photo.fileUrl}`}
                      alt={"image"}
                    />
                  </a>

                  <div className="blog-content">
                    <ul className="meta-tags">
                      <li>
                        <Link href="/#">
                          <a>
                            <i className="fa fa-user-alt"></i>
                            {club.club_tutors[0]
                              ? club.club_tutors[0].client.profile.firstname
                              : ""}{" "}
                            {club.club_tutors[0]
                              ? club.club_tutors[0].client.profile.lastname
                              : ""}
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#">
                          <a>
                            <i className="fas fa-calendar-week"></i>
                            {getShortenDate(club.end_date)}
                          </a>
                        </Link>
                      </li>
                    </ul>

                    <h3>
                      <a>{club.club.name}</a>
                    </h3>

                    <p>
                      {club.club.description.split(" ").slice(0, 10).join(" ")}
                    </p>

                    <Link href="/club">
                      <a className="read-more">
                        Details
                        <i className="fa fa-chevron-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          {clubs.length === 0 && (
            <div>
              <h2 style={{ textAlign: "center" }}>Клубы уже скоро!</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
