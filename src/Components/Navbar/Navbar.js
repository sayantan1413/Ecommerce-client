import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  Person,
  Cart
} from './NavbarStyle';
import Search from './Search/Search';

const Navbar = ({sidebar,showSidebar}) => {
  return (
    <>
    <Nav>
      <NavLink to='/'>
          <img src={require('./Logo/logo.png')} alt='logo' height={'50em'}/>
      </NavLink>
      <NavMenu>
          <NavLink to='/men' activeStyle>
            Men
          </NavLink>
          <NavLink to='/women' activeStyle>
            Women
          </NavLink>
          <NavLink to='/kids' activeStyle>
            Kids
          </NavLink>
          <NavLink to='/accessories' activeStyle>
            Accessories 
          </NavLink>
      </NavMenu>
       <NavBtn>
          <Search />
          <Person/>
          <Cart />
          <Bars onClick={showSidebar}/>
      </NavBtn>
    </Nav>

    <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
    </>
  );
};

export default Navbar;