import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import NavbarLight from "../components/Layouts/Navbar-light";
import PageBanner from "../components/Common/PageBanner";
import ProjectsContent from "../components/Projects/ProjectsContent";
import FunFacts from "../components/Common/FunFacts";
import GetStartedProject from "../components/Common/GetStartedProject";
import Customers from "../components/Common/Customers";
import SubscribeStyleThree from "../components/Common/SubscribeStyleThree";
import Footer from "../components/Layouts/Footer";
import { useRouter } from "next/router";
import ru from "../locales/ru/projects.json";
import kk from "../locales/kk/projects.json";
import en from "../locales/en/projects.json";
import Head from "next/head";

export default function Projects() {
  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Активные проекты Bolashaq Sarayi" />
      </Head>
      <NavbarLight />

      <PageBanner
        pageTitle={t.projects}
        breadcrumbTextOne="Home"
        breadcrumbTextTwo={t.projects}
        breadcrumbUrl="/"
        bgImage="banner-bg-img2"
      />

      <ProjectsContent />

      <FunFacts />

      <Footer />
    </>
  );
}
