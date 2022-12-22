import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
function StudentEquipmentdropdown() {
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
  const handleChange = (event) => {
    setEquipmentValue(event.target.value);
  };

  const [equipmentList, setEquipmentList] = useState([{}]);
  const [equipmentValue, setEquipmentValue] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://localhost:7277/api/TransportRequest/AllOptionset/ss_transportrequest/ss_mobilityequipment`
      );
      const newData = await response.json();
      setEquipmentList(newData);
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
            value={equipmentValue}
            onChange={handleChange}
          >
            <option value="">Choose Equipment</option>

            {equipmentList.map((Equipment) => (
              <option
                value={Equipment.attributeValue}
                key={Equipment.attributeValue}
              >
                {Equipment.attributeName}
              </option>
            ))}
            <h1>{equipmentValue}</h1>
          </select>
         
          {(equipmentValue == 126560001 ||
            equipmentValue == 126560003 ||
            equipmentValue == 126560002) && (
            <div className="col-md-12 form-group">
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>
                      Please supply the height and length of the wheelchair or
                      buggy (required)
                    </Form.Label>
                  </b>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Specify supply the height and length of the wheelchair or buggy "
                  />
                  <Form.Control.Feedback type="invalid">
                    Please supply the height and length of the wheelchair or
                    buggy (required).
                  </Form.Control.Feedback>
                  <b>
                    <Form.Label>
                      Can the student transfer to a seat whilst traveling?
                      (required)
                    </Form.Label>
                  </b>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Specify Can the student transfer to a seat whilst traveling"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Specify value.
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
export default StudentEquipmentdropdown;
