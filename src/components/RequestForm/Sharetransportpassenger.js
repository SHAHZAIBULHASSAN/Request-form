import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
function Sharetransportpassengerdropdown() {
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
            <option value="1">No</option>
            <option value="2">Yes</option>
          </Form.Select>

          {showrequest === "1" && (
            <div className="col-md-12 form-group">
              <Col sm>
                  <Form.Group as={Col} controlId="validationCustom01">
                    <b>
                      {" "}
                      <Form.Label>
                      Please state why the student can't share transport (required)
                      </Form.Label>
                    </b>
                    <Form.Control
                      required
                      as="textarea"
                      rows={3}
                     
                      placeholder="Specify why"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose  state why the student can't share transport (required).
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
export default Sharetransportpassengerdropdown;