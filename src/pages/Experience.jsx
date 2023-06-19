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
const Textdiv = styled.div`
    width: 50%;
    height: auto;
    border-radius: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3em;

    
    @media screen and (max-width: 1030px) {
    width: 70%;
}

@media screen and (max-width: 600px) {
    width: 80%;
    font-size: 0.9em;
}
`

function Experience() {

    return (
        <>
            <h1>Disposition of relevant<br /> work experience in short</h1>
            <HeaderLine />

            <Textdiv>
                <h2>Graphic Designer, Project Leader and Accessibility expert in Microsoft Office</h2>
                <h3>Rehngruppen AB • 2019 - now</h3>

                <p>Main areas: Production of templates and documents in Word, PowerPoint, Excel and within the Adobe package.
                    Graphic design. Super User in accessibility adaptation of documents according to the web directive WCAG.
                    Production of complex forms in Acrobat. Data and layout visualization in Power BI. Educating users in
                    accessibility and Microsoft Office. Project management of both large and small projects.</p>
            </Textdiv>

            <Textdiv>
                <h2>Media analyst</h2>
                <h3>Retriever AB • 2013 - 2019</h3>

                <p>Analysis of the media impact for companies, authorities and organizations in both editorial and social media.
                    Presentations and reports for customers in Excel and PowerPoint. Production of graphic material on a project
                    basis, such as marketing material, signs and templates for analysis.</p>
            </Textdiv>
            <Textdiv>
                <h2>Media analyst / Administrator</h2>
                <h3>Observer / Cision / Infopaq • 2006 - 2009</h3>

                <p>Reading and categorizing  media publicity, delivering editorial material and reports to customers. Responsibility
                    for ongoing invoicing and the schedule of the analysis department. Admin for the time accounting system, as well
                    as administrative assistant.</p>
            </Textdiv>

            <Textdiv>
                <h2>AD / Marketing Coordinator</h2>
                <h3>Björn Borg AB • 2000 - 2006</h3>

                <p>Graphic designer and marketing coordinator for the brand Björn Borg, in Sweden and Europe.
                    Production of marketing materials, advertisements, bags, pins, banners, etc. Running photo shoots, responsible for
                    in-house material, website, coordination of press and marketing material for the brand's distributors, monitoring
                    and management of advertising campaigns. Quotation request, budgeting and overseeing the printing process.
                    Packaging design. Assistance when needed for other designers and for other IT issues.</p>
            </Textdiv>

            <h1>Disposition of adequate <br /> education in short</h1>
            <HeaderLine />

            <Textdiv>
                <h2>UX / UI Designer with FrontEnd skills</h2>
                <h3>Chas Academy • 2022 - 2024</h3>

                <p>IT Tech and Operations, UX/UI, interaction design with agile working methods, UI design and graphic design, basic
                    FrontEnd programming, FrontEnd development in React, In-depth interaction design with modelling and requirements
                    management.</p>
            </Textdiv>

            <Textdiv>
                <h2>Basic Front End Development</h2>
                <h3>Changemaker Educations • 2021/22</h3>

                <p>Introduction course in HTML, CSS, JavaScript. Building and deploying a website. </p>
            </Textdiv>
            <Textdiv>
                <h2>Graphic design</h2>
                <h3>Konstskolan i Stockholm • 1998</h3>

                <p>Education in graphic design and web design, Photoshop, Illustrator, QuarkXpress and Dreamweaver.</p>
            </Textdiv>

            <Textdiv>
                <h2>Small college courses</h2>
                <h3>Högskolan i Kalmar • 2004</h3>
                <p>Design för internet - grafisk design | 7,5 p</p>
                <br />
                <h3>Högskolan på Gotland • 2004</h3>
                <p>Bild och genus | 7,5 p vid </p>
                <br />
                <h3>Högskolan på Gotland • 2004</h3>
                <p>Det offentliga rummets gestaltning | 7,5 p</p>
                <br />
                <h3>Växjö Unversitet • 2004</h3>
                <p>Bostaden utformning | 7,5 p</p>
            </Textdiv>

        </>
    );
}

export default Experience;