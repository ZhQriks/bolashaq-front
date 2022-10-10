import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import BlogSideBar from "./BlogSideBar";
import { useRouter } from "next/router";
import ru from "../../locales/ru/news.json";
import kk from "../../locales/kk/news.json";
import en from "../../locales/en/news.json";
import { API_BOlASHAQ } from "../../utils/consts";
import ReactPaginate from "react-paginate";

export default function BlogCardTwo() {
  const router = useRouter();
  let { page } = router.query;
  let searchQuery = router.query["search"];

  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(0);

  const { locale } = useRouter();
  const t = locale === "ru" ? ru : locale === "kk" ? kk : en;

  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    if (page === undefined) {
      page = 1;
    }
    try {
      await fetchNews();
      await handlePageClick();
    } catch (err) {}
  };
  const fetchNews = async () => {
    const res = await fetch(
      `${API_BOlASHAQ}/api/news-posts?populate=*&pagination[page]=${page}&pagination[pageSize]=4` +
        (searchQuery ? `&_q=${searchQuery}` : "")
    );
    if (searchQuery) {
      setSearch(searchQuery);
    }
    const response = await res.json();
    setPageCount(response.meta.pagination.pageCount);
    if (response.data.length > 0) {
      setNews(response.data);
    }
  };

  const handlePageClick = async (data) => {
    await router.push(
      `/news?page=${data.selected + 1}` + (search ? `&search=${search}` : "")
    );
  };

  const handleSearch = async (e) => {
    //make a full text search
    e.preventDefault();
    if (search === "") {
      const res = await fetch(`
    ${API_BOlASHAQ}/api/news-posts?populate=*&pagination[page]=1&pagination[pageSize]=4`);
      const response = await res.json();
      setNews(response.data);
      setPageCount(response.meta.pagination.pageCount);
      return router.push(`/news?page=${page}`);
    }
    const res = await fetch(`
    ${API_BOlASHAQ}/api/news-posts?populate=*&pagination[pageSize]=4&_q=${search}`);
    const response = await res.json();
    router.push(`/news?page=1&search=${search}`, undefined, {
      shallow: true,
    });
    page = 1;
    setPageCount(response.meta.pagination.pageCount);
    setNews(response.data);
  };

  const handleSearchChange = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <section className="blog-section ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {news.map((news, index) => {
                return (
                  <div className="col-lg-6 col-md-6" key={index}>
                    <div className="blog-item">
                      <Link href={`/news/${news.id}`}>
                        <a>
                          <img
                            src={`${API_BOlASHAQ}${news.attributes.picture.data[0].attributes.url}`}
                            alt="image"
                            style={{ height: "340px", width: "100%" }}
                          />
                        </a>
                      </Link>

                      <div className="blog-content">
                        <ul className="meta-tags">
                          <li>
                            <Link href="/news/index">
                              <a>
                                <i className="fas fa-calendar-week"></i>
                                {news.attributes.date}
                              </a>
                            </Link>
                          </li>
                        </ul>

                        <h3>
                          <Link href="/news/index">
                            <a>{news.attributes.title}</a>
                          </Link>
                        </h3>

                        <p>{news.attributes.details}</p>

                        <Link href={`/news/${news.id}`}>
                          <a className="read-more">
                            {t.read_more}
                            <i className="fa fa-chevron-right"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {pageCount > 1 && news && (
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={pageCount}
                forcePage={page - 1}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination-area col-lg-12 col-md-12"}
                pageClassName={"page-numbers"}
                activeClassName={"current"}
                previousClassName={"prev page-numbers"}
                nextClassName={"next page-numbers"}
                breakClassName={"page-numbers"}
              />
            )}
          </div>

          <div className="col-lg-4">
            <aside className="widget-area">
              <div className="widget widget_search">
                <form
                  className="search-form search-top"
                  onSubmit={handleSearch}
                >
                  <label>
                    <span className="screen-reader-text">Search for:</span>
                    <input
                      type="search"
                      className="search-field"
                      placeholder={t.search}
                      value={search}
                      // onChange={(e) => setSearch(e.target.value)}
                      onChange={(e) => handleSearchChange(e)}
                    />
                  </label>

                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
