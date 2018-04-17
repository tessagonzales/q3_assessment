import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'

const Header = () => {
  return(
    <Navbar color="info">
      <NavbarBrand style={{color:'white'}}>Book Inventory</NavbarBrand>
    </Navbar>
  )
};

export default Header;
