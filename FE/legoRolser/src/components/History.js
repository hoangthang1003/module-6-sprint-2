import {Field, Form, Formik} from "formik"
import {useEffect, useState} from "react"
import customerService from "../service/login/customer/customerService"
import loginService from './../service/login/loginService';
import {NavLink, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {format} from "date-fns";
import {useContext} from "react";
import {AvatarContext} from "./AvatarContext";
import ReactPaginate from "react-paginate";

export default function History() {
    const [showPassword, setShowPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
    const [showFormChangePassword, setShowFormChangePassword] = useState(false)
    const [showHistory, setShowHistory] = useState(false)
    const [customerDetail, setCustomerDetail] = useState()
    const token = localStorage.getItem('token')
    const [detailCartList, setDetailCartList] = useState([])
    const navigate = useNavigate()
    const {setAvatar} = useContext(AvatarContext)
    const [pageCount, setPageCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(3)
    const [historyList, setHistoryList] = useState([])
    const [allList, setAllList] = useState([])
    const [show403Img, setShow403Img] = useState(false)
    const detail = async () => {
        try {
            const res = await customerService.detail()
            setCustomerDetail(res.data)
            setAllList(res.data.oderProducts)
            setShow403Img(false)
        } catch (error) {
            console.log(error)
            if (error.response.status === 403) {
                setShow403Img(true)
            }
        }
    }
    useEffect(() => {
        detail()
    }, [token])
    useEffect(() => {
        document.title = "Thông Tin Cá Nhân";
    }, [])
    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        setPageCount(Math.ceil(allList.length / itemsPerPage))
        setHistoryList(allList.slice(indexOfFirstItem, indexOfLastItem))
    }, [customerDetail])
    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        setHistoryList(allList.slice(indexOfFirstItem, indexOfLastItem))
    }, [currentPage])
    if (!customerDetail && show403Img === false) {
        return null
    }
    setAvatar(customerDetail?.avatar)
    const handleModalDetail = (detailCartList) => {
        setDetailCartList(detailCartList)
    }
    const handlePageClick = (page) => {
        setCurrentPage(page + 1)
    }
    const handleProductDetail = (id) => {
        navigate(`/product/detail/${id}`)
        const modalBackdrop = document.querySelector('.modal-backdrop');
        if (modalBackdrop) {
            modalBackdrop.classList.remove('modal-backdrop');
            modalBackdrop.classList.remove('fade');
            modalBackdrop.classList.remove('show');
        }
        const modalBody = document.querySelector('.modal-open');
        if (modalBody) {
            modalBody.classList.remove('modal-open');
            modalBody.style.removeProperty('overflow');
            modalBody.style.removeProperty('padding-right');
        }
    }
    console.log(detailCartList);
    return (
        <>
            {
                show403Img === false ?
                    <div style={{
                        marginTop: 100
                    }}>
                        <div className="row mx-0 mt-5 p-5">
                            <div>
                                <NavLink to={'/'} className="bi bi-house text-secondary fs-4 text-decoration-none"><span
                                    className="ms-2 fw-normal fs-5">Trang chủ</span></NavLink>
                            </div>
                        </div>
                        {
                            customerDetail?.oderProducts.length === 0 ?
                                <div className="row mx-0 px-5 pb-5">
                                    <h2 className="text-center text-danger">Bạn chưa có lịch sử mua hàng</h2>
                                </div>
                                :
                                <div className="row mx-0 px-5 pb-5">
                                    <div>
                                        <h3 className="text-center text-dieucosmetics">LỊCH SỬ MUA HÀNG</h3>
                                    </div>
                                    <div className="mt-3">
                                        <table className="w-100">
                                            <thead>
                                            <tr className="text-center">
                                                <th>STT</th>
                                                <th>Mã đơn hàng</th>
                                                <th>Ngày mua hàng</th>
                                                <th>Tổng đơn hàng</th>
                                                <th>Chi tiết đơn hàng</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                historyList.map((element, index) => (
                                                    <tr className="text-center" key={index}>
                                                        <td scope="row" style={{height: '60px'}}>{index + 1}</td>
                                                        <td>{element.code}</td>
                                                        <td><span
                                                            className="mx-3">{format(new Date(element.oderDate), "HH:mm:ss")}</span>{format(new Date(element.oderDate), "dd/MM/yyyy")}
                                                        </td>
                                                        <td>{(+element.totalPay).toLocaleString(
                                                            "vi-VN",
                                                            {style: "currency", currency: "VND"}
                                                        )}</td>
                                                        <td>
                                                            <i type="button"
                                                               onClick={() => handleModalDetail(element.oderDetailSet)}
                                                               className="bi bi-info text-dieucosmetics fs-2"
                                                               data-bs-toggle="modal"
                                                               data-bs-target="#exampleModal"></i>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                        <div className="mt-2 d-flex justify-content-center">
                                            <ReactPaginate
                                                previousLabel="Trước"
                                                nextLabel="Sau"
                                                pageCount={pageCount}
                                                onPageChange={(event) => handlePageClick(event.selected)}
                                                containerClassName="pagination"
                                                previousClassName="page-item"
                                                previousLinkClassName="page-link"
                                                nextClassName="page-item"
                                                nextLinkClassName="page-link"
                                                pageClassName="page-item"
                                                pageLinkClassName="page-link"
                                                activeClassName="active"
                                                activeLinkClassName="page-link"
                                                // disabledLinkClassName="d-none"
                                                // forcePage={currentPage}
                                            />
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                    :
                    <div>
                        <img src="https://web4s.vn/uploads/plugin/news/581/403-forbidden.png" width={'100%'}
                             height={'100%'}/>
                    </div>
            }

            {
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header bg-home ">
                                <h1 className="modal-title fs-5 ms-2 text-white " id="exampleModalLabel">CHI TIẾT ĐƠN
                                    HÀNG</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <table className="w-100 text-secondary">
                                        <thead>
                                        <tr className="text-center">
                                            <th scope="row">STT</th>
                                            <th>Hình ảnh</th>
                                            <th>Mã sản phẩm</th>
                                            <th>Dung tích</th>
                                            <th>Đơn giá</th>
                                            <th>Số lượng</th>
                                            <th>Tổng</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            detailCartList?.map((element, index) => (
                                                <tr onClick={() => handleProductDetail(element.product.id)} key={index}
                                                    className="text-center click-detail-product">
                                                    <td scope="row" style={{height: '100px'}}>{index + 1}</td>
                                                    <td><img width={'50px'} src={element.product.imageSet[0].name}/>
                                                    </td>
                                                    <td>{element.product.code}</td>
                                                    <td>{element?.product?.capacityProductSet[0]?.capacity?.name}</td>
                                                    <td>{(+element.price).toLocaleString(
                                                        "vi-VN",
                                                        {style: "currency", currency: "VND"}
                                                    )}</td>
                                                    <td>{element.quantity}</td>
                                                    <td>{(+element.subtotal).toLocaleString(
                                                        "vi-VN",
                                                        {style: "currency", currency: "VND"}
                                                    )}</td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}