import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import NavbarLight from "../components/Layouts/Navbar-light";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import SubscribeStyleThree from "../components/Common/SubscribeStyleThree";
import Footer from "../components/Layouts/Footer";
import { useRouter } from "next/router";
import ru from "../locales/ru/contact.json";
import kk from "../locales/kk/contact.json";
import en from "../locales/en/contact.json";
import Head from "next/head";

export default function Contact() {
  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Связь с администрацией Bolashaq Sarayi"
        />
      </Head>
      <NavbarLight />

      <PageBanner
        pageTitle={t.title}
        breadcrumbTextOne="Home"
        breadcrumbTextTwo={t.title}
        breadcrumbUrl="/"
        bgImage="banner-bg-img1"
      />

      <ContactInfo />

      <Footer />
    </>
  );
}
