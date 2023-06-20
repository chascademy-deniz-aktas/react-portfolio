import React from 'react';
import styled from 'styled-components';

import backbutton from '../assets/backbutton.svg';
import art_large from '../assets/art_large.png';


const BackButton = styled.img`
    padding-bottom: 25px;
    width: 45px;
    height: 45px;
    border-style: none;
    cursor: pointer;
    background-color: #010101;
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

function ArtPortfolio() {

  return (
    <>
      <Textdiv>
        <Link to='/portfolio'>
          <BackButton src={backbutton} alt="Go back" />
        </Link>

        <h2>Art Work</h2>
        <h3>Vernissage for paintings</h3>

        <p>An art dealer contacted me after a friend showed a few pieces and wanted to exhibit them. Here are some examples.</p>
      </Textdiv>

      <PortfolioContainer src={art_large} />
    </>
  );
}

export default ArtPortfolio;