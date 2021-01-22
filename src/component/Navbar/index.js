import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './navbarElements';


const index = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Converter</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">Accueil </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/converter">Convertir </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact">Contact moi</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </>

    )
}

export default index
