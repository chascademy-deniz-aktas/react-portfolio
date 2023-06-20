import React from 'react';
import styled from 'styled-components';

import backbutton from '../assets/backbutton.svg';
import amec_large from '../assets/amec_large.png';


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

function Amec() {

  return (
    <>
      <Textdiv>
        <Link to='/portfolio'>
          <BackButton src={backbutton} alt="Go back" />
        </Link>

        <h2>AMEC awards 2015</h2>
        <h3>Material for the international AMEC Awards Summit</h3>

        <p>Retriever AB had the opportunity to host the international summit for AMEC,
          the International association for the measurement and evaluation of communication.
          All the summit products such as bags, signs, folders and badges was needed.
          Also, a webpage containing the schedule and other information during the summit had to be made.
          The material had to express both the the AMEC and the hosting company's graphic profile,
          and at the same time put focus on the summit taking place in Sweden this time.</p>
      </Textdiv>

      <PortfolioContainer src={amec_large} />
    </>
  );
}

export default Amec;