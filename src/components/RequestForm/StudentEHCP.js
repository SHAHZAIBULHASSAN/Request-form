import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
function StudentEHCPdropdown() {
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
              <Col sm>
                  <Form.Group as={Col} controlId="validationCustom01">
                    <b>
                      {" "}
                      <Form.Label>
                      Please tell us the date the EHCP was finalized (this can be found on the front cover)
                      </Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="date"
                      placeholder="Specify date the EHCP"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose  date the EHCP.
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
export default StudentEHCPdropdown;
