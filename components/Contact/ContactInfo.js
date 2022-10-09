import React, { Component } from "react";
import { useRouter } from "next/router";
import ru from "../../locales/ru/contact.json";
import kk from "../../locales/kk/contact.json";
import en from "../../locales/en/contact.json";

export default function ContactInfo() {
  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;
  return (
    <div className="contact-box pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-contact-box">
              <i className="fa fa-map-marker"></i>
              <div className="content-title">
                <h3>{t.address}</h3>
                <p>{t.street}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-contact-box">
              <i className="fa fa-envelope"></i>
              <div className="content-title">
                <h3>{t.email}</h3>
                <p>bsaqmola@mail.ru</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
            <div className="single-contact-box">
              <i className="fa fa-phone"></i>
              <div className="content-title">
                <h3>{t.phone}</h3>
                <p>+7 716 251 01 37</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
