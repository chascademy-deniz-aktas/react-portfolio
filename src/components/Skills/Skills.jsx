import React from 'react';
import { Link } from 'react-router-dom'

import almeThumb from '../../assets/almedalen.png';
import amecThumb from '../../assets/amec_thumb.svg';
import pbiThumb from '../../assets/pbi_thumb.svg';
import posterThumb from '../../assets/poster_thumb.svg';
import officeThumb from '../../assets/office_thumb.svg';
import artThumb from '../../assets/art.svg';
import booksThumb from '../../assets/books_thumb.svg';
import direktisoThumb from '../../assets/direktiso.svg';
import retrieverThumb from '../../assets/retriever_thumb.svg';

import Card from '../Card'


const Skills = () => {
    const skillsData = [
        {
            id: 1,
            cardPic: amecThumb,
            headline: "AMEC Awards material",
            description: "All the graphic material for the international summit for AMEC.",
            href: "https://www.linkedin.com/in/deniz-isaksson/"
        },
        {
            id: 2,
            cardPic: posterThumb,
            headline: "Library posters",
            description: "Mediearkivets posters to hang in public librarys.",
            buttonLink: "/"
        },
        {
            id: 3,
            cardPic: officeThumb,
            headline: "Custom Office icons",
            description: "Icons for custom banners in Microsoft Office.",
            buttonLink: "/"
        },
        {
            id: 4,
            cardPic: direktisoThumb,
            headline: "Brand style guide",
            description: "Brand Style Guide for a pipe isolation company.",
            buttonLink: "/"
        },
        {
            id: 5,
            cardPic: retrieverThumb,
            headline: "analysis templates",
            description: "All the templates for Retrievers analysis material to be produced.",
            buttonLink: "/"
        },
        {
            id: 6,
            cardPic: pbiThumb,
            headline: "Power BI dashboard",
            description: "A dummy for a customers PowerBI dashboard.",
            buttonLink: "/"
        },
        {
            id: 7,
            cardPic: almeThumb,
            headline: "Almedalsrapporten",
            description: "Booklet with the measurement results for the Almedalen week.",
            buttonLink: "/"
        },
        {
            id: 8,
            cardPic: booksThumb,
            headline: "Book binding",
            description: "Books made in classic crafts.",
            buttonLink: "/"
        },
        {
            id: 9,
            cardPic: artThumb,
            headline: "Art work",
            description: "Exhibition of my paintings.",
            buttonLink: "/"
        }

    ];

    return (
        <>
            {skillsData.map(skill => <Card {...skill} />)}
        </>
    )
};

export default Skills;