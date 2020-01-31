import React from 'react';
import {Card, Accordion, Button, Col, Row} from 'react-bootstrap'
import './App.css';
import Header from './Header';
import food from './pizza.png'
import './style.css';
import './fixed.css'
import Scrollspy from 'react-scrollspy'
import Topimage from './Topimage';
import Menu from './Menu';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
    {/*
      <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
    <li><a href="#section-1">section 1</a></li>
    <li><a href="#section-2">section 2</a></li>
    <li><a href="#section-3">section 3</a></li>
  </Scrollspy>
    
  <div>
        <section id="section-1">section 1</section>
        
        <section id="section-3">section 3</section>
      </div>*/}
        <Header />
        <Topimage />
        <Col>
          <div className="narrow text-center" id="title">
            <h1>Plan b</h1>
            <p className="lead">
            tervetuloa herkuttelemaan meidän ravintolaamme
            </p>
          </div>
        </Col>
        <Topimage />
        <Menu />
        <Contact />
    </div>
  );
}

export default App;
