import React, { useState } from 'react';
import "./adminnavbar.scss";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const Adminnavbar = () => {
    const [showBasic, setShowBasic] = useState(false);
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
      };
    return (
        <div>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer>
                    <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='navbar__admin'>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link'>
                                        Dropdown
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem>
                                            <MDBDropdownLink>Action</MDBDropdownLink>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <MDBDropdownLink>Another action</MDBDropdownLink>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <MDBDropdownLink>Something else here</MDBDropdownLink>
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <Link onClick={handleLogout}  to="/login" className="btn btn-danger">
                                    Logout
                                </Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>

                      
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
}

export default Adminnavbar;
