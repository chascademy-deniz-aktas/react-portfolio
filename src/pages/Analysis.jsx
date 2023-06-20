import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import backbutton from '../assets/backbutton.svg';
import analysis_large from '../assets/analysis_large.png';


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

function AnalysisPortfolio() {

  return (
    <>
      <Textdiv>
        <Link to='/portfolio'>
          <BackButton src={backbutton} alt="Go back" />
        </Link>

        <h2>ANALYSIS TEMPLATES</h2>
        <h3>PowerPoint templates for producing reports</h3>

        <p>All the PowerPoint templates for Retrievers analysis international department, to ensure the visual dentity.
          A standing version for shorter reports and a landscape version for larger measurement analysis. This is a selection of the 70 pages template in three color schemes. </p>
      </Textdiv>
      <PortfolioContainer>
        <StyledPortimg src={analysis_large} />
      </PortfolioContainer >
    </>
  );
}

export default AnalysisPortfolio;