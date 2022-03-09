import React from 'react';
import { Link } from 'react-router-dom';
const Adminsidebar = () => {
    return (
        <div>
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
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            
                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>
                                        Navbar
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </div>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/admin/navbar/add" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Add</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/navbar/list" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>List</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item ">
                                <div className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Main
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </div>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <i className="nav-icon fas fa-table"></i>
                                            <p>
                                                Slider_top
                                                <i className="fas fa-angle-left right"></i>
                                            </p>
                                        </div>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                            <Link to="/admin/main/sliderTop/add" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Add</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                 <Link to="/admin/main/sliderTop/list" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>List</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <i className="nav-icon fas fa-table"></i>
                                            <p>
                                                Cards_Top
                                                <i className="fas fa-angle-left right"></i>
                                            </p>
                                        </div>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <Link to="/admin/main/cards-top/add" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Add</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/admin/main/cards-top/list" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>List</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <i className="nav-icon fas fa-table"></i>
                                            <p>
                                                Cards_Bottom
                                                <i className="fas fa-angle-left right"></i>
                                            </p>
                                        </div>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <Link to="/admin/main/cards-bottom/add" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Add</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/admin/main/cards-bottom/list" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>List</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <i className="nav-icon fas fa-table"></i>
                                            <p>
                                                Banks
                                                <i className="fas fa-angle-left right"></i>
                                            </p>
                                        </div>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <Link to="/admin/main/bank/add" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Add</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/admin/main/bank/list" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>List</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon fas fa-table"></i>
                                    <p>
                                        Blog
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </div>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <i className="nav-icon fas fa-table"></i>
                                            <p>
                                                title
                                                <i className="fas fa-angle-left right"></i>
                                            </p>
                                        </div>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <Link to="/admin/blog/title/add" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Add</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/admin/blog/title/list" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>List</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>
                                                card
                                                <i className="fas fa-angle-left right"></i>
                                            </p>
                                        </div>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <Link to="/admin/blog/card/add" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Add</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/admin/blog/card/list" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>List</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon fas fa-table"></i>
                                    <p>
                                        About
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </div>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <i className="nav-icon fas fa-table"></i>
                                            <p>
                                                About Component
                                                <i className="fas fa-angle-left right"></i>
                                            </p>
                                        </div>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <Link to="/admin/about/about/add" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Add</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/admin/about/about/list" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>List</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>About Component2</p>
                                        </div>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <Link to="/admin/about/about_card/add" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Add</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/admin/about/about_card/list" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>List</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="far fa-circle nav-icon"></i>
                                    <p>
                                        Contact
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </div>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/admin/contact/add" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Add</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/contact/list" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>List</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link">
                                    <i className="nav-icon fas fa-table"></i>
                                    <p>
                                        Vacancy
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </div>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Vacancy cards</p>
                                        </div>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <Link to="/admin/vacancy/card/add" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Add</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/admin/vacancy/card/list" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>List</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </li>
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
            </aside>
        </div>
    );
}

export default Adminsidebar;
