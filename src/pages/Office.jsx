import React from 'react';
import styled from 'styled-components';

import backbutton from '../assets/backbutton.svg';
import office_large from '../assets/office_large.png';


const BackButton = styled.button`
    align-items: center;
    padding: 5px;
    width: 45px;
    height: 45px;
    border-style: none;
    cursor: pointer;
`;

const Textdiv = styled.div`
    width: 50%;
    height: auto;
    border-radius: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5em;
`

const PortfolioContainer = styled.div`
    display: flex;
    max-width: 60vw;
    height: auto;
    margin-left: auto;
    margin-right: auto;
`

function OfficePortfolio() {

  return (
    <>
      <a href='/portfolio'>
        <BackButton src={backbutton} alt="Go back" />
      </a>

      <Textdiv>
        <h2>MS office icons</h2>
        <h3>Icons for custom ribbons in Microsoft Office</h3>

        <p>This project was about creating new, intuitive icons for custom functionality in the ribbon of Office programs.
          The color palette is based on the company brand manual, as well as the visual profile.</p>
      </Textdiv>

      <PortfolioContainer src={office_large} />
    </>
  );
}

export default OfficePortfolio;