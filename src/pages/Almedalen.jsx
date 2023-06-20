import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import backbutton from '../assets/backbutton.svg';
import alme_large from '../assets/alme_large.png';


const BackButton = styled.img`
    padding-bottom: 25px;
    width: 45px;
    height: 45px;
    border-style: none;
    cursor: pointer;
    background-color: #010101;
`;

const Textdiv = styled.div`
    width: 50vw;
    height: auto;
    border-radius: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5em;
`

const PortfolioContainer = styled.div`
    display: flex;
    width: 50vw;
    height: auto;
    margin-left: auto;
    margin-right: auto;
`
const StyledPortimg = styled.img`
    width: 100%;
    background-color: white;
    border-radius: 10px;
`;


function AlmePortfolio() {

  return (
    <>
      <Textdiv>
        <Link to='/portfolio'>
          <BackButton src={backbutton} alt="Go back" />
        </Link>

        <h2>ALMEDALSRAPPORTEN 2016</h2>
        <h3>Booklet with the Almedalen measurement</h3>

        <p>It was Retriever AB's turn to put together the booklet with the result of the measurements made regarding the Almedalen week, together with Novus and Dagens Opinion.
          The booklet had to reflect Retriever's graphic profile and colours, and display diagrams and key values in a visually comprehensible way. Here are some parts of the booklet.</p>
      </Textdiv>

      <PortfolioContainer>
        <StyledPortimg src={alme_large} />
      </PortfolioContainer >
    </>
  );
}

export default AlmePortfolio;