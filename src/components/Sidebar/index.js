import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
  SidebarMenu,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink exact='true' offset={-80} to='about' onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink exact='true' offset={-80} to='services' onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink exact='true' to='contact' onClick={toggle}>
            Contact
          </SidebarLink>
          <SidebarLink
            onClick={() => alert('This feature is not yet implemented!')}
            to='signup'
          >
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            to='/'
            onClick={() => alert('This feature is not yet implemented!')}
          >
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
