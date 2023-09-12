import React, { useEffect, useState } from 'react'
import customerService from "../service/login/customer/customerService"
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AvatarContext } from './AvatarContext';
import { QuantityContext } from './QuantityContext';
export default function Header() {
  const token = localStorage.getItem('token')
  const [customerDetail, setCustomerDetail] = useState()
  const [avatarDetail, setAvatarDetail] = useState('https://firebasestorage.googleapis.com/v0/b/quannla.appspot.com/o/files%2Fanh-avatar-trang-fb-mac-dinh.jpg?alt=media&token=10a4447c-33df-4390-a5fb-0ccc5d97069a')
  const navigate = useNavigate()
  const { avatar, setAvatar } = useContext(AvatarContext);
  const { iconQuantity, setIconQuantity } = useContext(QuantityContext);
  const [searchInput, setSearchInput] = useState('');
  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
    setIconQuantity(0)
    setAvatar('')
  }
  const handleSearch = (event) => {
    const keyword = event.target.value;
    setSearchInput(keyword);
  };
  useEffect(() => {
    const detail = async () => {
      try {
        const res = await customerService.detail()
        setCustomerDetail(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    detail()

  }, [token])

  useEffect(() => {
    setIconQuantity(customerDetail?.cartSet.length)
  }, [customerDetail?.cartSet.length])
  useEffect(() => {
    setAvatarDetail(customerDetail?.avatar)
  }, [customerDetail])

  const handleSearchProduct = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      navigate(`/product?search=${searchInput}`)
    }
  }
  if(avatarDetail===undefined){
    setAvatarDetail('https://firebasestorage.googleapis.com/v0/b/quannla.appspot.com/o/files%2Fanh-avatar-trang-fb-mac-dinh.jpg?alt=media&token=10a4447c-33df-4390-a5fb-0ccc5d97069a')
  }
  return (
    <>

      <header className=''>
        <div className="row">
          <marquee behavior="scroll" direction="right" scrollamount="7" style={{color: "red", marginTop:"0px",fontStyle:"italic" }}> 🛵 Chào mừng bạn đến với trang
            DANABKIE chuyên bán các loại xe đạp 🏍 Liên hệ hotline 📲 0️⃣8️⃣3️⃣5️⃣4️⃣4️⃣3️⃣4️⃣4️⃣3️⃣ </marquee>
        </div>
        <nav className="header-fixed border-bottom border-color">
          <div
            style={{ backgroundColor: "#fff" }}
            className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 header-shadow"
          >
            <NavLink
              to='/'
              className="d-flex align-items-center ms-5 col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
              style={{ marginRight: "-260px" }}>
              ROLSER SHOP
            </NavLink>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink
                  to='/'
                  className="nav-link  px-4  text-secondary  text-hover "
                >
                  TRANG CHỦ
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link  px-4  text-secondary text-hover"
                >
                  GIỚI THIỆU
                </a>
              </li>
              <li>
                <NavLink
                  to={'/product'}
                  className="nav-link  px-4  text-secondary text-hover"
                >
                  SẢN PHẨM
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link  px-4  text-secondary text-hover"
                >
                  KHUYẾN MÃI
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link  px-4  text-secondary text-hover"
                >
                  HỖ TRỢ
                </a>
              </li>
            </ul>

            {/*<div className="fs-5 search-container" style={{marginBottom:"35px",paddingLeft:"10px"}}>*/}
            {/*  <i className="bi bi-search" style={{*/}
            {/*    }}>*/}
            {/*    <span className='ms-2 position-absolute' style={{*/}
            {/*      bottom: '3px',*/}
            {/*    }}>|</span>*/}
            {/*  </i>*/}
            {/*</div>*/}
            <div className="me-5 fs-4 ">
              <div className='float-start'>
                {
                  token === null ?
                    <NavLink to={'/login'} type="button" className=" ms-5 bi bi-person ">
                    </NavLink> :
                    <div className=" ms-5">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle d-flex align-items-center hidden-arrow"
                          id="navbarDropdownMenuAvatar"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <div className='fs-6' style={{
                            width: '40px',
                            height: '40px'
                          }} >
                            <img
                              src={avatar === '' ? avatarDetail : avatar}
                              className="rounded-circle border border-2 border-color"
                              alt="avatar"
                              width={'100%'}
                              height={'100%'}
                            />
                          </div>
                        </a>
                        <ul
                          className="dropdown-menu p-0"
                          aria-labelledby="navbarDropdownMenuAvatar"
                        >
                          <li>
                            <NavLink to='/customer/detail' className="dropdown-item button-buy">
                              Thông tin cá nhân
                            </NavLink>
                          </li>
                          <li>
                            <button onClick={handleLogout} className="dropdown-item button-buy" href="#">
                              Đăng xuất
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                }

              </div>
              <div className='float-end cart-container'>
                <NavLink to={'/cart'} className=" ms-3 me-5 pe-5 bi bi-cart3 ">
                </NavLink>
                <span className='me-5 pe-5 cart-number'>{iconQuantity === 0 ? '' : iconQuantity}</span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}