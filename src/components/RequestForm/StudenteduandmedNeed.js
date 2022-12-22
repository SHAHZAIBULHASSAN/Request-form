import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Studentmobilitydropdown from "./StudentMobility";
function Studentneeddropdown() {
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
            <option  value="">
              Select value
            </option>
            <option value="1">Yes</option>
            <option value="3">No</option>
          
          </Form.Select>

          {(showrequest === "1" ||
            showrequest === "2" ||
            showrequest === "3" ||
            showrequest === "4" ||
            showrequest === "5") && (
            <div className="col-md-12 form-group">
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>
                      Please describe the special educational needs or medical
                      needs of the student (required)
                    </Form.Label>
                  </b>
                  <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    placeholder="Specify describe the special educational needs or medical needs of the student "
                  />
                  <Form.Control.Feedback type="invalid">
                    Please describe the special educational needs or medical
                    needs of the student .
                  </Form.Control.Feedback>
                  <b>
                    <Form.Label>
                      Does the student have mobility issues? (required)
                    </Form.Label>
                  </b>
                  <Studentmobilitydropdown></Studentmobilitydropdown>
                  <Form.Control.Feedback type="invalid">
                    Please Specify type.
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
export default Studentneeddropdown;
