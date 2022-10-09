import React, { Component } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ru from "../../locales/ru/footer.json";
import kk from "../../locales/kk/footer.json";
import en from "../../locales/en/footer.json";
import ruCommon from "../../locales/ru/common.json";
import kk1Common from "../../locales/kk/common.json";
import en1Common from "../../locales/en/common.json";

export default function FeaturedService() {
  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;
  const t1 =
    locale === "ru" ? ruCommon : locale === "kk" ? kk1Common : en1Common;
  let currentYear = new Date().getFullYear();
  return (
    <>
      {/* Top Footer Section */}
      <footer className="footer-section ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>{t1.about_us}</h3>
                </div>
                <p>{t1.tagline_info}</p>

                <ul className="footer-social">
                  <li>
                    <Link href="https://www.facebook.com/Bsaqmola">
                      <a target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="https://www.instagram.com/bs_aqmola/">
                      <a target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="https://www.youtube.com/channel/UCho9-OqZYnnaxiOyAJZFK3w">
                      <a target="_blank">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>{t.virtual_reception}</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/about-us">{t.virtual_reception_info}</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>{t.timetable}</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/">{t.timetable_info}</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>{t.contacts}</h3>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-call-answer"></i>
                  <h3>Phone</h3>
                  <span>{t.phone}</span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-envelope"></i>
                  <h3>Email</h3>
                  <span>{t.email}</span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-maps-and-flags"></i>
                  <span>{t.street}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="partner-shape-img1">
          <img src="/images/shape/partnar-shape-2.png" alt="image" />
        </div>
      </footer>
      {/* End Top Footer Section */}

      {/* Bottom Footer Section */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>&copy; {currentYear} Bolashaq Saraiy</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Bottom Footer Section */}
    </>
  );
}
