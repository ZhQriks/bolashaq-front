import React, { Component, useEffect } from "react";
import Link from "../../utils/ActiveLink";
import { useRouter } from "next/router";
import ru from "../../locales/ru/Navbar.json";
import kk from "../../locales/kk/Navbar.json";
import en from "../../locales/en/Navbar.json";

export default function NavbarLight() {
  const router = useRouter();

  const t = router.locale === "ru" ? ru : router.locale === "kk" ? kk : en;
  // Navbar
  const [collapsed, setCollapsed] = React.useState(true);
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };
  if (typeof window !== "undefined") {
    useEffect(() => {
      let elementId = document.getElementById("navbar");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 170) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      });
      window.scrollTo(0, 0);
    }, []);
  }

  const russianLunguage = () => {
    const currentUrl = router.asPath;
    router.push(currentUrl, currentUrl, { locale: "ru" });
  };

  const kazakhLunguage = () => {
    const currentUrl = router.asPath;
    router.push(currentUrl, currentUrl, { locale: "kk" });
  };

  const englishLunguage = () => {
    //get the current url
    const currentUrl = router.asPath;
    router.push(currentUrl, currentUrl, { locale: "en" });
  };

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src="/images/Mirasss_logos.svg"
                    className="white-logo"
                    alt="logo"
                  />
                  <img
                    src="/images/Mirasss_logos.svg"
                    className="black-logo"
                    alt="logo"
                  />
                </a>
              </Link>

              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="dropdown-container">
                  <a className="dropdown-title">{router.locale}</a>
                  <i className="dropdown-toggle dropdown-title"></i>
                  <div className="dropdown-menu-content">
                    <ul aria-labelledby="dropdownMenuLink">
                      <li>
                        <a className="nav-link" onClick={russianLunguage}>
                          RU
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" onClick={englishLunguage}>
                          EN
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" onClick={kazakhLunguage}>
                          KZ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  onClick={toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>
              </div>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link light">{t.home}</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a className="nav-link light">{t.about_us}</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/club" activeClassName="active">
                      <a className="nav-link light">{t.clubs}</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/projects" activeClassName="active">
                      <a className="nav-link light">{t.projects}</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/news?page=1" activeClassName="active">
                      <a className="nav-link light">{t.blog}</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className=" nav-link light">{t.contact_us}</a>
                    </Link>
                  </li>
                  <li className="nav-item dropdown ">
                    {/*<div className="dropbtn">{router.locale}</div>*/}
                    <a className="btn mIRAS-btn-weight dropdown-toggle light">
                      {router.locale}
                    </a>
                    <div className="dropdown-content pe-auto">
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <a
                            className="nav-link light"
                            onClick={russianLunguage}
                          >
                            RU
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link light"
                            onClick={englishLunguage}
                          >
                            EN
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link light"
                            onClick={kazakhLunguage}
                          >
                            KZ
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>

                {/*<div className="others-options">*/}
                {/*    <Link href="/contact">*/}
                {/*        <a className="default-btn">*/}
                {/*            {t.enroll}*/}
                {/*            <span></span>*/}
                {/*        </a>*/}
                {/*    </Link>*/}
                {/*</div>*/}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
