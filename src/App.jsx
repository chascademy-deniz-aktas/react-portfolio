import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Experience from './pages/Experience';
import Navbar from './Navbar';
import Footer from './components/Footer';

import Amec from './pages/Amec';
import Office from './pages/Office';
import Brandstyleguide from './pages/Brandstyleguide';
import Analysis from './pages/Analysis';
import PowerBI from './pages/PowerBI';
import Almedalen from './pages/Almedalen';
import Bookbinding from './pages/Bookbinding';
import Artwork from './pages/Artwork';



const MainContainer = styled.div`
  grid-area: main;
  margin-top: 5em;
  padding-left: 2em;
  padding-right: 2em;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows:  5rem repeat(3, 1fr) 7rem;
  grid-template-columns: repeat(5, 1fr);
  background-color: #010101;
  grid-template-areas: 
  "top top top top top"
  "main main main main main"
  "main main main main main"
  "main main main main main"
  "footer footer footer footer footer";
  min-height: 100vh;
`;

function App() {

  return (
    <Router>
      <GridContainer>

        <Navbar />

        <MainContainer>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/amec">
              <Amec />
            </Route>
            <Route path="/office">
              <Office />
            </Route>
            <Route path="/brandstyleguide">
              <Brandstyleguide />
            </Route>
            <Route path="/analysis">
              <Analysis />
            </Route>
            <Route path="/powerbi">
              <PowerBI />
            </Route>
            <Route path="/almedalen">
              <Almedalen />
            </Route>
            <Route path="/bookbinding">
              <Bookbinding />
            </Route>
            <Route path="/artwork">
              <Artwork />
            </Route>
          </Switch>
        </MainContainer>

        <Footer />

      </GridContainer>
    </Router >
  );
}

export default App;