import React from 'react';
import { Jumbotron, Col, Row } from 'react-bootstrap';

const Contact = () => {
    return ( 
        <div>
            <Jumbotron>
            <div className="narrow" id="contact">
            <h3 style={{paddingBottom:"50px"}}>Yhteystiedot</h3> 
                <Col >
                    <Row>
                    <Col md="4">
                        <div className="feature">
                            <i className="fas fa-map-marker-alt fa-4x" data-fa-transform="shrink-3 up-5"></i>
                            <h3 style={{marginTop:"15px"}}>Sijainti</h3>
                            <div></div>
                            <p>90100 Oulu</p>
                            <p>Torikatu 18 </p>
                            <p>Avoinna klo. 11.00–22.00</p>
                            
                        </div>
                    </Col>
                    <Col md="4">
                        <i className="fas fa-phone fa-4x" data-fa-transform="shrink-3 up-5"></i>
                            <h3 style={{marginTop:"15px"}}>Puhelin</h3>
                            <p>050-010135013</p>
                    </Col>
                    <Col md="4">
                        <i className="fas fa-envelope fa-4x" data-fa-transform="shrink-3 up-5"></i>
                        <h3 style={{marginTop:"15px"}}>Sähköposti</h3>
                        <p>planb@info.com</p>
                    </Col>
                    </Row>                             
                </Col>
            </div>
            </Jumbotron>
        </div>
     );
}
 
export default Contact;