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

class Index extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Bolashaq Sarayi</title>
          <meta
            name="description"
            content="ГКП на ПХВ BOLASHAQ SARAIY при УО Акмолинской области"
          />
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
}

export default Index;
