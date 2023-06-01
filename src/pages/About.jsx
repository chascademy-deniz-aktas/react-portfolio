import React, { useState } from 'react';
import styled from 'styled-components';

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
const Textdiv = styled.div`
    width: 50%;
    height: auto;
//text-align: center;
    border-radius: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5em;
`


function About() {

    return (
        <>
            <h1>So who am I?</h1>
            <HeaderLine />

            <Textdiv>
                <p>My strength lies in the graphic design, but an interest in user experiences and behaviors in combination with my analytical
                    and problem-solving approach has made UX/UI the perfect profession for me.
                    <br />
                    <br />
                    Having the opportunity to influence how a user interacts with a product or service, to ensure that it meets their needs and
                    is intuitive to use and therefore provides a positive experience and at the same time contribute to brand building gives me
                    a lot of creative energy!
                    <br />
                    <br />
                    You'll find me in Stockholm, probably working on something inside or outside the house, hanging out with my loved ones or
                    sitting with a book and a pair of headphones.</p>
            </Textdiv>

        </>
    );
}

export default About;