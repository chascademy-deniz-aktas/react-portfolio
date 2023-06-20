import React from 'react';
import styled from 'styled-components';

import backbutton from '../assets/backbutton.svg';
import powerbi_large from '../assets/powerbi_large.png';


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
const StyledPortimg = styled.img`
    width: 90vw;

@media screen and (max-width: 800px) {
    width: 42vw;
    margin-left: 4em;
    }

@media screen and (max-width: 750px) {
    width: 40vw;
    margin-left: 2.5em;
    }

@media screen and (max-width: 600px) {
    width: 60vw;
    margin-left: 1.5em;
    }
`;

function Powerbi() {

  return (
    <>
      <Textdiv>
        <Link to='/portfolio'>
          <BackButton src={backbutton} alt="Go back" />
        </Link>

        <h2>Power BI dummy</h2>
        <h3>Dummy setup for Power BI-dashboard</h3>

        <p>This client needed a graphic dummy for the dashboard of a new project.They needed another way to present data other than just the ordinary diagrams, and in this example only the keywords and values change when updating the data.</p>
      </Textdiv>

      <PortfolioContainer>
        <StyledPortimg src={powerbi_large} />
      </PortfolioContainer >
    </>
  );
}

export default Powerbi;