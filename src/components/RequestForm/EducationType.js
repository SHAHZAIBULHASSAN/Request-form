import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Studentlocationdropdown from "./StudentLocation";
import Grounddropdown from "./Applyingground";
import { useEffect, useState } from "react";
function EducationTypedropdown() {
  const [key, setKey] = useState("");

  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setKey(getuser);
  };

  const [EducationschoolList, setEducationschoolList] = useState([{}]);
  const [Educationschool, setEducationschool] = useState();
  // handle onChange event of the dropdown
  const handleChange = (event) =>{
    setEducationschool(event.target.value);
}
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://localhost:7277/api/TransportRequest/AllOptionset/ss_transportrequest/ss_educationschooltype`
      );
      const newData = await response.json();
      setEducationschoolList(newData);
      console.log(newData);
    };
    fetchData();
  }, []);



  return (
    <div>
      <Row>
        <Col>
          {" "}
          <select
            className="form-control"
            value={Educationschool}
            onChange={handleChange}
          >
            <option value="">Choose Education Type</option>

            {EducationschoolList.map((Education) => (
              <option
                value={Education.attributeValue}
                key={Education.attributeValue}
                setKey={key}
              >
                {Education.attributeName}
              </option>
            ))}
          </select>
         
        </Col>
      </Row>

      {(Educationschool == 126560000 || Educationschool == 126560001) && (
        <div className="col-md-12 form-group">
          <Row>
            <Col sm>
              <Form.Group as={Col} md="mb-12" controlId="validationCustom03">
                <b>
                  {" "}
                  <Form.Label>
                    {" "}
                    Does the student live at a different address than you?
                    (required)
                  </Form.Label>
                </b>
                <Studentlocationdropdown></Studentlocationdropdown>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Form.Group as={Col} md="mb-12" controlId="validationCustom03">
                <b>
                  {" "}
                  <Form.Label>
                    Name of school/college attending (required)
                  </Form.Label>
                </b>
                <Form.Select aria-label=" select ">
                  <option>Select a school/college</option>
                  <option value="1">London college</option>
                  <option value="2">Crescent school</option>
                </Form.Select>
                <Form.Text id="passwordHelpBlock" muted>
                  Please contact is if the school/college is missing from the
                  above list either on 01952 384545 or{" "}
                  <u style={{ color: "red" }}>transport@telford.gov.uk</u>
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Form.Group as={Col} md="mb-12" controlId="validationCustom03">
                <b>
                  {" "}
                  <Form.Label>
                    {" "}
                    Date admitted to school - DD/MM/YYYY (required)
                  </Form.Label>
                </b>
                <Form.Control
                  required
                  type="date"
                  placeholder="Specify Date admitted to school"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>
                  <b> On what grounds are you applying for? (required)</b>
                </Form.Label>
                <Grounddropdown></Grounddropdown>
              </Form.Group>
            </Col>
          </Row>
        </div>
      )}

      {(Educationschool == 126560005 ||
        Educationschool == 126560004 ||
        Educationschool == 126560003 ||
        Educationschool == 126560002) && (
        <div className="col-md-12 form-group">
          <Row>
            <Col>
              <div
                style={{
                  backgroundColor: "#FFFFE0",
                }}
              >
                <span>
                  {" "}
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                  Post Sixteen applicants are required to contribute towards
                  transport payments, Applicants on low income will contribute
                  less but are required to upload documentary evidence as part
                  of this application to prove low income status.
                </span>
                <hr></hr>
                <Form.Group as={Col} md="mb-11" controlId="validationCustom03">
                  {["radio"].map((type) => (
                    <div key={` agree-${type}`} className="mb-3">
                      <Form.Check
                        type={type}
                        id={`agree-${type}`}
                        label={
                          <b>
                            Please check this box to confirm that you understand
                            the above statement and are prepared to contribute
                            to transport costs (required)
                          </b>
                        }
                      />
                    </div>
                  ))}

                  <Form.Control.Feedback type="invalid">
                    Please choose a full name.
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Form.Group as={Col} md="mb-12" controlId="validationCustom03">
                <b>
                  {" "}
                  <Form.Label>
                    {" "}
                    Name of school/college attending (required)
                  </Form.Label>
                </b>
                <Form.Select aria-label=" select ">
                  <option>Select a school/college</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Select>
                <Form.Text id="passwordHelpBlock" muted>
                  Please contact is if the school/college is missing from the
                  above list either on 01952 384545 or{" "}
                  <u style={{ color: "red" }}>transport@telford.gov.uk</u>
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Form.Group as={Col} md="mb-12" controlId="validationCustom03">
                <b>
                  {" "}
                  <Form.Label> Title of the course (required)</Form.Label>
                </b>
                <Form.Control
                  required
                  type="text"
                  placeholder="Specify course tittle"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Form.Group as={Col} md="mb-12" controlId="validationCustom03">
                <b>
                  {" "}
                  <Form.Label>
                    {" "}
                    What qualification will this course lead to? - BTEC, NVQ, A
                    levels, etc (required)
                  </Form.Label>
                </b>
                <Form.Control
                  required
                  type="text"
                  placeholder="Specify qualification"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Form.Group as={Col} controlId="validationCustom01">
                <b>
                  {" "}
                  <Form.Label>
                    How many hours per week will the student be completing this
                    course? (required)
                  </Form.Label>
                </b>
                <Form.Select aria-label=" select ">
                  <option>Select value</option>
                  <option value="1">Under 10 hours</option>
                  <option value="2">10 to 15 hours</option>
                  <option value="2">16 to 20 hours</option>
                  <option value="2">Over 20 hours</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please choose a How many hours per week will the student be
                  completing this course? (required).
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Form.Group as={Col} md="mb-12" controlId="validationCustom03">
                <b>
                  {" "}
                  <Form.Label>
                    {" "}
                    Is this the student's first year of studying this course?
                    (required)
                  </Form.Label>
                </b>
                <Form.Select aria-label=" select ">
                  <option>Select value</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Form.Group as={Col} md="mb-12" controlId="validationCustom03">
                <b>
                  {" "}
                  <Form.Label>
                    {" "}
                    Is the student studying at their nearest and suitable
                    school/college offering this course (required)
                  </Form.Label>
                </b>
                <Form.Select aria-label=" select ">
                  <option>Select value</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Form.Group as={Col} md="mb-12" controlId="validationCustom03">
                <b>
                  {" "}
                  <Form.Label>
                    {" "}
                    Why can't transport be provided by the student's family or
                    friends? (required){" "}
                  </Form.Label>
                </b>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Specify Why"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Form.Group as={Col} md="mb-12" controlId="validationCustom03">
                <b>
                  {" "}
                  <Form.Label>
                    {" "}
                    Does the student receive Disability Living Allowance (DLA)?
                    (required){" "}
                  </Form.Label>
                </b>
                <Form.Select aria-label=" select ">
                  <option>Select value</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Form.Group as={Col} md="mb-12" controlId="validationCustom03">
                <b>
                  {" "}
                  <Form.Label>
                    {" "}
                    Has the student applied to their chosen school/college for a
                    bursary? (required){" "}
                  </Form.Label>
                </b>
                <Form.Select aria-label=" select ">
                  <option>Select value</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}
export default EducationTypedropdown;
