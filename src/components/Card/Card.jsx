import React from 'react';

import { CardContainer, StyledCardPic, CardHeader, CardBody } from './styles';
import Cardbutton from '../../components/Cardbutton';


function Card(props) {

    return (
        <CardContainer>

            <StyledCardPic src={props.cardPic} alt="Project thumbnail" />
            <CardHeader>{props.headline}</CardHeader>
            <CardBody>{props.description}</CardBody>

            <Cardbutton>{props.buttonLink}</Cardbutton>
        </CardContainer>
    )
}
export default Card;