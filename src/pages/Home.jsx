import React, { useState } from 'react';
import styled from 'styled-components';
import portrait from '../assets/profile_img.jpg';

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
    width: 45vw;
    margin-left: 5em;

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

const TypedText = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Archivo', sans-serif;
    color: #A7C3C7;
    font-weight: 700;
    font-size: 3.8em;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding-left: 2em;

@media screen and (max-width: 1220px) {
    font-size: 3em;
    padding-left: 0.7em;
}

@media screen and (max-width: 1030px) {
    font-size: 2.5em;
    padding-left: 1em;
}

@media screen and (max-width: 900px) {
    font-size: 2em;
    padding-top: 2em;
    padding-left: 0;
  }

@media screen and (max-width: 650px) {
    font-size: 1.9em;
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