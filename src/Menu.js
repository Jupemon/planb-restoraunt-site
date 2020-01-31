import React from 'react';
import {Badge, Col, Row} from 'react-bootstrap';
import Accord from './Accordion';
import Slider from './Slider';

const Menu = () => {
    return ( 
        <div>
            <h1 style={{textAlign:"left", padding:"55px 55px 55px 55px"}}>
                Menu
            </h1>
            <Row>
                <Col md="6" id="menu">
                    <Accord/>
                </Col>

                <Col md="6">
                    <Slider/>
                </Col>
            </Row>

        </div>
     );
}
 
export default Menu;