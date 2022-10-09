import React, { Component } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ru from "../../locales/ru/news.json";
import kk from "../../locales/kk/news.json";
import en from "../../locales/en/news.json";

export default function BlogSideBar() {
  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

  return (
    <aside className="widget-area">
      <div className="widget widget_search">
        <form className="search-form search-top">
          <label>
            <span className="screen-reader-text">Search for:</span>
            <input
              type="search"
              className="search-field"
              placeholder={t.search}
            />
          </label>

          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </aside>
  );
}
