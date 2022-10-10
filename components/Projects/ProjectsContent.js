import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ru from "../../locales/ru/projects.json";
import kk from "../../locales/kk/projects.json";
import en from "../../locales/en/projects.json";
import { API_BOlASHAQ } from "../../utils/consts";

export default function ProjectsContent() {
  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

  const [projects, setProjects] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(`${API_BOlASHAQ}/api/projects?populate=*`);
      const { data } = await res.json();
      setProjects(data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="project-section pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>{t.projects}</span>
          <h2>{t.our_projects}</h2>
        </div>

        <div className="row">
          {projects.map((project, index) => {
            return (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-project">
                  <div className="project-image">
                    <img
                      src={`${API_BOlASHAQ}${project.attributes.picture.data[0].attributes.url}`}
                      alt={project.attributes.title}
                      style={{ height: "300px" }}
                    />
                  </div>

                  <div className="image-hover">
                    <div className="text">
                      <h3>
                        <Link href="/projects">
                          <a>{project.attributes.title}</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
