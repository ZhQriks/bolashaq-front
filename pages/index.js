import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import OurServices from "../components/HomeOne/OurServices";
import AboutUs from "../components/HomeOne/AboutUs";
import FunFacts from "../components/Common/FunFacts";
import FeaturedService from "../components/HomeOne/FeaturedService";
import Customers from "../components/Common/Customers";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import ru from "../locales/ru/common.json";
import kk from "../locales/kk/common.json";
import en from "../locales/en/common.json";

export default function Index() {
  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta
          name="description"
          content="ГКП на ПХВ BOLASHAQ SARAIY при УО Акмолинской области.
           «Bolashaq saraiy» позволит учащимся и студентам развивать свои
           способности и таланты в области искусства, спорта, научно-технического и IT направлений!"
        />
        <meta
          name="keywords"
          content="Болашак,Кружки,Программирование,Спортивные секций, Кружки кокшетау, Кокшетау"
        />
        <meta name="og:title" content="BOLASHAQ SARAIY" />
      </Head>
      <Navbar />

      <MainBanner />

      <OurServices />

      <AboutUs />

      <FunFacts />

      <div className="pb-100 mt-5">
        <FeaturedService />
      </div>

      <Customers />

      <Footer />
    </>
  );
}
