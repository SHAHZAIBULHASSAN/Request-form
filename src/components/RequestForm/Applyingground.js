
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function Applyinggrounddropdown() {
  const [showhide, setShowhide] = useState("");

  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setShowhide(getuser);
  };

  const handleChange = (event) =>{
    setGroundsforapplicationValue(event.target.value);
}
  const [groundsforapplication, setGroundsforapplicationList] = useState([{}]);
  const [groundsforapplicationValue, setGroundsforapplicationValue] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://localhost:7277/api/TransportRequest/AllOptionset/ss_transportrequest/ss_groundsforapplication`
      );
      const newData = await response.json();
      setGroundsforapplicationList(newData);
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
            value={groundsforapplicationValue}
            onChange={handleChange}
          >
            <option value="">Select Choose</option>

            {groundsforapplication.map((Applyingground) => (
              <option
                value={Applyingground.attributeValue}
                key={Applyingground.attributeValue}
              >
                {Applyingground.attributeName}
              </option>
            ))}
          </select>

        
        </Col>
      </Row>

      {groundsforapplicationValue == 126560001 && (
        <div className="col-md-12 form-group">
          <br />
          <Row>
            <br />
            <Col sm>
              <Form.Group as={Col} md="mb-6" controlId="validationCustom03">
                <Form.Label>
                  <b>Proof of Free School Meals (FSM) entitlement</b>
                </Form.Label>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Yes"
                      name="yes"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="No"
                      name="no"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group as={Col} md="mb-6" controlId="validationCustom03">
                <Form.Label>
                  <b>The maximum level of working tax credits</b>
                </Form.Label>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Yes"
                      name="yes"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="No"
                      name="no"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </Form.Group>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}
export default Applyinggrounddropdown;
