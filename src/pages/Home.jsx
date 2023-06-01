import React, { useState } from 'react';
import styled from 'styled-components';
import portrait from '../assets/portrait.jpg';
//import workline from '../assets/workline.png';

import Typewriter from "typewriter-effect";

const MainImgcontainer = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 50vw;
    justify-content: left;
    align-items: center;

@media screen and (max-width: 600px) {
       flex-direction: column;
  }

`;


const StyledMainimg = styled.img`
    width: 30vw;

@media screen and (max-width: 600px) {
       width: 60vw;
    }
`;

/*const WorkLine = styled.img`
    width: 20vw;
    float: none;
    object-position: 60% 40%;
    z-index: 1;
`; */


const TypedText = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Archivo', sans-serif;
        color: #A7C3C7;
    font-weight: 700;
    font-size: 4em;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding-left: 2em;

@media screen and (max-width: 1030px) {
    font-size: 2.5em;
}

@media screen and (max-width: 900px) {
    font-size: 2em;
    padding-top: 2em;
        padding-left: 0;
  }
`;





function Home() {
    return (
        <>
            <MainImgcontainer>
                <StyledMainimg src={portrait} alt="Portrait of me" />

                <TypedText>
                    <Typewriter

                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Design")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Accessibility")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Research")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Analytics")

                                .start();
                        }}
                    />
                </TypedText>
            </MainImgcontainer>



        </>
    );
}

export default Home;