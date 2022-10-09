import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { API, API_BOlASHAQ } from "../../../utils/consts";

export default function AdministrationContent() {
  const [employees, setEmployees] = React.useState([]);
  useEffect(async () => {
    try {
      //get page from query
      const res = await fetch(`${API_BOlASHAQ}/api/employees?populate=*`);

      const response = await res.json();
      setEmployees(response.data);
    } catch (err) {}
  }, []);
  return (
    <section className="services-section pt-100 pb-70">
      <div className="container">
        <div className="row">
          {employees.map((employee, index) => {
            return (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="blog-item shadow">
                  <a>
                    <img
                      className="employee-image"
                      src={`${API_BOlASHAQ}${employee.attributes.photo.data.attributes.url}`}
                      alt={"image"}
                    />
                  </a>

                  <div className="blog-content administration-content">
                    <h3>
                      <a>
                        {employee.attributes.name} {employee.attributes.surname}
                      </a>
                    </h3>

                    <p>{employee.attributes.position}</p>
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
