import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
function RequestSelectdropdown() {
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
            <option value="1">New</option>
            <option value="2">Existing</option>
          </Form.Select>

          {showrequest === "1" && (
            <div className="col-md-12 form-group">
              <Row>
                <Col sm>
                  <Form.Group as={Col} md="mb-6" controlId="validationCustom03">
                    <b>
                      {" "}
                      <Form.Label>Student First Name (required)</Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify First Name"
                    />
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group as={Col} controlId="validationCustom01">
                    <b>
                      {" "}
                      <Form.Label>Student Surname (required)</Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify Surname"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a Surname.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <Form.Group as={Col} md="mb-6" controlId="validationCustom03">
                    <b>
                      {" "}
                      <Form.Label>Student Sex (required)</Form.Label>
                    </b>
                    <br></br>
                    <Form.Select
            aria-label="select "
            name="usertype"
            className="form-control"
            onChange={(e) => handleshowrequest(e)}
          >
            <option selected value="">
              Select value
            </option>
            <option value="1">Female</option>
            <option value="2">Male</option>
            
          </Form.Select>
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group as={Col} controlId="validationCustom01">
                    <b>
                      {" "}
                      <Form.Label>
                        Student date of birth – DD/MM/YY (required)
                      </Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="date"
                      placeholder="Specify student date of birth"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose Student Date of Birth.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
            </div>
          )}
          {showrequest === "2" && (
            <Row>
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>
                      Please select an existing student (required)
                    </Form.Label>
                  </b>
                  <Form.Select aria-label=" select ">
                    <option>Select value</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please Specify application.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
}
export default RequestSelectdropdown;
