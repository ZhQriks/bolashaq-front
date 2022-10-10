import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ru from "../../locales/ru/about.json";
import kk from "../../locales/kk/about.json";
import en from "../../locales/en/about.json";
import Tabs from "../../components/AboutUs/Tabs";
import Tab from "../../components/AboutUs/Tab";
import AboutUsLayout from "../../components/Layouts/AboutUsLayout";
import { getAboutUsPage } from "../../utils/consts";
import DocumentsContent from "../../components/AboutUs/tabs/DocumentsContent";
import GalleryContent from "../../components/AboutUs/tabs/GalleryContent";
import AdministrationContent from "../../components/AboutUs/tabs/AdministrationContent";
import Head from "next/head";

export default function AboutUs({ children }) {
  const router = useRouter();
  const [active, setActive] = useState(0);

  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

  useEffect(() => {
    //redirect to administration page
    handleRedirect();
  }, []);

  const handleRedirect = () => {
    return router.push("/about-us/administration");
  };
  const handleChange = (newActive) => {
    setActive(newActive);
  };

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Подбробнее о Bolashaq Sarayi" />
      </Head>
      <AboutUsLayout title="about">
        <Tabs active={active} onChange={handleChange}>
          <Tab title={t.administration}>
            <AdministrationContent />
          </Tab>
          <Tab title={t.documents}>
            <DocumentsContent />
          </Tab>
          <Tab title={t.gallery}>
            <GalleryContent />
          </Tab>
          <Tab title={t.tour}>
            <h1 style={{ textAlign: "center" }}>3D Тур уже скоро!</h1>
          </Tab>
        </Tabs>
      </AboutUsLayout>
    </>
  );
}
