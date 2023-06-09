import React from 'react';
import styled from 'styled-components';

import backbutton from '../assets/backbutton.svg';
import books_large from '../assets/books_large.png';


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

function BookPortfolio() {

  return (
    <>
      <a href='/portfolio'>
        <BackButton src={backbutton} alt="Go back" />
      </a>

      <Textdiv>
        <h2>book binding products</h2>
        <h3>handmade books and boxes</h3>

        <p>Hard case books, soft case books and boxes made with traditional craftmanship.</p>
      </Textdiv>

      <PortfolioContainer src={books_large} />
    </>
  );
}

export default BookPortfolio;