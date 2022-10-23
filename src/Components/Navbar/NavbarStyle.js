import {BiMenuAltRight} from 'react-icons/bi';
import {BsCart2} from 'react-icons/bs';
import {IoPersonOutline} from 'react-icons/io5';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #f6c90e;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin: auto;

  @media screen and (max-width: 830px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

// export const Search = styled(BsSearch)`
//   color: #000;
//   cursor: pointer;
// `;

export const Person = styled(IoPersonOutline)`
  color: #000;
  cursor: pointer;
  margin-left: 1rem;
  font-size: large;
`;

export const Cart = styled(BsCart2)`
  color: #000;
  cursor: pointer;
  margin-left: 1rem;
  font-size: large;
`;

export const Bars = styled(BiMenuAltRight)`
  display: none;
  color: #000;

  @media screen and (max-width: 830px) {
    display: inline-flex;
    margin-left: 1rem;
    //transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;


// Sidebar style

// export const SideMenu = styled.ul`
//   width: 100%;
// `

// export const SideBarToggle = styled.li`
//   background-color: #fff;
//   width: 100%;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `

// export const Close = styled(IoCloseOutline)`
//   font-size: 1.5rem;
//   margin-left: 2rem;
//   background: none;
//   cursor: pointer;
// `



