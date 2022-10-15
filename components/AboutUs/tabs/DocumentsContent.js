import React, { useEffect, useState } from "react";

export default function DocumentsContent() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/documents?populate=*`);
      const { data } = await res.json();
      setProjects(data);
    } catch (err) {}
  };

  return (
    <section className="project-section pt-50 pb-70">
      <div className="container">
        <div className="row">
          {projects.map((project, index) => {
            return (
              //redirect to the document page
              <a
                key={index}
                target="_blank"
                href={`/image/${project.attributes.file.data.attributes.url}`}
              >
                <div className="col-lg-12 col-md-12">
                  <div className="single-file">
                    <div className="single-file-main">
                      <i className="fa fa-file"></i>
                      <h3>{project.attributes.title}</h3>
                    </div>
                    <div className="single-file-more">
                      <i className="fa fa-ellipsis-h"></i>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
