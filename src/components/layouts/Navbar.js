import { Link } from "react-router-dom";
import { React, useState } from "react";
import logo from "../../images/PayMe_Logo.png";
import "./navbar.scss";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBCollapse,
  MDBDropdownToggle,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";

const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <div>
      <MDBNavbar className="fixed-top" expand="lg" light bgColor="light">
        <MDBContainer>
          <MDBNavbarBrand href="#">
            <img className="navbar__logo" src={logo} alt="" />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="nabar__item">
                <Link className="nabar__link nav-link" to="/">
                  Домой
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem className="nabar__item">
                <Link className="nabar__link nav-link" to="/about">
                  О нас
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem className="nabar__item">
                <Link className="nabar__link nav-link" to="/blog">
                  Новости
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem className="nabar__item">
                <Link className="nabar__link nav-link" to="/contact">
                  Контакты
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem className="nabar__item">
                <Link className="nabar__link nav-link" to="/vokansi">
                  Ваканси
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem className="nabar__item">
                <Link className="nabar__link nav-link" to="/paymet">
                  Оплата
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem className="nabar__item">
                <MDBDropdown>
                  <MDBDropdownToggle
                    tag="a"
                    className="nav-link nabar__link nabar__link-cursor"
                  >
                    Ru
                    <i className="fas fa-language"></i>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <MDBDropdownLink>UZ</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink>EN</MDBDropdownLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="поиск по сайту"
                aria-label="Search"
              />
              <MDBBtn color="primary">поиск</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Navbar;
