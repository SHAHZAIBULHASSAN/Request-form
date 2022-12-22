import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
function Studentseatsdropdown() {
  const [showrequest, setShowrequest] = useState("");
  const [SeatTypes, setSeatTypes] = useState([{}]);
  const [seatTypesValue, setSeatTypesValue] = useState();
  const [gender, setGender] = useState("");

  const handleshowrequest = (event) => {
    const getuser = event.target.value;
    setShowrequest(getuser);
  };

  const handlegender = (event) => {
    const getuser = event.target.value;
    setGender(getuser);
  };

  const handleChange = (event) => {
   
    setSeatTypesValue(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://localhost:7277/api/TransportRequest/AllOptionset/ss_transportrequest/ss_transportseattype`
      );
      const newData = await response.json();
      SeatTypes(newData);
      //console.log(newData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <select
            className="form-control"
            value={SeatTypesValue}
            onChange={handleChange}
          >
            <option value="">Select Choose</option>

            {SeatTypes.map((seat) => (
              <option value={seat.attributeValue} key={seat.attributeValue}>
                {seat.attributeName}
              </option>
            ))}
          </select>
          
         

          {seatTypesValue == 126560001 && (
            <div className="col-md-12 form-group">
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>
                      Please tell us the date the EHCP was finalized (this can
                      be found on the front cover)
                    </Form.Label>
                  </b>
                  <Form.Control
                    required
                    type="date"
                    placeholder="Specify date the EHCP"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose date the EHCP.
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
export default Studentseatsdropdown;
