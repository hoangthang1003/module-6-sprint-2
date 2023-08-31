import React, { useEffect, useState } from "react"
import productService from "../service/login/product/productService"
import {  useNavigate } from "react-router-dom"
export default function Home() {
    const [productSaleList, setProductSaleList] = useState([])
    
    const getProductSaleList = async () => {
        try {
            const res = await productService.productSaleList()
            console.log(res);
            setProductSaleList(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProductSaleList()
        document.title = "Trang Chủ";
    }, [])

    const navigate = useNavigate()
    const handleDetailProduct = (id)=>{
        navigate('/product/detail/' + id)
    }
    console.log(productSaleList);
    return (
        <>
            <div style={{ marginTop: 117 }}>
                {/* Carousel */}
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    {/* Indicators/dots */}
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide-to={0}
                            className="active"
                        />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://shophero.vn/wp-content/uploads/2023/08/T%E1%BB%B0U-TR%C6%AF%E1%BB%9CNG-KHUY%E1%BA%BEN-M%E1%BA%A0I-KH%E1%BB%94-NGANG-2048x796.jpg"
                                alt="New York"
                                className="d-block"
                                style={{ width: "100%", height: 600, backgroundSize: 'cover' }}
                            />


                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://shophero.vn/wp-content/uploads/2023/04/kh%E1%BB%95-ngang-%C4%91%E1%BB%93-ch%C6%A1i-minecraft-2048x779.jpg"
                                alt=""
                                className="d-block"
                                style={{ width: "100%", height: 600, backgroundSize: 'cover' }}
                            />

                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://shophero.vn/wp-content/uploads/2023/05/KH%E1%BB%94-NGANG-%C3%81O-HERO-TEAM-M%C3%94-H%C3%8CNH-HERO-TEAM-1-2048x779.png"
                                alt=""
                                className="d-block"
                                style={{ width: "100%", height: 600, backgroundSize: 'cover' }}
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" />
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" />
                    </button>
                </div>
            </div>
            <section className="service-policy-area section-space container">
                <div className='container mt-5'>
                    <div className="d-flex">
                        <div className="col-lg-2 mx-4 px-0">
                            <a href="">
                                <img src="https://shophero.vn/wp-content/uploads/2022/05/Lamborghini-pink-tinh-sy-8609-kenchinhhang-vn-4_1633332471-1.jpg"
                                    className="d-block w-100  h-100 img-producer" alt="..." />
                            </a>
                        </div>
                        <div className="col-lg-2 mx-4 px-0">
                            <a href="">
                                <img src="https://shophero.vn/wp-content/uploads/2022/07/%C4%90%E1%BB%93-ch%C6%A1i-l%E1%BA%AFp-r%C3%A1p-Si%C3%AAu-xe-th%E1%BB%83-thao-Koenigsegg-MOYU-88012-7.jpg"
                                    className="d-block w-100 h-100 img-producer" alt="..." />
                            </a>
                        </div>
                        <div className="col-lg-2 mx-4 px-0">
                            <a href="">
                                <img src="https://shophero.vn/wp-content/uploads/2022/06/do-choi-lap-rap-xe-cuu-ho-cyan-comet-sy-block-701962-3782-1-1.jpg"
                                    className="d-block w-100 h-100 img-producer" alt="..." />
                            </a>
                        </div>
                        <div className="col-lg-2 mx-4 px-0">
                            <a href="">
                                <img src="https://shophero.vn/wp-content/uploads/2022/02/%C4%90%E1%BB%93-ch%C6%A1i-l%E1%BA%AFp-r%C3%A1p-Xe-%C4%91ua-%C4%91%E1%BB%8Ba-h%C3%ACnh-Jeep-Wrangler-%E2%80%93-SY8203-8.jpg"
                                    className="d-block w-100 h-100 img-producer" alt="..." />
                            </a>
                        </div>
                        <div className="col-lg-2 mx-4 px-0">
                            <a href="">
                                <img src="https://shophero.vn/wp-content/uploads/2022/05/M%C3%B4-hi%CC%80nh-l%C4%83%CC%81p-ra%CC%81p-Xe-th%E1%BB%83-thao-Red-MOYU-BLOCK-88303-6.jpg"
                                    className="d-block w-100 h-100 img-producer" alt="..." />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-policy-area section-space container">
                <div ><h2 className='text-center bg-home text-secondary py-3'>SẢN PHẨM KHUYẾN MÃI</h2></div>
                <div className='container'>
                    <div id="carouselExampleControls" className="carousel carousel-dark slide " data-bs-ride="carousel">
                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <div className="row d-flex justify-content-center mt-3">
                                    {
                                        productSaleList.slice(0,4).map((element, index) => (
                                            <div className="col-lg-2 mx-4 px-0" key={index}>
                                                <div type='button' onClick={()=>handleDetailProduct(element.id)} className="card-1" >
                                                    <img src={element.imageName} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div>{
                                                            element.name.length > 20 ? <h6>{element.name.slice(0, 20)}...</h6> : <h6>{element.name}</h6>
                                                        }</div>
                                                        <p>
                                                                <span className='text-decoration-line-through'>{
                                                                    +element.capacityProductPrice === 0 ? "": 
                                                                    (+element.capacityProductPrice).toLocaleString(
                                                                        "vi-VN",
                                                                        { style: "currency", currency: "VND" }
                                                                    )
                                                                }</span>
                                                                <span className='text-danger fs-6 float-end fw-bold'>{
                                                                    (+element.capacityProductPriceSale).toLocaleString(
                                                                        "vi-VN",
                                                                        { style: "currency", currency: "VND" }
                                                                    )
                                                                }</span>
                                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row d-flex justify-content-center mt-3">
                                {
                                        productSaleList.slice(4).map((element, index) => (
                                            <div className="col-lg-2 mx-4 px-0" key={index}>
                                                <div type='button' onClick={()=>handleDetailProduct(element.id)} className="card-1" >
                                                    <img src={element.imageName} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <div>{
                                                            element.name.length > 20 ? <h6>{element.name.slice(0, 20)}...</h6> : <h6>{element.name}</h6>
                                                        }</div>
                                                        <p>
                                                                <span className='text-decoration-line-through'>{
                                                                    +element.capacityProductPrice === 0 ? "": 
                                                                    (+element.capacityProductPrice).toLocaleString(
                                                                        "vi-VN",
                                                                        { style: "currency", currency: "VND" }
                                                                    )
                                                                }</span>
                                                                <span className='text-danger fs-6 float-end fw-bold'>{
                                                                    (+element.capacityProductPriceSale).toLocaleString(
                                                                        "vi-VN",
                                                                        { style: "currency", currency: "VND" }
                                                                    )
                                                                }</span>
                                                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
            <hr className='mx-5 hr-dieucosmetics' />

            <div className="container px-0 mt-5">
                <div className="row mx-0 mt-2 mb-5 ms-5">
                    <div className="col-4">
                        <h4 style={{ color: 'GrayText', marginTop: 20 }}>
                            Đồ chơi lắp ráp mô hình Xe đua địa hình Jeep Wrangler SY BLOCK 8203 (xe kéo cót chạy đà)thiết kế đa dạng, đẹp mắt và nhiều mẫu hình khối đặc sắc giúp bé được vui chơi, phát triển khả năng sáng tạo của mình.                        </h4>
                    </div>
                    <div className="col-4">
                        <img
                            className="w-100 h-100 shadow"
                            src="https://shophero.vn/wp-content/uploads/2022/02/%C4%90%E1%BB%93-ch%C6%A1i-l%E1%BA%AFp-r%C3%A1p-Xe-%C4%91ua-%C4%91%E1%BB%8Ba-h%C3%ACnh-Jeep-Wrangler-%E2%80%93-SY8203-5.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-4">
                        <h4 style={{ textAlign: "center", color: 'GrayText', paddingTop: 20 }}>
                            Mô hình lắp ráp Siêu xe thể thao Apollo IE – MOYU 88301
                        </h4>
                        <h6 style={{
                            color: 'black',
                            lineHeight: 2,
                            fontFamily: '"Cormorant Infant", "serif"'
                        }}>
                            Đồ chơi lắp ghép Siêu xe thể thao Apollo IE – MOYU 88301 hình thành cho trẻ phản xạ chủ động tự nhận thức. Từ đó, trẻ thông minh hơn, phát triển trí não một cách toàn diện hơn.
                            Bộ sản phẩm giúp khơi gợi tính sáng tạo, trí tưởng tượng cũng như niềm đam mê các môn khoa học tự nhiên cho trẻ. Đồng thời, tăng tính tương tác giữa trẻ và bạn bè, ba mẹ, người thân.                        </h6>
                    </div>
                </div>
                <div className="shadow-cosmetics-1">
                    <div className="row mx-0 bg-home text-white ">
                        <div className="row container mx-0 px-0">
                            <div className="column col-6 px-0 figure" id="zoomIn">
                                <img className="w-100 h-100 " src="https://shophero.vn/wp-content/uploads/2022/05/M%C3%B4-hi%CC%80nh-l%C4%83%CC%81p-ra%CC%81p-Xe-th%E1%BB%83-thao-Red-MOYU-BLOCK-88303-7.jpg" />
                            </div>
                            <div className="col-6 mt-2" style={{background: "white"}}>
                                <h3 style={{ textAlign: "center", color: 'GrayText', paddingTop: 30 }}>Mô hình lắp ráp Siêu xe thể thao Apollo IE – MOYU 88301
                                </h3>
                                <h6 style={{
                                    color: 'black',
                                    lineHeight: 2,
                                    paddingTop: 20,
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    fontFamily: '"Cormorant Infant", "serif"',
                                    background: "white"
                                }}>
                                    Bộ sản phẩm giúp khơi gợi tính sáng tạo, trí tưởng tượng cũng như niềm đam mê các môn khoa học tự nhiên cho trẻ. Đồng thời, tăng tính tương tác giữa trẻ và bạn bè, ba mẹ, người thân.                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0 ">
                        <div className="row container mx-0 px-0 ">
                            <div className="col-6 mt-2 px-0" >
                                <h3 style={{ textAlign: "center", color: 'GrayText', paddingTop: 30 }}>Mô hình lắp ráp Siêu xe Technic Car 6in1 – CADA C52015W
                                </h3>
                                <h6 style={{
                                    color: 'black',
                                    lineHeight: 2,
                                    paddingTop: 10,
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    fontFamily: '"Cormorant Infant", "serif"'
                                }}>
                                    Bộ đồ chơi lắp ráp mô hình siêu xe Technic Car 6in1 chạy bằng dây cót kéo lùi được thiết kế thông minh, kích thích trí tưởng tượng và óc sáng tạo của trẻ em cũng như người lớn. Các chi tiết trong xe đều được sản xuất một cách chuẩn xác.</h6>                            </div>
                            <div className="col-6 px-0 column figure" id="zoomIn">
                                <img className="w-100 h-100 " src="https://shophero.vn/wp-content/uploads/2022/05/M%C3%B4-hi%CC%80nh-l%C4%83%CC%81p-ra%CC%81p-Si%C3%AAu-xe-Technic-Car-6in1-CADA-C52015W-4.jpg" style={{height: "100px!important"}}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <hr className='mx-5 hr-dieucosmetics mt-5' />

            <div className="container mt-5 py-5 mb-5" style={{background: "white"}}>
                <div className="row ">
                    <div className="col-lg-3 col-md-6 col-sm-6">

                        <div className="service-policy-item">
                            <div className="icons">
                                <img src="https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/free_shipping.png" alt=""/>
                            </div>
                            <div className="policy-terms">
                                <h5>Miễn Phí Giao Hàng</h5>
                                <p>Miễn phí giao hàng toàn quốc</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">

                        <div className="service-policy-item">
                            <div className="icons">
                                <img src="https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/support247.png" alt="" />
                            </div>
                            <div className="policy-terms">
                                <h5>Hỗ Trợ 24/7</h5>
                                <p>Hỗ trợ 24h trong 1 ngày</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">

                        <div className="service-policy-item">
                            <div className="icons">
                                <img src="https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/money_back.png" alt="" />
                            </div>
                            <div className="policy-terms">
                                <h5>Hoàn Trả Lại Tiền</h5>
                                <p>Hoàn trả lại tiền trong vòng 30 ngày</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">

                        <div className="service-policy-item">
                            <div className="icons">
                                <img src="https://demo.hasthemes.com/floda-preview/floda/assets/img/icon/promotions.png" alt="" />
                            </div>
                            <div className="policy-terms">
                                <h5>Giảm Giá Đặt Hàng</h5>
                                <p>Giảm giá 5% trên mỗi đơn hàng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}