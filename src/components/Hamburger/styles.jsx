import React from 'react';
import styled, { css } from "styled-components";

const normal = css`
    transform: rotate(0deg);
    &:nth-child(1) { top: 12px;  transform-origin: 0% 0%; }
    &:nth-child(2) { top: 24px; }
    &:nth-child(3) { top: 36px; transform-origin: 0% 100%; }
    `;

const crossmark = css`
            &:nth-child(1) { 
                top: 12px;  
                transform-origin: 0% 0%; 
                transform: rotate(45deg) translate(-1px, 0);

            }
            &:nth-child(2) { 
                top: 24px; 
                opacity: 0;
                transform: rotate(0deg) scale(0.2, 0.2);
            }
            &:nth-child(3) { 
                top: 36px; 
                transform-origin: 0% 100%; 
                transform: rotate(-45deg) translate(0, -1px);
                }
`;


export const StyledHamburger = styled.div`
    position: absolute;
    right: 2em;
    top: 1em;
    z-index: 1;

    @media screen and (min-width: 901px) {
        display: none;
    }

    & { 
        label {
        display: block;
        margin-right: 2em;
        margin-top: 0.6em;
        background: #010101;
        width: 35px;
        height: 60px;
        position: relative;
        cursor: pointer;
    }

        span {
            position: absolute;
            height: 4px;
            width: 100%;
            border-radius: 3px;
            opacity: 1;
            background: #FFFEFC;
            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), 
                        opacity 0.55s ease;
            transform-origin: 4px 0px;

            ${({ isOpen }) => (!isOpen ? normal : crossmark)}
        }
    }
    `;

export const StyledResMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #010101;
    height: 400px;
    width: 250px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    transform: translateX(${({ isOpen }) => isOpen ? '0' : '300px'});

    & {
        a {
            margin-right: 3em;

        }

        a:nth-child(1) {
            margin-top: 6em;
        }
    }
`;