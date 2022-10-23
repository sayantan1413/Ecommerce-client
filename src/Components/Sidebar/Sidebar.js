import React from 'react';
import { SidebarData } from './SidebarData';
import {
    SideMenu,
    SideBarToggle,
    Close,
    Container,
    List,
    ListLink
} from './SidebarStyle';

const Sidebar = ({sidebar,showSidebar}) => {

  return (
    <Container sidebar={sidebar}>  
    <SideMenu >
      <SideBarToggle>
          <Close onClick={showSidebar}/>
      </SideBarToggle>
      {SidebarData.map((item, index) => {
        return (
          <List key={index}>
            <ListLink to={item.path} onClick={showSidebar}>
              <span>{item.title}</span>
            </ListLink>
          </List>
        );
      })}
    </SideMenu>
    </Container>  
  )
}

export default Sidebar;