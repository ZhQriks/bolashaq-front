import React, { Component, useState } from "react";
import { useRouter } from "next/router";
import ru from "../../locales/ru/about.json";
import kk from "../../locales/kk/about.json";
import en from "../../locales/en/about.json";
import Tabs from "./Tabs";
import Tab from "./Tab";
import DocumentsContent from "./tabs/documents";

export default function MainTabs() {
  const [active, setActive] = useState(0);
  const handleChange = (newActive) => setActive(newActive);

  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

  return (
    <section className="software-section p-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="software-content">
              <Tabs active={active} onChange={handleChange}>
                <Tab title="Administration">
                  <DocumentsContent />
                </Tab>
                <Tab title="Documents">Documents</Tab>
                <Tab title="Gallery">Gallery</Tab>
                <Tab title="Tour">3D Tour</Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
