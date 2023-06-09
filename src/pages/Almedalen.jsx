import React from 'react';
import styled from 'styled-components';

import backbutton from '../assets/backbutton.svg';
import alme_large from '../assets/alme_large.png';


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

function AlmePortfolio() {

  return (
    <>
      <a href='/portfolio'>
        <BackButton src={backbutton} alt="Go back" />
      </a>

      <Textdiv>
        <h2>almedalsrapporten 2016</h2>
        <h3>Booklet with the Almedalen measurement</h3>

        <p>It was Retriever AB's turn to put together the booklet with the result of the measurements made regarding the Almedalen week, together with Novus and Dagens Opinion.
          The booklet had to reflect Retriever's graphic profile and colours, and display diagrams and key values in a visually comprehensible way. Here are some parts of the booklet.</p>
      </Textdiv>

      <PortfolioContainer src={alme_large} />
    </>
  );
}

export default AlmePortfolio;