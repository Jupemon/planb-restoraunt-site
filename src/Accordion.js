import React from 'react';
import {Card, Accordion, Button} from 'react-bootstrap'


const Accord = () => {
    return ( 
        <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <div className="Menu-title">
            Klassikko pizzat <div className="item-price">9.00e</div>
            </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
                <ul style={{listStyle:"none"}}>
                    <li><h8>Hot plan</h8><p>kinkkua, valkosipulia, pekonia, ananasta, tulista mexicanakastiketta</p></li>
                    <li><h8>Opera Special</h8><p>kinkkua, salamia, tonnikalaa</p></li>
                    <li><h8>Vege plan</h8><p>ananasta, aurajuustoa, kirsikkatomaatteja, tuoretta paprikaa</p></li>
                    <li><h8>Quattro Stagione</h8><p>herkkusieniä, katkarapuja, kinkkua, tonnikalaa</p></li>
                    <li><h8>Frutti di Mare</h8><p>katkarapuja, simpukoita, tonnikalaa</p></li>
                    <li><h8>Ciao ciao</h8><p>kinkkua, katkarapuja, tonnikalaa</p></li>
                    <li><h8>Meat Plan</h8><p>kinkkua, salamia, jauheliha, pekonia</p></li>
                    <li><h8>Americano</h8><p>ananasta, kinkkua, aurajuustoa</p></li>
                    <li><h8>Broccolo</h8><p>oliiveja, fetajuustoa, herkkusieniä, parsaa</p></li>
                    <li><h8>BBQ Plan</h8><p>BBQ-kastiketta, jalopenoa, katkarapuja, tuoretta paprikaa, salamia</p></li>
                    <li><h8>Lapponia</h8><p>tonnikalaa, tuoretta paprikaa, fetajuustoa</p></li>
                    <li><h8>Dilliunger</h8><p>kinkkua, salamia, sipulia, kananmunaa</p></li>
                    <li><h8>Oscar</h8><p>salamia, jauhelihaa, aurajuustoa, valkosipulia</p></li>
                    <li><h8>Amigos</h8><p>pepperonimakkaraa, kinkkua, katkarapuja, sipulia, valkosipulia, mustapippuria</p></li>
                    <li><h8>My plan</h8><i class="fas fa-heart" style={{color:"pink",paddingLeft:"10px"}}></i><p>3 täytettä oman valinnan mukaan</p></li>
                </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <div className="Menu-title">
              Special pizzat <div className="item-price">11.50e</div>
            </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
                <ul style={{listStyle:"none"}}>
                    <li><h8>Quattro Mare</h8><p>katkarapuja, kylmäsavulohta, simpukoita, tilliä, rucolaa, smetanaa</p></li>
                    <li><h8>Belluno</h8><p>rucolaa, parmesaanilastuja, vuohenjuustoa, fetajuustoa, kirsikkatomaatteja, chilihiutaleita, majoneesi</p></li>
                    <li><h8>Carini</h8><i class="fas fa-heart" style={{color:"pink",paddingLeft:"10px"}}></i><p>parmankinkkua, kirsikkatomaatteja, rucolaa, parmesaanilastuja, chilihiutaleita, majoneesi</p></li>
                    <li><h8>Milazzo</h8><p>uunilammasta, sipulia, tuoretta paprikaa, aurajuustoa, tsatsiki</p></li>
                    <li><h8>Corleone</h8><p>nyhtöpossua, pepperonimakkaraa, jalopenoa, ananasta, nachoja, BBQ-kastike</p></li>
                </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
            <div className="Menu-title">
              Erikoispizzat <div className="item-price">10.50e</div>
            </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
                <ul style={{listStyle:"none"}}>
                    <li><h8>Bedollo</h8><p>kebablihaa, pepperonimakkaraa, kinkkua, pekonia, majoneesi</p></li>
                    <li><h8>Ragusa</h8><i class="fas fa-heart" style={{color:"pink",paddingLeft:"10px"}}></i><p>kebablihaa, pepperonimakkara, ananasta, aurajuustoa, majoneesi</p></li>
                    <li><h8>Bresimo</h8><p>kebablihaa, herkkusieniä, sipulia, chiliä, majoneesi</p></li>
                    <li><h8>Sassari</h8><p>kebablihaa, jauhelihaa, sipulia, kirsikkatomaatteja, tsatsiki</p></li>
                    <li><h8>Imperia</h8><p>Valintasi mukaan kebablihaa, kanaa tai poroa, jäävuorisalaattia, sipulia, fetajuustoa, kirsikkatomaatteja, kurkkua, majoneesi</p></li>
                    <li><h8>Turin</h8><p>kanaa, tuoretta pinaattia, kirsikkatomaatteja, pestoa, majoneesia</p></li>
                    <li><h8>Cavesso</h8><p>kanaa, ananasta, fetajuustoa, majoneesi</p></li>
                    <li><h8>Saletto</h8><p>poroa, kebablihaa, kinkkua, majoneesi</p></li>
                    <li><h8>Spello</h8><p>poroa, pekonia, aurajuustoa, sipulia, BBQ-kastiketta</p></li>
                    <li><h8>Cardito</h8><p>nyhtöpossua, jauhelihaa, pekonia, sipulia, majoneesi</p></li>
                </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
            <div className="Menu-title">
              Kebabit <div className="item-price">10.00e</div>
            </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
            <ul style={{listStyle:"none"}}>
                <li><h8>Kebab con patate</h8><i class="fas fa-heart" style={{color:"pink", paddingLeft:"10px"}}></i><p>kebablihaa, salaattia, valitsemasi perunat ja kastike</p></li>
                <li><h8>Kebab con riso</h8><p>kebablihaa, riisiä ja valitsemasi kastike</p></li>
                <li><h8>Pitakebab</h8><p>Pitaleivän sisällä kebablihaa, salaattia ja valitsemasi kastike</p></li>
                <li><h8>Rullakebab</h8><p>Rullan sisällä kebablihaa, salaattia ja valitsemasti kastike</p></li>
                <li><h8>Iskender kebab</h8><p>Kebablihaa, leipäkuutioita, jogurttia, salaattia ja valitsemasi kastike</p></li>
                <li><h8>Kebab con insalata</h8><p>Kebabliha tuplana, salaattia ja valitsemasi kastike</p></li>
            </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
            <div className="Menu-title">
              Juomat
            </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
                <ul style={{listStyle:"none"}}>
                <li><h8>Coca-cola 0.33 L<p>2.50e</p></h8></li>
                <li><h8>Coca-cola Zero 0.33 L<p>2.50e</p></h8></li>
                <li><h8>Fanta 0.33 L<p>2.50e</p></h8></li>
                <li><h8>Coca-cola 0.5 L</h8><p>3.00e</p></li>
                <li><h8>Coca-cola 0.5 L</h8><p>3.00e</p></li>
                <li><h8>Fanta 0.5 L</h8><p>3.00e</p></li>
                <li><h8>Maito 0.5 L</h8><p>2.00e</p></li>
                </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
     );
}
 
export default Accord;