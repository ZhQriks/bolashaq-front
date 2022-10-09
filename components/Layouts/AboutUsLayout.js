import React from "react";
import NavbarLight from "./Navbar-light";
import PageBanner from "../Common/PageBanner";
import Customers from "../Common/Customers";
import Footer from "./Footer";
import { useRouter } from "next/router";
import ru from "../../locales/ru/about.json";
import kk from "../../locales/kk/about.json";
import en from "../../locales/en/about.json";

export default function AboutTemplate({ title, children }) {
  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

  return (
    <>
      <NavbarLight />

      <PageBanner
        pageTitle={t.about_us}
        breadcrumbTextOne="Home"
        breadcrumbTextTwo={t.about_us}
        breadcrumbUrl="/"
        bgImage="banner-bg-img1"
      />

      {children}

      <Customers />

      <Footer />
    </>
  );
}
