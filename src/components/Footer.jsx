import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import downloadicon from '../assets/download.png';
import liicon from '../assets/linkedin.png';
import mailicon from '../assets/mailicon.svg';
import MyPDF from '../assets/CV_Deniz_Isaksson.pdf';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-area: footer;
    background-color: #010101;
    color: #fdece8;
    max-height: 5em;
    width: 100vw;
    z-index: 2;
    position: fixed;
    bottom: 0;
    font-size: 0.9em;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.5em;
`;

const StyledLogo = styled.img`
    height: 3em;
    margin: 0.7em;
`;

let footerContents = [
    {
        id: 1,
        href: "mailto:deniz.isaksson@gmail.com",
        iconurl: mailicon,
        alttext: "Mail icon"
    },
    {
        id: 2,
        href: "https://www.linkedin.com/in/deniz-isaksson/",
        iconurl: liicon,
        alttext: "Download CV icon"
    },
    {
        id: 3,
        href: MyPDF,
        iconurl: downloadicon,
        alttext: "LinkedIn icon"
    }
]

const Footer = () => {
    return (
        <StyledFooter>
            <IconContainer>{footerContents.map(footercontent =>
                <a key={footercontent.id} href={footercontent.href} target="_blank">
                    <StyledLogo src={footercontent.iconurl} alt={footercontent.alttext} />
                </a>

            )}
            </IconContainer>
        </StyledFooter>
    );
}

export default Footer;