import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
function Studentseizuredropdown() {
  const [showrequest, setShowrequest] = useState("");

  const handleshowrequest = (event) => {
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
            <option>Select value</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </Form.Select>
          {showrequest === "1" && (
            <div className="col-md-12 form-group">
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>
                      Please state the type of seizure that the student suffers
                      from (required)?
                    </Form.Label>
                  </b>
                  <Form.Control
                    required
                    as="textarea"
                    placeholder=" Please state the type of seizure that the student suffers from (required)"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose type of medication and any special
                    considerations to take in the transportation and storage of
                    the medication (required)
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>
                      Please state any signs that the student may show before a
                      seizure occurs?
                    </Form.Label>
                  </b>
                  <Form.Control
                    required
                    as="textarea"
                    placeholder=" Please state any signs that the student may show before a seizure occurs"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose any signs that the student may show before a
                    seizure occurs
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>
                      How often do the seizures occur? (required)
                    </Form.Label>
                  </b>
                  <Form.Control
                    required
                    type="text"
                    placeholder=" Please state How often do the seizures occur?"
                  />
                  <Form.Control.Feedback type="invalid">
                    How often do the seizures occur? (required)
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}
export default Studentseizuredropdown;
