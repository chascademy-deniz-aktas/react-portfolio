import React, { useState } from 'react';
import styled from 'styled-components';

import Skills from '../components/Skills';

/* The line under the headline*/
const HeaderLine = styled.div`
    width: 100px;
    height: 5px;
    background-color: #62C8CC;
    border-radius: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5em;
`

/* The container for all the cards*/
const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 80vw;
    height: auto;
    margin-left: auto;
    margin-right: auto;
`

function Portfolio() {

    return (
        <>
            <h1>A small selection of <br />  work I have done so far</h1>
            <HeaderLine />

            <CardContainer>
                <Skills />
            </CardContainer>
        </>
    );
}

export default Portfolio;