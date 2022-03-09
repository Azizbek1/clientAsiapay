import React from 'react';
import { Link } from 'react-router-dom';
import {logOutAdmin} from '../../../../../actions'
import {connect} from 'react-redux'
import "./adminnavbar.scss";
const Adminnavbar = (props) => {
    const handleLogout = () => {
        // localStorage.removeItem("token");
        // window.location.reload();
        props.logOutAdmin()
    };
    return (

        <div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="javaScriptVoid" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="javaScriptVoid" className="nav-link">Contact</a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="navbar-search" href="javaScriptVoid" role="button">
                            <i className="fas fa-search"></i>
                        </a>
                        <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search"></i>
                                        </button>
                                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link onClick={handleLogout} to="/login"  className="btn btn-danger">
                            Выйти
                        </Link>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="javaScriptVoid" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="javaScriptVoid" role="button">
                            <i className="fas fa-th-large"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps,{logOutAdmin})(Adminnavbar);
