import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    height: 420px;
    padding: 1em;
    margin: 1.5em;
    overflow: hidden;
    border-radius: 6px;
    background-image: linear-gradient(
        140deg,
        hsl(0deg 0% 8%) 0%,
        hsl(187deg 7% 9%) 16%,
        hsl(186deg 14% 9%) 27%,
        hsl(186deg 19% 9%) 36%,
        hsl(186deg 24% 10%) 44%,
        hsl(186deg 28% 10%) 52%,
        hsl(185deg 33% 10%) 62%,
        hsl(185deg 37% 10%) 72%,
        hsl(185deg 41% 10%) 85%,
        hsl(185deg 44% 11%) 100%
        );

@media screen and (max-width: 750px) {
    width: 225px;
    height: 315px;
}
`;

/* The headline*/
export const CardHeader = styled.div`
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
    line-height: 106%;
    font-size: 1.25em;
    word-wrap: break-word;
    width: 95%;
    letter-spacing: 0.05em;
    margin-top: 1em;
    text-transform: uppercase;
    color: #F2F2F2;

@media screen and (max-width: 750px) {
    font-size: 1.1em;
}
`;

/* The description text*/
export const CardBody = styled.p`
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 1em;
    text-align: left;
    word-wrap: break-word;
    letter-spacing: 0.06em;
    width: 95%;
    height: 70px;
    line-height: 140%;
    margin-bottom: 1.5em;
    color: #FFFFFF;

@media screen and (max-width: 750px) {
    font-size: 0.9em;
}
`;

/* The settings for the image*/
export const StyledCardPic = styled.img`
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 6px;
    background-color: white;

@media screen and (max-width: 750px) {
    height: 180px;
}
`;
