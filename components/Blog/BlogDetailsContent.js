import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import BlogSideBar from "./BlogSideBar";
import { useRouter } from "next/router";
import Head from "next/head";

export default function BlogDetailsContent() {
  const [post, setPost] = useState({ title: "", details: "" });
  const [picture, setPicture] = useState("");

  const router = useRouter();
  const newsId = router.query.newsId;

  const getShortenDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  const fetchData = async (id) => {
    if (id) {
      try {
        //get page from query
        const res = await fetch(`/api/news-posts/${newsId || 1}?populate=*`);

        const response = await res.json();
        setPicture(response.data.attributes.picture.data[0].attributes.url);
        setPost(response.data.attributes);
        //if response is not found redirect to 404
      } catch (err) {
        router.push("/news?page=1");
      }
    }
  };

  useEffect(() => {
    fetchData(newsId);
  }, [newsId]);

  return (
    <>
      <Head>
        <title>{post.title ? post.title : "News details"}</title>
        <meta property="og:title" content={`${post.title}`} />
        <meta property="og:description" content={`${post.details}`} />
      </Head>
      <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img
                    src={`/image/${picture}`}
                    alt="image"
                    className="col-lg-8"
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted on:</span>
                        {getShortenDate(post.publishedAt)}
                      </li>
                    </ul>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
