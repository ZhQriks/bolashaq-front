import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import NavbarLight from "../components/Layouts/Navbar-light";
import PageBanner from "../components/Common/PageBanner";
import FeaturedService from "../components/Services/FeaturedService";
import ServicesContent from "../components/Services/ServicesContent";
import SubscribeStyleThree from "../components/Common/SubscribeStyleThree";
import Footer from "../components/Layouts/Footer";
import BlogPost from "../components/Common/BlogPost";
import { useRouter } from "next/router";
import ru from "../locales/ru/common.json";
import kk from "../locales/kk/common.json";
import en from "../locales/en/common.json";
import Head from "next/head";

export default function Club() {
  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

  return (
    <>
      <Head>
        <title>Clubs</title>
        <meta name="description" content="Кружки Bolashaq Sarayi" />
      </Head>
      <NavbarLight />

      <PageBanner
        pageTitle={t.clubs}
        breadcrumbTextOne="Home"
        breadcrumbTextTwo={t.clubs}
        breadcrumbUrl="/"
        bgImage="banner-bg-img4"
      />

      <FeaturedService />

      <BlogPost />

      <Footer className="pb-100" />
    </>
  );
}
