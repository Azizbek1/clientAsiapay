import React, { useState } from 'react';
import './adminSidebar.scss';
import { Link } from 'react-router-dom';

const Adminsidebar = () => {
  const [menu, setMenu] = useState(false);
  const [main, setMain] = useState(false);
  const [main1, setMain1] = useState(false);
  const [main2, setMain2] = useState(false);
  const [main3, setMain3] = useState(false);
  const [main4, setMain4] = useState(false);

  const [blog, setBlog] = useState(false);
  const [blog1, setBlog1] = useState(false);
  const [blog2, setBlog2] = useState(false);

  const [about, setAbout] = useState(false);
  const [about1, setAbout1] = useState(false);
  const [about2, setAbout2] = useState(false);

  const [contact, setContact] = useState(false);

  const [vacancy, setVacancy] = useState(false);
  const [vacancy1, setVacancy1] = useState(false);

  const [users, setUsers] = useState(false);

  return (
    <div className="sideBar">

      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="index3.html" className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt="png" className="brand-image img-circle elevation-3" />
          <span className="brand-text font-weight-light">Admin Panel</span>
        </Link>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="jpg" />
            </div>
            <div className="info">
              <Link to="javascriptVoid" className="d-block">Alexander Pierce</Link>
            </div>
          </div>
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search"
                     aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="sideBar__dropdown">
            <div className="sideBar__dropdown__button" onClick={() => setMenu(!menu)}>
              <p>
                Navbar
              </p>
              <i className="fas fa-angle-left right"
                 style={menu ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
            </div>
            <div className="sideBar__dropdown__menu" style={menu ? { height: '110px' } : { height: '0px' }}>
              <Link to="/admin/navbar/add" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Add</p>
              </Link>
              <Link to="/admin/navbar/list" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>List</p>
              </Link>
            </div>
          </div>

          <div className="sideBar__dropdown">
            <div className="sideBar__dropdown__button" onClick={() => setMain(!main)}>
              <p>
                Main
              </p>
              <i className="fas fa-angle-left right"
                 style={main ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
            </div>
            <div className="sideBar__dropdown__menu"
                 style={main ? { height: 'auto' } : { height: '0px' }}>
              <div className="sideBar__dropdown">
                <div className="sideBar__dropdown__button" onClick={() => setMain1(!main1)}>
                  <p>
                    Slider_top
                  </p>
                  <i className="fas fa-angle-left right"
                     style={main1 ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
                </div>
                <div className="sideBar__dropdown__menu" style={main1 ? { height: '110px' } : { height: '0px' }}>
                  <Link to="/admin/main/sliderTop/add" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Add</p>
                  </Link>
                  <Link to="/admin/main/sliderTop/list" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>List</p>
                  </Link>
                </div>
              </div>

              <div className="sideBar__dropdown">
                <div className="sideBar__dropdown__button" onClick={() => setMain2(!main2)}>
                  <p>
                    Cards_Top
                  </p>
                  <i className="fas fa-angle-left right"
                     style={main2 ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
                </div>
                <div className="sideBar__dropdown__menu" style={main2 ? { height: '110px' } : { height: '0px' }}>
                  <Link to="/admin/main/cards-top/add" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Add</p>
                  </Link>
                  <Link to="/admin/main/cards-top/list" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>List</p>
                  </Link>
                </div>
              </div>

              <div className="sideBar__dropdown">
                <div className="sideBar__dropdown__button" onClick={() => setMain3(!main3)}>
                  <p>
                    Cards_Bottom
                  </p>
                  <i className="fas fa-angle-left right"
                     style={main3 ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
                </div>
                <div className="sideBar__dropdown__menu" style={main3 ? { height: '110px' } : { height: '0px' }}>
                  <Link to="/admin/main/cards-bottom/add" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Add</p>
                  </Link>
                  <Link to="/admin/main/cards-bottom/list" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>List</p>
                  </Link>
                </div>
              </div>
              <div className="sideBar__dropdown">
                <div className="sideBar__dropdown__button" onClick={() => setMain4(!main4)}>
                  <p>
                    banks
                  </p>
                  <i className="fas fa-angle-left right"
                     style={main4 ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
                </div>
                <div className="sideBar__dropdown__menu" style={main4 ? { height: '110px' } : { height: '0px' }}>
                  <Link to="/admin/main/banks/add" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Add</p>
                  </Link>
                  <Link to="/admin/main/banks/list" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>List</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="sideBar__dropdown">
            <div className="sideBar__dropdown__button" onClick={() => setBlog(!blog)}>
              <p>
                Blog
              </p>
              <i className="fas fa-angle-left right"
                 style={blog ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
            </div>
            <div className="sideBar__dropdown__menu" style={blog ? { height: 'auto' } : { height: '0px' }}>
              <div className="sideBar__dropdown">
                <div className="sideBar__dropdown__button" onClick={() => setBlog1(!blog1)}>
                  <p>
                    title
                  </p>
                  <i className="fas fa-angle-left right"
                     style={blog1 ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
                </div>
                <div className="sideBar__dropdown__menu" style={blog1 ? { height: '110px' } : { height: '0px' }}>
                  <Link to="/admin/blog/title/add" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Add</p>
                  </Link>
                  <Link to="/admin/blog/title/list" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>List</p>
                  </Link>
                </div>
              </div>
              <div className="sideBar__dropdown">
                <div className="sideBar__dropdown__button" onClick={() => setBlog2(!blog2)}>
                  <p>
                    card
                  </p>
                  <i className="fas fa-angle-left right"
                     style={blog2 ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
                </div>
                <div className="sideBar__dropdown__menu" style={blog2 ? { height: '110px' } : { height: '0px' }}>
                  <Link to="/admin/blog/card/add" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Add</p>
                  </Link>
                  <Link to="/admin/blog/card/list" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>List</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="sideBar__dropdown">
            <div className="sideBar__dropdown__button" onClick={() => setAbout(!about)}>
              <p>
                about
              </p>
              <i className="fas fa-angle-left right"
                 style={about ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
            </div>
            <div className="sideBar__dropdown__menu" style={about ? { height: 'auto' } : { height: '0px' }}>

              <div className="sideBar__dropdown">
                <div className="sideBar__dropdown__button" onClick={() => setAbout1(!about1)}>
                  <p>
                    about component
                  </p>
                  <i className="fas fa-angle-left right"
                     style={about1 ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
                </div>
                <div className="sideBar__dropdown__menu" style={about1 ? { height: '110px' } : { height: '0px' }}>
                  <Link to="/admin/about/about/add" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Add</p>
                  </Link>
                  <Link to="/admin/about/about/list" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>List</p>
                  </Link>
                </div>
              </div>
              <div className="sideBar__dropdown">
                <div className="sideBar__dropdown__button" onClick={() => setAbout2(!about2)}>
                  <p>
                    about component 2
                  </p>
                  <i className="fas fa-angle-left right"
                     style={about2 ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
                </div>
                <div className="sideBar__dropdown__menu" style={about2 ? { height: '110px' } : { height: '0px' }}>
                  <Link to="/admin/about/about_card/add" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Add</p>
                  </Link>
                  <Link to="/admin/about/about_card/list" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>List</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="sideBar__dropdown">
            <div className="sideBar__dropdown__button" onClick={() => setContact(!contact)}>
              <p>
                contact
              </p>
              <i className="fas fa-angle-left right"
                 style={contact ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
            </div>
            <div className="sideBar__dropdown__menu" style={contact ? { height: '110px' } : { height: '0px' }}>
              <Link to="/admin/contact/add" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>Add</p>
              </Link>
              <Link to="/admin/contact/list" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>List</p>
              </Link>
            </div>
          </div>

          <div className="sideBar__dropdown">
            <div className="sideBar__dropdown__button" onClick={() => setVacancy(!vacancy)}>
              <p>
                vacancy
              </p>
              <i className="fas fa-angle-left right"
                 style={vacancy ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
            </div>
            <div className="sideBar__dropdown__menu" style={vacancy ? { height: 'auto' } : { height: '0px' }}>
              <div className="sideBar__dropdown">
                <div className="sideBar__dropdown__button" onClick={() => setVacancy1(!vacancy1)}>
                  <p>
                    vacancy cards
                  </p>
                  <i className="fas fa-angle-left right"
                     style={vacancy1 ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
                </div>
                <div className="sideBar__dropdown__menu" style={vacancy1 ? { height: '110px' } : { height: '0px' }}>
                  <Link to="/admin/vacancy/card/add" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Add</p>
                  </Link>
                  <Link to="/admin/vacancy/card/list" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>List</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="sideBar__dropdown">
            <div className="sideBar__dropdown__button" onClick={() => setUsers(!users)}>
              <p>
                users
              </p>
              <i className="fas fa-angle-left right"
                 style={users ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }} />
            </div>
            <div className="sideBar__dropdown__menu" style={users ? { height: '110px' } : { height: '0px' }}>
              <Link to="/admin/user/list" className="nav-link">
                <i className="far fa-circle nav-icon"></i>
                <p>List</p>
              </Link>
            </div>
          </div>


        </div>
      </aside>
      {/* <aside className="main-sidebar sidebar-dark-primary elevation-4">




                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>
                                        USERS
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </div>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/admin/user/list" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>List</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </nav>
                </div>
            </aside> */}
    </div>
  );
};

export default Adminsidebar;
