import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import StudentEquipmentdropdown from "./StudentEquipment";
import Studentmedicationdropdown from "./StudentMedication";
import Studentseizuredropdown from "./StudentSeizure";
function Studentmobilitydropdown() {
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
                      Please state the mobility issues that that student has
                      (required)
                    </Form.Label>
                  </b>
                  <Form.Control
                    required
                    row={3}
                    as="textarea"
                    placeholder="Specify  the mobility issues that that student has (required) "
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose mobility issues that that student has
                    (required)
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>
                      Does the student use any of the following equipment?
                    </Form.Label>
                  </b>
                  <StudentEquipmentdropdown></StudentEquipmentdropdown>
                  <Form.Control.Feedback type="invalid">
                    Please choose Does the student use any of the following
                    equipment?
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    <Form.Label>
                      Does the student suffer from seizures? (required)
                    </Form.Label>
                  </b>
                  <Studentseizuredropdown></Studentseizuredropdown>

                  <Form.Control.Feedback type="invalid">
                    Please Specify Does the student suffer from seizures?
                    (required).
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    <Form.Label>
                      Does any medication need to be transported with the
                      student? (required)
                    </Form.Label>
                  </b>
                  <Studentmedicationdropdown></Studentmedicationdropdown>

                  <Form.Control.Feedback type="invalid">
                    Please Specify Does any medication need to be transported
                    with the student?
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
export default Studentmobilitydropdown;
