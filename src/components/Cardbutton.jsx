import React from 'react';
import styled from 'styled-components';

import arrowicon from '../assets/arrow_right.svg';

const ExploreButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 14px;
    gap: 10px;
    width: 135px;
    height: 35px;
    background: #A7C3C7;
    border-radius: 5px;
    border-style: none;

    font-family: 'Archivo';
    font-weight: 800;
    font-size: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #242424;
`;

const ButtonIcon = styled.img`
    float: right;
    width: 22px;
    height: 22px;
`;


const CardButton = () => {

  return (
    <ExploreButton> Explore!
      <ButtonIcon src={arrowicon} alt="Arrow icon" />
    </ExploreButton>
  )
}

export default CardButton;