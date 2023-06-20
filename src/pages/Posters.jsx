import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import backbutton from '../assets/backbutton.svg';
import poster_large from '../assets/poster_large.png';


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

function Poster() {

  return (
    <>
      <Textdiv>
        <Link to='/portfolio'>
          <BackButton src={backbutton} alt="Go back" />
        </Link>

        <h2>MEDIEARKIVET POSTERS</h2>
        <h3>Posters for swedish public libraries</h3>

        <p>The department for Mediearkivet ordered two 50x70 cm posters to hand out for some Swedish libraries in order to make the students aware of their service.
          Their wish was to make something discreet that follows the brand book but still stand out.</p>
      </Textdiv>

      <PortfolioContainer>
        <StyledPortimg src={poster_large} />
      </PortfolioContainer >
    </>
  );
}

export default Poster;