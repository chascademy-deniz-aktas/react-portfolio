import React, { useState } from 'react';
import styled from 'styled-components';
import GitHubLogo from '../assets/GitHub.svg';

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

/* The container that centers the card-div on the interface*/
const PortfolioContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`

/* The container for all the cards*/
const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    max-width: 80vw;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    
@media screen and (max-width: 900px) {
    flex-direction: column;
    max-width: 90vw;
}

@media screen and (max-width: 750px) {
flex-direction: row;
    width: 80%;
    font-size: 0.8em;
}
`

/* The container for the GitHub info*/
const GitHub = styled.div`
    display: flex;
    flex-direction: column;
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
    margin-bottom: 4em;
    text-align: center;
    justify-content: center;
`

const GhLogoContainer = styled.div`
    max-width: 5rem;
    margin-top: 0.7em;
    align-self: center;

`;

const GhLogo = styled.img`
    width: 80%;
`;


function Portfolio() {

    return (
        <>
            <h1>A small selection of <br />  work I have done so far</h1>
            <HeaderLine />

            <PortfolioContainer>
                <CardContainer>
                    <Skills />
                </CardContainer>
            </PortfolioContainer>

            <GitHub>
                <a href="https://github.com/chascademy-deniz-aktas" target="_blank">Want to see my frontend projects? Here is the link to my GitHub account! </a>
                <GhLogoContainer>
                    <GhLogo src={GitHubLogo} alt="GitHub icon" />
                </GhLogoContainer>
            </GitHub>


        </>
    );
}

export default Portfolio;