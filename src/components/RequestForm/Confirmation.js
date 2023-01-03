import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import axios from "axios";

const Comfirmation = (props) => {
  const [posts, setPosts] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState(0);

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    axios
      .post("https://localhost:7277/api/TransportRequest", {
        ContactAddressLine1: posts.ContactAddressLine1,
        ContactAddressLine2:posts.ContactAddressLine1,
        ContactAddressLine3:posts.ContactAddressLine1,
        ContactAddressLine4:posts.ContactAddressLine1,
        ContactAddressPostcode:posts.ContactAddressLine1,
        // ContactEmail:posts.ContactEmail,
        // ContactFirstName:posts.ContactFirstName,
        // ContactLastName:posts.ContactLastName,
        // ContactPhone:posts.ContactPhone,
        // ContactRelationship:posts.ContactRelationship,
        // ContactTitle:posts.ContactTitle,
        // EducationCourseTitle:posts.EducationCourseTitle,
        // EducationEHCPFinalisedDate:posts.EducationEHCPFinalisedDate



      })
      .then(function (response) {
        console.log(response);
      });
  };

  console.log(posts);

  const handleClick = (e) => {};

  return (
    <div>
      <h1>Application for Travel Assistance</h1>
      <Form className="w-50">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={posts.ContactAddressLine1}
            onChange={(e) => {
              setPosts({ ...posts, ContactAddressLine1: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* {name}
       {email} */}
        </Form.Group>
        <Form.Group className="w-100" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Phone Number"
            onChange={(e) => setphoneNumber(e.target.value)}
          />
          {/* {name}
                                     {email} */}
        </Form.Group>

        <br />
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <div className="mt-3 p-4">
        <h4>Step 3 - Confirmation</h4>
        <hr></hr>
        <h5>I Certify that:</h5>

        <hr></hr>
      </div>

      <Row>
        <Col>
          <input
            class="form-control col-lg-1"
            value={posts.ContactAddressLine1}
            onChange={(e) => {
              setPosts({ ...posts, ContactAddressLine1: e.target.value });
            }}
            type="text"
          />
          {/* {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`I have read ${type}`}
            value={studata.StudentName}
            onChange={(e) => {
              setstudata({ ...studata, StudentName: e.target.value });
          }}
          />

          
        </div>
      ))} */}

          {/* {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`I have read ${type}`}
          />

          
        </div>
      ))}
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`I have read ${type}`} 
          />

          
        </div>
      ))}*/}
          <Button variant="success" onClick={handleClick}>
            <i class="fa fa-send-o"></i> <span></span>
            Submit the Application
          </Button>
        </Col>
      </Row>
      <hr></hr>
    </div>
  );
};
export default Comfirmation;
