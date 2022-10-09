import React, { useState } from "react";

const Tabs = ({ active, onChange, children }) => {
  //create function classNames to add classnames
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <>
      <section className="team-section pt-100 pb-70 ">
        <div className="container">
          <div className="row">
            {children.map((c, index) => (
              <div
                className={classNames(
                  active === index ? "activeTab" : "",
                  "col-lg-3 col-sm-6 flex-row"
                )}
                style={{ cursor: "pointer" }}
                key={index}
                onClick={() => onChange(index)}
              >
                <div className="single-team-item">
                  <div className="team-content">
                    <h3>{c.props.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>{children[active]}</div>
        </div>
      </section>
    </>
  );
};

export default Tabs;
