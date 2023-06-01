import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
    Link
} from "react-router-dom";

import Hamburger from './components/Hamburger';
import logo from './assets/logo.png';

/* The container for the content*/
const Nav = styled.div`

    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    z-index: 1;
    position: fixed;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background: #010101;
`;


export const StyledLink = styled(Link)`
    color: #FFFEFC;
    text-decoration: none;
    padding: 1.4em 2.2em 0em 0.1em;
    font-size: 0.9em;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
        color: #86BBBD;
    }
`;

const links = [
    {
        id: 1,
        to: "/",
        text: "Home"
    },
    {
        id: 2,
        to: "/about",
        text: "About"
    },
    {
        id: 3,
        to: "/knowledge",
        text: "Knowledge"
    },
    {
        id: 4,
        to: "/portfolio",
        text: "Portfolio"
    }

];


export const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    z-index: 1;
    //position: fixed;
    padding: 1em;
    background: #010101;

    justify-content: space-between;
    align-items: center;
    grid-area: top;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

/* Logo in header */
const LogoContainer = styled.div`
    max-width: 6rem;
    margin-top: 0.7em;
    margin-left: 0.7em;
`;

const StyledLogo = styled.img`
    width: 100%;
`;


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <LogoContainer>
                <StyledLogo src={logo} alt="Logo" />
            </LogoContainer>

            <StyledNav>
                {links.map(link => <StyledLink to={link.to} key={link.id}>{link.text}</StyledLink>)}
            </StyledNav>
            <Hamburger links={links}>


            </Hamburger>
        </Nav>
    );
}

export default Navbar;