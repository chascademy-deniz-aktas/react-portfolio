import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

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
    text-decoration: none;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #242424;

@media screen and (max-width: 750px) {
    padding: 7px 11px;
    gap: 8px;
    width: 100px;
    height: 26px;
    font-size: 10px;
}
`;

const ButtonIcon = styled.img`
    float: right;
    width: 22px;
    height: 22px;

@media screen and (max-width: 750px) {
    width: 17px;
    height: 17px;
}
`;


const CardButton = (props) => {

  return (
    <Link to={props.link}>
      <ExploreButton> Explore!
        <ButtonIcon src={arrowicon} alt="Arrow icon" />
      </ExploreButton>
    </Link>
  )
}

export default CardButton;