import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
function Studentrequiredropdown() {
  const handleshowrequest = (event) => {
    const getuser = event.target.value;
    //setShowrequest(getuser);
  };
  const [gender, setGender] = useState("");

  const handlegender = (event) => {
    const getuser = event.target.value;
    setGender(getuser);
  };

  const handleChange = (event) => {
    setSeatTypesValue(event.target.value);
  };
  const [SeatTypes, setSeatTypes] = useState([{}]);
  const [seatTypesValue, setSeatTypesValue] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://localhost:7277/api/TransportRequest/AllOptionset/ss_transportrequest/ss_transportseattype`
      );
      const newData = await response.json();
      setSeatTypes(newData);
      console.log(newData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Row>
        <Col>
          <select
            className="form-control"
            value={seatTypesValue}
            onChange={handleChange}
          >
            <option value="">Select value</option>

            {SeatTypes.map((seat) => (
              <option value={seat.attributeValue} key={seat.attributeValue}>
                {seat.attributeName}
              </option>
            ))}
          </select>

          {(
            seatTypesValue == 126560001 ||
            seatTypesValue == 126560002 ||
            seatTypesValue == 126560003 ||seatTypesValue==126560004) && (
            <div className="col-md-12 form-group">
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>
                      Does the student require a special harness or seatbelt?
                      (required)
                    </Form.Label>
                  </b>
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
                  <Form.Control.Feedback type="invalid">
                    Please choose Does the student require a special harness or
                    seatbelt.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>
                      Please specify the type of seat including height and
                      weight of the seat, seat belt or enhancements needed
                      (required)
                    </Form.Label>
                  </b>
                  <Form.Control
                    required
                    as="textarea"
                    placeholder="Specify  Type of seat including height and weight of the seat, seat belt or enhancements needed "
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose Type of seat including height and weight of
                    the seat, seat belt or enhancements needed .
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
export default Studentrequiredropdown;
