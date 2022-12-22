import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
function Studentlocationdropdown() {
  const [showrequest, setShowrequest] = useState("");

  const handleshowrequest= (event) => {
    const getuser = event.target.value;
    setShowrequest(getuser);
  };
  const [gender, setGender] = useState("");

  const handlegender = (event) => {
    const getuser = event.target.value;
    setGender(getuser);
  };

  return (
    <div>
      <Row>
        <Col>
          <Form.Select
            aria-label="select "
            name="usertype"
            className="form-control"
            onChange={(e) => handleshowrequest(e)}
          >
            <option value="">Select value</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </Form.Select>

          {showrequest === "1" && (
            <div className="col-md-12 form-group">
              <Row>
              <Col sm>
                <Form.Group as={Col} md="mb-6" controlId="validationCustom03">
                  <b>
                    {" "}
                    <Form.Label>House name/number</Form.Label>
                  </b>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Specify house name/number"
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>Street name</Form.Label>
                  </b>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Specify street name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a street name.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Group as={Col} md="mb-6" controlId="validationCustom03">
                  <b>
                    {" "}
                    <Form.Label>Locality</Form.Label>
                  </b>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Specify locality"
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>Town/city</Form.Label>
                  </b>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Specify town/city"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a town/city.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
           
            {/* <Row>
              <Col sm>
                <Form.Group as={Col} md="mb-6" controlId="validationCustom03">
                  <b>
                    {" "}
                    <Form.Label>Phone number</Form.Label>
                  </b>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Specify Phone number"
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>Email Address</Form.Label>
                  </b>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Specify Email Address"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose Email Address.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row> */}
            <Row>
              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <b>
                  {" "}
                  <Form.Label>Post code</Form.Label>
                </b>
                <Form.Control
                  type="text"
                  placeholder="Specify post code"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid post code.
                </Form.Control.Feedback>
              </Form.Group>
           
              </Row>
              <hr />
            </div>
          )}
          
        </Col>
      </Row>
    </div>
  );
}
export default Studentlocationdropdown;
