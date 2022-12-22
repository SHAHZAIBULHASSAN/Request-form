import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import StudentEHCPdropdown from "./StudentEHCP";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Select from "react-select";
import Container from "react-bootstrap/Container";
import ApplicationDetailsData from "./ApplicationDetails";
import { FaWpforms } from "react-icons/fa";
import Selectdropdown from "./RequestDropdown";
import Studentlocationdropdown from "./StudentLocation";
import EducationTypedropdown from "./EducationType";
import Grounddropdown from "./Applyingground";
import Sharetransportpassengerdropdown from "./Sharetransportpassenger";
import Studentneeddropdown from "./StudenteduandmedNeed";
import Studentrequiredropdown from "./StudentRequire";
import { useEffect, useState } from "react";
import Attachment from "./SupportingDocument";

function TelfordRequestForm() {
  const [leveloftaxcredits, setleveloftaxcredits] = useState();
  const handleleveloftaxcredits = (e) => {
    setleveloftaxcredits(e.target.value);
  };
  const [show, setShow] = useState(true);
  const handleClick = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(false);
    }
  };

  const [showhide, setShowhide] = useState("");

  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setShowhide(getuser);
  };

  // set value for default selection
  const [selectedValue, setSelectedValue] = useState(0);

  // handle onChange event of the dropdown

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleChange = (e) => {
    setSelectedValue(e.value);
  };
  const [TittleList, setTittleList] = useState([{}]);
  const [TittleName, setTittleName] = useState();

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://localhost:7277/api/TransportRequest/AllOptionset/ss_transportrequest/ss_contacttitle`
      );
      const newData = await response.json();
      setTittleList(newData);
      console.log(newData);
    };
    fetchData();
  }, []);

  return (
    <div className="mt-3 p-4">
      <Badge bg="primary">
        {" "}
        <h3>
          {" "}
          <FaWpforms /> Application for Travel Assistance
        </h3>
      </Badge>
      <hr />
      <ApplicationDetailsData />
      <Alert variant="muted " className="mt-3">
        <div className="d-grid gap2 p-5 ">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div
              style={{
                backgroundColor: "#d9e3f0",
                textalign: "center",
              }}
            >
              <h2>Your contact details</h2>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>Title</Form.Label>
                  </b>
                  <select
                    className="form-control"
                    value={TittleName}
                    onChange={handleChange}
                  >
                    <option value="">Choose Tittle</option>

                    {TittleList.map((Tittle) => (
                      <option
                        value={Tittle.attributeValue}
                        key={Tittle.attributeValue}
                      >
                        {Tittle.attributeName}
                      </option>
                    ))}
                  </select>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <b>
                    {" "}
                    <Form.Label>First name</Form.Label>
                  </b>
                  <Form.Control required type="text" placeholder="First name" />
                  <Form.Control.Feedback type="invalid">
                    Please choose a First name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <b>
                    {" "}
                    <Form.Label>Surname </Form.Label>
                  </b>
                  <Form.Control required type="text" placeholder="Surname" />
                  <Form.Control.Feedback type="invalid">
                    Please choose a Surname.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <hr></hr>
              <Row>
                <Col sm>
                  <Form.Group as={Col} md="mb-6" controlId="validationCustom03">
                    <b>
                      {" "}
                      <Form.Label>House name/number</Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify house name/number"
                    />
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group as={Col} controlId="validationCustom01">
                    <b>
                      {" "}
                      <Form.Label>Street name</Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify street name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a street name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col sm>
                  <Form.Group as={Col} md="mb-6" controlId="validationCustom03">
                    <b>
                      {" "}
                      <Form.Label>Locality</Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify locality"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a locality.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group as={Col} controlId="validationCustom01">
                    <b>
                      {" "}
                      <Form.Label>Town/city</Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify town/city"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a town/city.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group as={Col} md="6" controlId="validationCustom05">
                  <b>
                    {" "}
                    <Form.Label>Post code</Form.Label>
                  </b>
                  <Form.Control
                    type="text"
                    placeholder="Specify post code"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid post code.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <hr />
              <Row>
                <Col sm>
                  <Form.Group as={Col} controlId="validationCustom01">
                    <b>
                      {" "}
                      <Form.Label>Email Address</Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify Email Address"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose Email Address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group as={Col} md="mb-6" controlId="validationCustom03">
                    <b>
                      {" "}
                      <Form.Label>Phone number</Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify Phone number"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <Row>
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>
                      Is this request for a new or existing student? (required)
                    </Form.Label>
                  </b>{" "}
                  <Selectdropdown></Selectdropdown>
                  <Form.Control.Feedback type="invalid">
                    Please Specify request.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Group as={Col} md="mb-6" controlId="validationCustom03">
                  <b>
                    {" "}
                    <Form.Label>
                      What is your relationship to the student (required)
                    </Form.Label>
                  </b>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Specify your relationship"
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>
                      Is this application for a student in care or leaving care?
                      (required)
                    </Form.Label>
                  </b>

                  <Form.Select
                    aria-label=" select "
                    onChange={(e) => handleshowhide(e)}
                  >
                    <option>Select value</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please Specify application.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {showhide === "1" && (
              <div className="col-md-12 form-group">
                <Row>
                  <Col sm>
                    <Form.Group
                      as={Col}
                      md="mb-12"
                      controlId="validationCustom03"
                    >
                      <div
                        style={{
                          backgroundColor: "#d9e3f0",
                          textalign: "center",
                        }}
                      >
                        {" "}
                        Travel assistance will only be considered for a student
                        in care or leaving care in care in the Telford and
                        Wrekin area.
                      </div>
                      <b>
                        {" "}
                        <Form.Label>
                          {" "}
                          Please provide the full name of the social worker for
                          the student in care (required)
                        </Form.Label>
                      </b>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Specify full name of the social worker for the student in care"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            )}
            <Row>
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>
                      What type of education will the student be in? (required)
                    </Form.Label>
                  </b>
                  <EducationTypedropdown></EducationTypedropdown>
                  <Form.Control.Feedback type="invalid">
                    Please Specify type.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>
                      Does the student have a current Education, Health and Care
                      Plan (EHCP)? (required)
                    </Form.Label>
                  </b>
                  <StudentEHCPdropdown></StudentEHCPdropdown>
                  <Form.Control.Feedback type="invalid">
                    Please Specify type.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    <Form.Label>
                      Do you own your own vehicle? (required)
                    </Form.Label>
                  </b>
                  <Form.Select aria-label=" select ">
                    <option>Select value</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please Specify type.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <Form.Group as={Col} controlId="validationCustom01">
                  <b>
                    {" "}
                    <Form.Label>
                      What date would you like transport assistance to start?
                      DD/MM/YYYY (required)
                    </Form.Label>
                  </b>{" "}
                  <Form.Control required type="date" placeholder="DD/MM/YYYY" />
                  <Form.Control.Feedback type="invalid">
                    Please Specify date.
                  </Form.Control.Feedback>
                </Form.Group>
                <p>
                  This date is for information only.Please note that we cannot
                  confirm a start date untill after your application has been
                  agreed.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label>
                    <b>
                      {" "}
                      Please provide any other detail that you field will help
                      you to make a decision on whether we can offer the travel
                      assistant to the student
                    </b>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Specify Additional Details"
                  />
                </Form.Group>
              </Col>
            </Row>
            <div
              style={{
                backgroundColor: "#d9e3f0",
                textalign: "center",
              }}
            >
              {" "}
              <Row>
                <Col>
                  <p
                    style={{
                      backgroundColor: "#ffde00",
                      margin: "13px 69px 19px 64px",
                      textAlign: "center",
                    }}
                  >
                    Please provide any other detail for two emergency contacts,
                    other than anyone whose details have already been provided
                    on this form,they must be 18 years or older
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <Form.Group as={Col} md="mb-6" controlId="validationCustom03">
                    <b>
                      {" "}
                      <Form.Label>
                        Please supply full name of emergency contact 1
                        (required){" "}
                      </Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify full name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a full name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group as={Col} controlId="validationCustom01">
                    <b>
                      {" "}
                      <Form.Label>
                        What is the relationship of emergency contact 1 to the
                        student? (required)
                      </Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify relationship"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a relationship.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <Form.Group as={Col} md="mb-6" controlId="validationCustom03">
                    <b>
                      {" "}
                      <Form.Label>
                        Contact number for emergency contact 1 (required){" "}
                      </Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify contact number"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a contact number.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group as={Col} controlId="validationCustom01">
                    <b>
                      {" "}
                      <Form.Label>
                        Email address for emergency contact 1
                      </Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify email address"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col sm>
                  <Form.Group as={Col} md="mb-6" controlId="validationCustom03">
                    <b>
                      {" "}
                      <Form.Label>
                        Please supply full name of emergency contact 2
                        (required){" "}
                      </Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify full name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a full name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group as={Col} controlId="validationCustom01">
                    <b>
                      {" "}
                      <Form.Label>
                        What is the relationship of emergency contact 2 to the
                        student? (required)
                      </Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify relationship"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a relationship.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <Form.Group as={Col} md="mb-6" controlId="validationCustom03">
                    <b>
                      {" "}
                      <Form.Label>
                        Contact number for emergency contact 2 (required){" "}
                      </Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify contact number"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a contact number.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group as={Col} controlId="validationCustom01">
                    <b>
                      {" "}
                      <Form.Label>
                        Email address for emergency contact 2
                      </Form.Label>
                    </b>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Specify email address"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <br></br>
            </div>
            <hr />
            <Row>
              <Col>
                <div
                  style={{
                    backgroundColor: "#ADD8E6",
                    textAlign: "center",
                  }}
                >
                  <p>
                    The following information will not be used in your
                    application for student travel assistance but will be used
                    to to determine the correct support is provided if your
                    application is successful.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>
                  <b>
                    {" "}
                    Does the student have any special educational needs or
                    medical needs that we need to be aware of when
                    travelling?(required)
                  </b>
                </Form.Label>
                <Studentneeddropdown></Studentneeddropdown>

                <Form.Control.Feedback type="invalid">
                  Please choose a special educational needs.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>
                  <b>
                    {" "}
                    Does the student require any of the following? (required)
                  </b>
                </Form.Label>
                <Studentrequiredropdown></Studentrequiredropdown>
                <Form.Control.Feedback type="invalid">
                  Please enter value.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>
                  <b>
                    {" "}
                    Will the student try to take off their seatbelt ? (required)
                  </b>
                </Form.Label>
                <Form.Select aria-label=" select ">
                  <option>Select value</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please Will the student try to take off their seatbelt ?.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="validationCustom01">
                <b>
                  <Form.Label>
                    {" "}
                    Does the student have a basic understanding of road safety ?
                    (required)
                  </Form.Label>
                </b>
                <Form.Select aria-label=" select ">
                  <option>Select value</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please enter student have a basic understanding of road safety
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="validationCustom01">
                <b>
                  <Form.Label>
                    {" "}
                    Is the student able to share the transport with other
                    passengers ? (required)
                  </Form.Label>
                </b>

                <Sharetransportpassengerdropdown></Sharetransportpassengerdropdown>
                <Form.Control.Feedback type="invalid">
                  Please enter student able to share the transport with other
                  passengers?
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Col>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label>
                    <b>
                      {" "}
                      Please give any other details that you feel would help us
                      to make a journey easier for the student?
                    </b>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Specify other Details"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label>
                    <b>
                      {" "}
                      What helps calm the student if they become upset during
                      transport?
                    </b>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Specify other Details"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>
                  <b>
                    {" "}
                    Has the student ever taken part in travel training that has
                    been committed by the council? (required)
                  </b>
                </Form.Label>
                <Form.Select aria-label=" select ">
                  <option>Select value</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please enter Has the student ever taken part in travel
                  training that has been provided by the council ? (required).
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row>
              <Col>
                <Form.Group as={Col} controlId="validationCustom01">
                  <Form.Label>
                    <b>
                      {" "}
                      What helps calm the student if they become upset during
                      transport?{" "}
                    </b>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Specify other Details"
                  />
                </Form.Group>
              </Col>
            </Row>
            <hr></hr>
            <Row
              style={{
                backgroundColor: "#ADD8E6",
                textalign: "center",
              }}
            >
              <Col>
                <span>
                  Please continue to step 2 where you will be able to upload any
                  supporting documentatoin before submiting your application.
                </span>
              </Col>
            </Row>

            <Button type="submit" variant="success" onClick={handleClick}>
              <i class="far fa-arrow-alt-circle-right"></i> <span></span>
             Submit application
            </Button>
          </Form>
          {isShown && (
            <div>
              <h2>Some content here</h2>
            </div>
          )}
          {isShown && <Attachment />}
        </div>
      </Alert>
    </div>
  );
}

export default TelfordRequestForm;
