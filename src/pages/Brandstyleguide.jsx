import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import backbutton from '../assets/backbutton.svg';
import brand_large from '../assets/brandstyleguide_large.png';

const BackButton = styled.img`
    padding-bottom: 25px;
    width: 45px;
    height: 45px;
    border-style: none;
    cursor: pointer;
    background-color: #010101;
`;

const Textdiv = styled.div`
    width: 50vw;
    height: auto;
    border-radius: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5em;
`

const PortfolioContainer = styled.div`
    display: flex;
    width: 50vw;
    height: auto;
    margin-left: auto;
    margin-right: auto;
`
const StyledPortimg = styled.img`
    width: 100%;
`;

function BrandPortfolio() {

  return (
    <>
      <Textdiv>
        <Link to='/portfolio'>
          <BackButton src={backbutton} alt="Go back" />
        </Link>

        <h2>Brand Style Guide assignment</h2>
        <h3>Educational assignment to create a Brand Style Guide containing a logo, typography, color palette and imagery, and the brand guide.</h3>

        <p>1. First, I built a brand identity by interviewing the owner and look at competitors in the same business.
          <br />
          <br />
          2. Based on this and the existing graphic assets the style guide was created.
          I created a pictorial mark to supplement the less applicable landscape version, and a color palette based on the tertiary principle with a take-off in the one color they had.
          The typography was to be easy to read, minimalistic and feel simple. The font of the headings is meant to bring to mind pipes with the rounded shapes and still retain readability.
          The icons are thin, clean and have rounded lines to follow up on the feel of the fonts. There is both simple basic variants or more detailed ones as a complement instead of other graphics.
          The imagery should reflect the company's principles and harmonize with the color palette. Cheerful people, concentrated at work, calm and warm pictures. They should convey security, order and professionalism (based on their principles). The images in situations and environments should be in line with the viewer to reinforce the feeling that we are on the same level, collaborating, a bit like seeing things in place. Images come in three categories: environments, details, and situations.
          <br />
          <br />
          3. A page with mockup examples of how to combine different colors etc for the web, and one for print with business cards and merch as well as a striped car.

        </p>
      </Textdiv>

      <PortfolioContainer>
        <StyledPortimg src={brand_large} />
      </PortfolioContainer >
    </>
  );
}

export default BrandPortfolio;