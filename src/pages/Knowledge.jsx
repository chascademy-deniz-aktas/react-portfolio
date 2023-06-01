import React from 'react';
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

function Knowledge() {

    return (
        <>
            <h1>Disposition of <br /> all my knowledge so far</h1>
            <HeaderLine />
            <p>This is where the work and studies goes</p>


        </>
    );
}

export default Knowledge;