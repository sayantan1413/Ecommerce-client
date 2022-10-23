import styled from 'styled-components';
import {IoCloseOutline} from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const SideMenu = styled.ul`
  width: 100%;
`

export const SideBarToggle = styled.li`
  background-color: #fff;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Close = styled(IoCloseOutline)`
  font-size: 1.5rem;
  margin-left: 2rem;
  background: none;
  cursor: pointer;
`

export const Container = styled.nav`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${(props) => (props.sidebar ? 0 : -100)}%;
  transition: ${(props) => (props.sidebar ? 350 : 850)}ms;
`

export const List = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
`

export const ListLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 18px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;

  &:hover {
    background-color: #f6c90e;
    color: #fff;
  }
`