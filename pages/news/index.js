import React, { Component, useState } from "react";
import Navbar from "../../components/Layouts/Navbar";
import NavbarLight from "../../components/Layouts/Navbar-light";
import PageBanner from "../../components/Common/PageBanner";
import BlogCardTwo from "../../components/Blog/BlogCardTwo";
import Footer from "../../components/Layouts/Footer";
import { useRouter } from "next/router";
import ru from "../../locales/ru/news.json";
import kk from "../../locales/kk/news.json";
import en from "../../locales/en/news.json";
import Head from "next/head";

export default function News(props) {
  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

  return (
    <>
      <Head>
        <title>News</title>
        <meta name="description" content="Новости Bolashaq Sarayi" />
      </Head>
      <NavbarLight />

      <PageBanner
        pageTitle={t.news}
        breadcrumbTextOne="Home"
        breadcrumbTextTwo={t.news}
        breadcrumbUrl="/"
        bgImage="banner-bg-img4"
      />

      <BlogCardTwo />

      <Footer />
    </>
  );
}
