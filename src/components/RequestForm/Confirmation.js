
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { MDBCheckbox } from 'mdb-react-ui-kit';
function Comfirmation() {
    <div>
      <h1>Application for Travel Assistance</h1>
  
      <div className="mt-3 p-4">
        <h5>Step 3 - Confirmation</h5>
        
      </div>
  
      <Row>
      <>
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Default checkbox' />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Checked checkbox' defaultChecked />
    </>
      </Row>
      <hr></hr>
    </div>;
  }
  export default Comfirmation;