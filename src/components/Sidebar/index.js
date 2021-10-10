import React from 'react'
import { Icon, SidebarContainer, SidebarMenu, SidebarRoute, SidebarWrapper } from './SidebarElements'
import CloseIcon from '@material-ui/icons/Close';
import { grey } from '@material-ui/core/colors';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon fontSize="large" style={{ color: grey[50] }}/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarRoute to="/">
                        Home
                    </SidebarRoute>
                    <SidebarRoute to="/favorites">
                        Favorites
                    </SidebarRoute>
                    <SidebarRoute to="/host">
                        Become a host
                    </SidebarRoute>
                    <SidebarRoute to="/login">
                        Login
                    </SidebarRoute>
                    <SidebarRoute to="/signup">
                        Signup
                    </SidebarRoute>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
