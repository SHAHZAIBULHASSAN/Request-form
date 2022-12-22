import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
function Studentmedicationdropdown() {
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
                      Please specify the type of medication and any special
                      considerations to take in the transportation and storage
                      of the medication? (required)
                    </Form.Label>
                  </b>
                  <Form.Control
                    required
                    as="textarea"
                    row={3}
                    placeholder="Specify type of medication and any special considerations to take in the transportation and storage of the medication (required)
                      "
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose type of medication and any special
                    considerations to take in the transportation and storage of
                    the medication (required)
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
export default Studentmedicationdropdown;
