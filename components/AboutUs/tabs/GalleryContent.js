import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import Modal from "react-modal";

export default function GalleryContent() {
  const [modalPicture, setModalPicture] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();
  let { page } = router.query;

  const openModal = (picture) => {
    setModalPicture(picture);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [pageCount, setPageCount] = useState(0);

  const [news, setNews] = useState([]);

  const fetchData = async () => {
    if (page === undefined) {
      router.push(`/about-us/gallery?page=${1}`);
      page = 1;
    } else {
      try {
        //get page from query
        const res = await fetch(
          `/api/galleries?populate=*&pagination[page]=${page}&pagination[pageSize]=6`
        );

        const response = await res.json();

        setPageCount(response.meta.pagination.pageCount);
        setNews(response.data);

        await handlePageClick();
      } catch (err) {}
    }
  };

  useEffect(() => {
    //wait for page to load
    fetchData();
  }, [page]);

  const handlePageClick = async (data) => {
    await router.push(`/about-us/gallery?page=${data.selected + 1}`);
  };

  return (
    <section className="blog-section ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {news.map((news, index) => {
                return (
                  <div className="col-lg-4 col-md-4" key={index}>
                    <div
                      className="blog-item"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        openModal(
                          `/image/${news.attributes.picture.data.attributes.url}`
                        )
                      }
                    >
                      <a>
                        <img
                          src={`/image/${news.attributes.picture.data.attributes.url}`}
                          alt="image"
                          style={{ height: "340px", width: "100%" }}
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            {pageCount > 1 && (
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
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="custom-modal"
      >
        <div className="modal-header">
          <i className="fa fa-window-close" onClick={closeModal}></i>
        </div>
        <div className="modal-content">
          <img src={modalPicture} alt={modalPicture} />
        </div>
      </Modal>
    </section>
  );
}
