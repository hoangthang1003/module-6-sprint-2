import React from "react";

export function Home() {

    return (
        <>

            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://shophero.vn/wp-content/uploads/2023/04/kh%E1%BB%95-ngang-%C4%91%E1%BB%93-ch%C6%A1i-minecraft-2048x779.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://shophero.vn/wp-content/uploads/2023/08/T%E1%BB%B0U-TR%C6%AF%E1%BB%9CNG-KHUY%E1%BA%BEN-M%E1%BA%A0I-KH%E1%BB%94-NGANG-2048x796.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://shophero.vn/wp-content/uploads/2023/05/KH%E1%BB%94-NGANG-%C3%81O-HERO-TEAM-M%C3%94-H%C3%8CNH-HERO-TEAM-1-2048x779.png"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <section className="section hide-for-medium" id="section_1753711110">
                <div className="bg section-bg fill bg-fill  bg-loaded"></div>
                <div className="section-content relative  container">
                    <div className="row" id="row-1682862059">
                        <div id="col-1682195949" className="col medium-4 small-12 large-4">
                            <div className="col-inner">
                                <div className="icon-box featured-box icon-box-center text-center">
                                    <div
                                        className="icon-box-img"
                                        style={{width: "auto", marginBottom: 10}}
                                    >
                                        <div className="icon">
                                            <div className="icon-inner">
                                                <img
                                                    width={55}
                                                    height={55}
                                                    src="https://shophero.vn/wp-content/uploads/2020/08/hotro1.jpg"
                                                    className="attachment-medium size-medium"
                                                    alt=""
                                                />{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icon-box-text last-reset">
                                        <h3 style={{textAlign: "center"}}>
                  <span
                      style={{
                          fontFamily: "arial, helvetica, sans-serif",
                          color: "#ff0000"
                      }}
                  >
                    CAM KẾT CHÍNH HÃNG
                  </span>
                                        </h3>
                                        <p style={{textAlign: "center"}}>
                  <span
                      style={{
                          fontFamily: "arial, helvetica, sans-serif",
                          color: "#000000"
                      }}
                  >
                    <strong>100% Authentic</strong>
                  </span>
                                        </p>
                                        <p style={{textAlign: "center"}}>
                  <span
                      style={{
                          fontFamily: "arial, helvetica, sans-serif",
                          color: "#000000"
                      }}
                  >
                    Cam kết sản phẩm chính hãng chất lượng đảm bảo….
                  </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="col-1572491502" className="col medium-4 small-12 large-4">
                            <div className="col-inner">
                                <div className="icon-box featured-box icon-box-center text-center">
                                    <div
                                        className="icon-box-img"
                                        style={{width: "auto", marginBottom: 10}}
                                    >
                                        <div className="icon">
                                            <div className="icon-inner">
                                                <img
                                                    width={55}
                                                    height={55}
                                                    src="https://shophero.vn/wp-content/uploads/2020/08/giaohang.jpg"
                                                    className="attachment-medium size-medium"
                                                    alt=""
                                                />{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icon-box-text last-reset">
                                        <h3 style={{textAlign: "center"}}>
                  <span
                      style={{
                          fontFamily: "arial, helvetica, sans-serif",
                          color: "#ff0000"
                      }}
                  >
                    GIAO HÀNG HỎA TỐC
                  </span>
                                        </h3>
                                        <p style={{textAlign: "center"}}>
                                            Giao hàng nhanh chóng, tiện lợi
                                        </p>
                                        <p style={{textAlign: "center"}}>&nbsp;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="col-1753613048" className="col medium-4 small-12 large-4">
                            <div className="col-inner">
                                <div className="icon-box featured-box icon-box-center text-center">
                                    <div
                                        className="icon-box-img"
                                        style={{width: "auto", marginBottom: 10}}
                                    >
                                        <div className="icon">
                                            <div className="icon-inner" style={{color: "rgb(0, 0, 0)"}}>
                                                <img
                                                    width={55}
                                                    height={55}
                                                    src="https://shophero.vn/wp-content/uploads/2020/08/hotro.jpg"
                                                    className="attachment-medium size-medium"
                                                    alt=""
                                                />{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icon-box-text last-reset">
                                        <h3 style={{textAlign: "center"}}>
                  <span
                      style={{
                          fontFamily: "arial, helvetica, sans-serif",
                          color: "#ff0000"
                      }}
                  >
                    HỖ TRỢ 24/24
                  </span>
                                        </h3>
                                        <p style={{textAlign: "center"}}>
                  <span
                      style={{
                          fontFamily: "arial, helvetica, sans-serif",
                          color: "#000000"
                      }}
                  >
                    <strong>Supporting 24/24</strong>
                  </span>
                                        </p>
                                        <p style={{textAlign: "center"}}>
                  <span
                      style={{
                          fontFamily: "arial, helvetica, sans-serif",
                          color: "#000000"
                      }}
                  >
                    Gọi ngay 0961 853 353
                  </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                <section className="service-policy-area section-space container">
                    <div className="container mt-5">
                        <div className="d-flex">
                            <div className="col-lg-2 mx-4 px-0">
                                <a href="">
                                    <img
                                        src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/slider_1.jpg?1673312669282"
                                        className="d-block w-100  h-100 img-producer"
                                        alt="..."
                                    />
                                </a>
                            </div>
                            <div className="col-lg-2 mx-4 px-0">
                                <a href="">
                                    <img
                                        src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/slider_1.jpg?1673312669282"
                                        className="d-block w-100 h-100 img-producer"
                                        alt="..."
                                    />
                                </a>
                            </div>
                            <div className="col-lg-2 mx-4 px-0">
                                <a href="">
                                    <img
                                        src="https://bizweb.dktcdn.net/100/376/467/themes/790294/assets/slider_3.jpg?1673312669282"
                                        className="d-block w-100 h-100 img-producer"
                                        alt="..."
                                    />
                                </a>
                            </div>
                            <div className="col-lg-2 mx-4 px-0">
                                <a href="">
                                    <img
                                        src="https://theme.hstatic.net/200000384051/1000742014/14/home_brand_image_4.jpg?v=1609"
                                        className="d-block w-100 h-100 img-producer"
                                        alt="..."
                                    />
                                </a>
                            </div>
                            <div className="col-lg-2 mx-4 px-0">
                                <a href="">
                                    <img
                                        src="https://theme.hstatic.net/200000384051/1000742014/14/home_brand_image_7.jpg?v=1609"
                                        className="d-block w-100 h-100 img-producer"
                                        alt="..."
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}