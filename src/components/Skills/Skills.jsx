import React from 'react';
import { Link } from 'react-router-dom'

/* Thumbnails for the cards*/
import almeThumb from '../../assets/almedalen.png';
import amecThumb from '../../assets/amec_thumb.svg';
import pbiThumb from '../../assets/pbi_thumb.svg';
import posterThumb from '../../assets/poster.png';
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
            buttonLink: "/amec"
        },
        {
            id: 2,
            cardPic: posterThumb,
            headline: "Library posters",
            description: "Mediearkivets posters to hang in public librarys.",
            buttonLink: "/posters"
        },
        {
            id: 3,
            cardPic: officeThumb,
            headline: "Custom Office icons",
            description: "Icons for custom banners in Microsoft Office.",
            buttonLink: "/office"
        },
        {
            id: 4,
            cardPic: direktisoThumb,
            headline: "Brand style guide",
            description: "Brand Style Guide for a pipe isolation company.",
            buttonLink: "/brandstyleguide"
        },
        {
            id: 5,
            cardPic: retrieverThumb,
            headline: "analysis templates",
            description: "All the templates for Retrievers analysis material to be produced.",
            buttonLink: "/analysis"
        },
        {
            id: 6,
            cardPic: pbiThumb,
            headline: "Power BI dashboard",
            description: "A dummy for a customers PowerBI dashboard.",
            buttonLink: "/powerbi"
        },
        {
            id: 7,
            cardPic: almeThumb,
            headline: "Almedalsrapporten",
            description: "Booklet with the measurement results for the Almedalen week.",
            buttonLink: "/almedalen"
        },
        {
            id: 8,
            cardPic: booksThumb,
            headline: "Book binding",
            description: "Books made in classic crafts.",
            buttonLink: "/bookbinding"
        },
        {
            id: 9,
            cardPic: artThumb,
            headline: "Art work",
            description: "Exhibition of my paintings.",
            buttonLink: "/artwork"
        }
    ];

    return (
        <>
            {skillsData.map(skill => <Card {...skill} />)}
        </>
    )
};

export default Skills;