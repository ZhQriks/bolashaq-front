import React, { Component } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ru from "../../locales/ru/common.json";
import kk from "../../locales/kk/common.json";
import en from "../../locales/en/common.json";

export default function MainBanner() {
  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;
  return (
    <div
      className="main-banner-two mIRAS-bg"
      style={{
        backgroundImage: "url(/images/home-one/banner.png)",
      }}
    >
      {/*<img src="/images/home-one/banner.png" alt="main-image"/>*/}
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title">
                  <h1 className="miras-h1">{t.tagline}</h1>
                  <p className="miras-text">{t.tagline_info}</p>
                  <div className="banner-btn">
                    <Link href="/about-us">
                      <a className="default-btn-one miras-btn">
                        {t.about_us}
                        <span></span>
                      </a>
                    </Link>

                    <Link href="/contact">
                      <a className="default-btn miras-btn" href="/contact">
                        {t.contact_us}
                        <span></span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              {/*<div className="col-lg-6 col-md-12">*/}
              {/*<div className="banner-image"> */}
              {/*    /!* Shape images *!/*/}
              {/*    <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>*/}
              {/*        <img src="/images/home-two/home-two-shape1.png" alt="image" />*/}
              {/*    </ScrollAnimation>*/}

              {/*    <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>*/}
              {/*        <img src="/images/home-two/home-two-shape2.png" alt="image" />*/}
              {/*    </ScrollAnimation>*/}

              {/*    <ScrollAnimation animateIn="fadeInRight" delay={50} animateOnce={true}>*/}
              {/*        <img src="/images/home-two/home-two-shape3.png" alt="image" />*/}
              {/*    </ScrollAnimation>*/}

              {/*    <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>*/}
              {/*        <img src="/images/home-two/home-two-shape4.png" alt="image" />*/}
              {/*    </ScrollAnimation>*/}

              {/*    <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>*/}
              {/*        <img src="/images/home-two/home-two-shape5.png" alt="image" />*/}
              {/*    </ScrollAnimation>*/}

              {/*    /!* Main image *!/*/}
              {/*    <ScrollAnimation animateIn="zoomIn" delay={50} animateOnce={true}>*/}
              {/*        <img src="/images/home-two/main-image2.png" alt="image" />*/}
              {/*    </ScrollAnimation>*/}
              {/*</div>*/}

              {/*<div className="circle-img">*/}
              {/*    <img src="/images/banner_img.png" alt="image"/>*/}
              {/*</div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>

      <div className="creative-shape">
        <img
          src="/images/main-banner-shape/home-shape-2.png"
          alt="main-image"
        />
      </div>
      <div className="shape-dot">
        <img
          src="/images/main-banner-shape/main-banner-dot.png"
          alt="main-image"
        />
      </div>
    </div>
  );
}
