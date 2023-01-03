import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Select from "react-select";
import Container from "react-bootstrap/Container";
import ApplicationDetailsData from "./ApplicationDetails";
import { FaWpforms } from "react-icons/fa";
import { useEffect, useState } from "react";
import Attachment from "./SupportingDocument";
import Comfirmation from "./Confirmation";
import axios from "axios";

function TelfordRequestForm() {
  const [isShown, setIsShown] = useState(false);

  const [studata, setstudata] = useState({});
  console.log(studata);
  const handleChange = (e) => {
    setstudata(e.value);
  };
  const handleClick = (event) => {
    setIsShown((current) => !current);
    axios
      .post("https://localhost:7277/api/TransportRequest", {
        ContactAddressLine1: studata.ContactAddressLine1,
        ContactAddressLine2: studata.ContactAddressLine2,
        ContactAddressLine3: studata.ContactAddressLine3,
        ContactAddressLine4: studata.ContactAddressLine4,
        ContactAddressPostcode: studata.ContactAddressPostcode,
        ContactEmail: studata.ContactEmail,
        ContactFirstName: studata.ContactFirstName,
        ContactLastName: studata.ContactLastName,
        ContactPhone: studata.ContactPhone,
        ContactTitle: studata.ContactTitle,
        DocumentViewerControl: studata.DocumentViewerControl,

        ContactRelationship: studata.ContactRelationship,
        StudentDetailsAddressLine1: studata.StudentDetailsAddressLine1,
        StudentDetailsAddressLine2: studata.StudentDetailsAddressLine2,
        StudentDetailsAddressLine3: studata.StudentDetailsAddressLine3,
        StudentDetailsAddressLine4: studata.StudentDetailsAddressLine4,
        StudentDetailsAddressPostcode: studata.StudentDetailsAddressPostcode,
        // StudentDetailsLivesAtDifferentAddress:
        //   studata.StudentDetailsLivesAtDifferentAddress,
        // EducationFirstYearOfStudy: studata.EducationFirstYearOfStudy,
        // EducationCourseTitle: studata.EducationCourseTitle,
        // EducationHoursPerWeek: studata.EducationHoursPerWeek,
        // EducationNearestSchoolCollege: studata.EducationNearestSchoolCollege,
        // EducationQualification: studata.EducationQualification,
        // EducationWhyNotNearestSchool: studata.EducationWhyNotNearestSchool,
        // GroundsForApplication: studata.GroundsForApplication,
        // MaximumTaxCredits: studata.MaximumTaxCredits,
        // MobilityDetails: studata.MobilityDetails,
         MobilityEquipment: studata.MobilityEquipment,
        // MobiliyHasIssues: studata.MobiliyHasIssues,
        // OtherDetail: studata.OtherDetail,
        // SeizuresFrequency: studata.SeizuresFrequency,
        // SeizuresSigns: studata.SeizuresSigns,
        // SeizuresHasSeizures: studata.SeizuresHasSeizures,
        // SeizuresType: studata.SeizuresType,
         SendOrMedicalDetails: studata.SendOrMedicalDetails,
        // SendOrMedicalHasSendOrMedicalNeeds:
        //   studata.SendOrMedicalHasSendOrMedicalNeeds,

         MobilityEquipmentDimensions: studata.MobilityEquipmentDimensions,
        // EducationEHCPFinalisedDate: studata.EducationEHCPFinalisedDate,
        // EducationSchoolAdmittanceDate: studata.EducationSchoolAdmittanceDate,
        // EducationHasAppliedForBursary: studata.EducationHasAppliedForBursary,
        // EducationHasEHCPPlan: studata.EducationHasEHCPPlan,
         EducationSchoolType: studata.EducationSchoolType,
        // StudentDetailHasDisabilityLivingAllowance:
        //   studata.StudentDetailHasDisabilityLivingAllowance,
        // StudentDetailInCare: studata.StudentDetailInCare,
        // StudentDetailsSocialWorker: studata.StudentDetailsSocialWorker,
        // SupportCalming: studata.SupportCalming,
        // SupportOther: studata.SupportOther,
        // Transport_HasTransportMedication:
        //   studata.Transport_HasTransportMedication,
        // Transport_MedicationDetails: studata.Transport_MedicationDetails,
        // TransportHarnessRequired: studata.TransportHarnessRequired,
        // TransportHasOwnVehicle: studata.TransportHasOwnVehicle,
        // TransportRemoveSeatBelt: studata.TransportRemoveSeatBelt,
        // TransportRequestId: studata.TransportRequestId,
        // TransportRequestNumber: studata.TransportRequestNumber,
        // TransportRoadSafety: studata.TransportRoadSafety,
        // TransportSeatDetails: studata.TransportSeatDetails,
        // TransportSeatType: studata.TransportSeatType,
        // TransportStartDate: studata.TransportStartDate,
        // TransportStudentJourneyDetails: studata.TransportStudentJourneyDetails,
        // TransportTravelTraining: studata.TransportTravelTraining,
        // TransportWhyNotFamilyOrFriends: studata.TransportWhyNotFamilyOrFriends
      })
      .then(function (response) {
        console.log(response);
      });
  };

  const [data, setData] = useState("");

  const parentToChild = () => {
    setData("This is data from Parent Component to the Child Component.");
  };
  const [studentLocation, setStudentLocation] = useState("");

  const handlelocation = (event) => {
    const getuser = event.target.value;
    setStudentLocation(getuser);
  };

  const [studentrequire, setStudentrequire] = useState("");

  const handlestudentrequirevalue = (event) => {
    const getuser = event.target.value;
    setStudentrequire(getuser);
  };
  const [leveloftaxcredits, setleveloftaxcredits] = useState();
  const handleleveloftaxcredits = (e) => {
    setleveloftaxcredits(e.target.value);
  };
  const [show, setShow] = useState(true);

  const [showhide, setShowhide] = useState("");

  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setShowhide(getuser);
  };
  const [request, setrequest] = useState("");

  const handlebursary = (event) => {
    const getuser = event.target.value;
    setrequest(getuser);
  };
  // set value for default selection
  const [selectedValue, setSelectedValue] = useState(0);

  // handle onChange event of the dropdown

  const [validated, setValidated] = useState(false);
  const handlestudentshowrequest = (event) => {
    const getuser = event.target.value;
    //setShowrequest(getuser);
  };

  const [showECHP, setShowECHP] = useState("");

  const handleEHCP = (event) => {
    const getuser = event.target.value;
    setShowECHP(getuser);
  };
  const [showmedication, setShowMedication] = useState("");

  const handlemedication = (event) => {
    const getuser = event.target.value;
    setShowMedication(getuser);
  };
  const [showtransport, setShowTransport] = useState("");

  const handletransport = (event) => {
    const getuser = event.target.value;
    setShowTransport(getuser);
  };
  const [showstudentstate, setShowstudentstate] = useState("");

  const handleStudentstate = (event) => {
    const getuser = event.target.value;
    setShowstudentstate(getuser);
  };

  const [TitleList, setTitleList] = useState([{}]);
  const [TitleName, setTitleName] = useState();

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const handleSubmit = (event) => {
    console.log("Clicked");
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    axios
      .post("https://localhost:7277/api/TransportRequest", {
        ContactAddressLine1: studata.ContactAddressLine1,
        ContactAddressLine2: studata.ContactAddressLine2,
        ContactAddressLine3: studata.ContactAddressLine3,
        ContactAddressLine4: studata.ContactAddressLine4,
        ContactAddressPostcode: studata.ContactAddressPostcode,
        ContactEmail: studata.ContactEmail,
        ContactFirstName: studata.ContactFirstName,
        ContactLastName: studata.ContactLastName,
        ContactPhone: studata.ContactPhone,
        ContactTitle: studata.ContactTitle,
        DocumentViewerControl: studata.DocumentViewerControl,

        ContactRelationship: studata.ContactRelationship,
        StudentDetailsAddressLine1: studata.StudentDetailsAddressLine1,
        StudentDetailsAddressLine2: studata.StudentDetailsAddressLine2,
        StudentDetailsAddressLine3: studata.StudentDetailsAddressLine3,
        StudentDetailsAddressLine4: studata.StudentDetailsAddressLine4,
        StudentDetailsAddressPostcode: studata.StudentDetailsAddressPostcode,
        // StudentDetailsLivesAtDifferentAddress:
        //   studata.StudentDetailsLivesAtDifferentAddress,
        // EducationFirstYearOfStudy: studata.EducationFirstYearOfStudy,
        // EducationCourseTitle: studata.EducationCourseTitle,
        // EducationHoursPerWeek: studata.EducationHoursPerWeek,
        // EducationNearestSchoolCollege: studata.EducationNearestSchoolCollege,
        // EducationQualification: studata.EducationQualification,
        // EducationWhyNotNearestSchool: studata.EducationWhyNotNearestSchool,
        // GroundsForApplication: studata.GroundsForApplication,
        // MaximumTaxCredits: studata.MaximumTaxCredits,
        // MobilityDetails: studata.MobilityDetails,
        MobilityEquipment: studata.MobilityEquipment,
         MobiliyHasIssues: studata.MobiliyHasIssues,
        // OtherDetail: studata.OtherDetail,
        // SeizuresFrequency: studata.SeizuresFrequency,
        // SeizuresSigns: studata.SeizuresSigns,
        // SeizuresHasSeizures: studata.SeizuresHasSeizures,
        // SeizuresType: studata.SeizuresType,
        SendOrMedicalDetails: studata.SendOrMedicalDetails,
         SendOrMedicalHasSendOrMedicalNeeds:
          studata.SendOrMedicalHasSendOrMedicalNeeds,

        MobilityEquipmentDimensions: studata.MobilityEquipmentDimensions,
        // EducationEHCPFinalisedDate: studata.EducationEHCPFinalisedDate,
        // EducationSchoolAdmittanceDate: studata.EducationSchoolAdmittanceDate,
        // EducationHasAppliedForBursary: studata.EducationHasAppliedForBursary,
         EducationHasEHCPPlan: studata.EducationHasEHCPPlan,
        EducationSchoolType: studata.EducationSchoolType,
        // StudentDetailHasDisabilityLivingAllowance:
        //   studata.StudentDetailHasDisabilityLivingAllowance,
        // StudentDetailInCare: studata.StudentDetailInCare,
        // StudentDetailsSocialWorker: studata.StudentDetailsSocialWorker,
        // SupportCalming: studata.SupportCalming,
        // SupportOther: studata.SupportOther,
        // Transport_HasTransportMedication:
        //   studata.Transport_HasTransportMedication,
        // Transport_MedicationDetails: studata.Transport_MedicationDetails,
        // TransportHarnessRequired: studata.TransportHarnessRequired,
        // TransportHasOwnVehicle: studata.TransportHasOwnVehicle,
        // TransportRemoveSeatBelt: studata.TransportRemoveSeatBelt,
        // TransportRequestId: studata.TransportRequestId,
        // TransportRequestNumber: studata.TransportRequestNumber,
        // TransportRoadSafety: studata.TransportRoadSafety,
        // TransportSeatDetails: studata.TransportSeatDetails,
        // TransportSeatType: studata.TransportSeatType,
        // TransportStartDate: studata.TransportStartDate,
        // TransportStudentJourneyDetails: studata.TransportStudentJourneyDetails,
        // TransportTravelTraining: studata.TransportTravelTraining,
        // TransportWhyNotFamilyOrFriends: studata.TransportWhyNotFamilyOrFriends
      })
      .then(function (response) {
        console.log(response);
      });
  };

  const [studentneed, setStudentneed] = useState("");

  const handlestudentneed = (event) => {
    const getuser = event.target.value;
    setStudentneed(getuser);
  };
  const [showmobility, setShowMobility] = useState("");

  const handlemobility = (event) => {
    const getuser = event.target.value;
    setShowMobility(getuser);
  };
  const datasend = (event) => {
    const getuser = event.target.value;
    setschoolList(getuser);
  };
  const [schoollist, setschoolList] = useState([{}]);
  //const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://localhost:7277/api/School`);
      const newData = await response.json();
      setschoolList(newData);
      console.log(newData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://localhost:7277/api/TransportRequest/AllOptionset/ss_transportrequest/ss_contacttitle`
      );
      const newData = await response.json();
      setTitleList(newData);
      console.log(newData);
    };
    fetchData();
  }, []);
  const handleschool = (event) => {
    const getuser = event.target.value;
    setschoolList(getuser);
  };

  const handleApplying = (event) => {
    setGroundsforapplicationValue(event.target.value);
  };
  const [groundsforapplication, setGroundsforapplicationList] = useState([{}]);
  const [groundsforapplicationValue, setGroundsforapplicationValue] =
    useState();

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
  const [showseizure, setShowSeizure] = useState("");

  const handleseizure = (event) => {
    const getuser = event.target.value;
    setShowSeizure(getuser);
  };
  const [key, setKey] = useState("");
  const [showstate, setShowrequest] = useState("");

  const [EducationschoolList, setEducationschoolList] = useState([{}]);
  const [Educationschool, setEducationschool] = useState();

  // handle onChange event of the dropdown
  const handleChangeEducationschool = (event) => {
    setEducationschool(event.target.value);
  };

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

  const handlestudentrequire = (event) => {
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
  const [showequipment, setShowEquipment] = useState("");

  const handlesShowEquipment = (event) => {
    const getuser = event.target.value;
    setShowEquipment(getuser);
  };

  const handleEquipment = (event) => {
    setEquipmentValue(event.target.value);
  };

  const [equipmentList, setEquipmentList] = useState([{}]);
  const [equipmentValue, setEquipmentValue] = useState();
  const handleChangeEquipment = (event) => {};

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
  //const validate
  //make validation && validate
  return (
    <div className="mt-3 p-4">
      <Alert variant="muted " className="mt-3">
        <div className="d-grid gap2 p-5 ">
          {isShown && handleForm ? (
            <div>
              <Attachment name={studata} setname={setstudata} />
            </div>
          ) : (
            <div>
              <ApplicationDetailsData />
              <Form noValidate validated={validated}>
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
                        name={studata.ContactTitle}
                        onChange={(e) => {
                          setstudata({
                            ...studata,
                            ContactTitle: e.target.value,
                          });
                        }}
                      >
                        <option value="">Choose Title</option>

                        {TitleList.map((Title) => (
                          <option
                            value={Title.attributeValue}
                            key={Title.attributeValue}
                            onChange={handleChange}
                          >
                            {Title.attributeName}
                          </option>
                        ))}
                      </select>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <b>
                        {" "}
                        <Form.Label>First name</Form.Label>
                      </b>
                      <Form.Control
                        required
                        type="text"
                        value={studata.ContactFirstName}
                        onChange={(e) => {
                          setstudata({
                            ...studata,
                            ContactFirstName: e.target.value,
                          });
                        }}
                        placeholder="First name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a First name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                      <b>
                        {" "}
                        <Form.Label>Surname </Form.Label>
                      </b>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Surname"
                        value={studata.ContactLastName}
                        onChange={(e) => {
                          setstudata({
                            ...studata,
                            ContactLastName: e.target.value,
                          });
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a Surname.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <hr></hr>
                  <Row>
                    <Col sm>
                      <Form.Group
                        as={Col}
                        md="mb-6"
                        controlId="validationCustom03"
                      >
                        <b>
                          {" "}
                          <Form.Label>House name/number</Form.Label>
                        </b>
                        <Form.Control
                          required
                          type="text"
                          value={studata.ContactAddressLine1}
                          onChange={(e) => {
                            setstudata({
                              ...studata,
                              ContactAddressLine1: e.target.value,
                            });
                          }}
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
                          value={studata.ContactAddressLine2}
                          onChange={(e) => {
                            setstudata({
                              ...studata,
                              ContactAddressLine2: e.target.value,
                            });
                          }}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a street name.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm>
                      <Form.Group
                        as={Col}
                        md="mb-6"
                        controlId="validationCustom03"
                      >
                        <b>
                          {" "}
                          <Form.Label>Locality</Form.Label>
                        </b>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Specify locality"
                          value={studata.ContactAddressLine3}
                          onChange={(e) => {
                            setstudata({
                              ...studata,
                              ContactAddressLine3: e.target.value,
                            });
                          }}
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
                          value={studata.ContactAddressLine4}
                          onChange={(e) => {
                            setstudata({
                              ...studata,
                              ContactAddressLine4: e.target.value,
                            });
                          }}
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
                        value={studata.ContactAddressPostcode}
                        required
                        onChange={(e) => {
                          setstudata({
                            ...studata,
                            ContactAddressPostcode: e.target.value,
                          });
                        }}
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
                          value={studata.ContactEmail}
                          onChange={(e) => {
                            setstudata({
                              ...studata,
                              ContactEmail: e.target.value,
                            });
                          }}
                          placeholder="Specify Email Address"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose Email Address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm>
                      <Form.Group
                        as={Col}
                        md="mb-6"
                        controlId="validationCustom03"
                      >
                        <b>
                          {" "}
                          <Form.Label>Phone number</Form.Label>
                        </b>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Specify Phone number"
                          value={studata.ContactPhone}
                          onChange={(e) => {
                            setstudata({
                              ...studata,
                              ContactPhone: e.target.value,
                            });
                          }}
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
                          Is this request for a new or existing student?
                          (required)
                        </Form.Label>
                      </b>{" "}
                      <Form.Select
                        aria-label="select "
                        name="usertype"
                        className="form-control"
                        value={studata.Request}
                        onChange={(e) => {
                          handlestudentrequirevalue(e);
                          setstudata({ ...studata, Request: e.target.value });
                        }}
                        //  onChange={(e) => handlestudentrequirevalue(e)}
                      >
                        <option value="">Select value</option>
                        <option value="1">New</option>
                        <option value="0">Existing</option>
                      </Form.Select>
                      {studentrequire === "1" && (
                        <div className="col-md-12 form-group">
                          <Row>
                            <Col sm>
                              <Form.Group
                                as={Col}
                                md="mb-6"
                                controlId="validationCustom03"
                              >
                                <b>
                                  {" "}
                                  <Form.Label>
                                    Student First Name (required)
                                  </Form.Label>
                                </b>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Specify First Name"
                                  value={studata.FirstName}
                                  onChange={(e) => {
                                    setstudata({
                                      ...studata,
                                      FirstName: e.target.value,
                                    });
                                  }}
                                />
                              </Form.Group>
                            </Col>
                            <Col sm>
                              <Form.Group
                                as={Col}
                                controlId="validationCustom01"
                              >
                                <b>
                                  {" "}
                                  <Form.Label>
                                    Student Surname (required)
                                  </Form.Label>
                                </b>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Specify Surname"
                                  value={studata.Surname}
                                  onChange={(e) => {
                                    setstudata({
                                      ...studata,
                                      Surname: e.target.value,
                                    });
                                  }}
                                />
                                <Form.Control.Feedback type="invalid">
                                  Please choose a Surname.
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm>
                              <Form.Group
                                as={Col}
                                md="mb-6"
                                controlId="validationCustom03"
                              >
                                <b>
                                  {" "}
                                  <Form.Label>
                                    Student Sex (required)
                                  </Form.Label>
                                </b>
                                <br></br>
                                <Form.Select
                                  aria-label="select "
                                  name="usertype"
                                  className="form-control"
                                  value={studata.Sex}
                                  onChange={(e) => {
                                    handlestudentrequirevalue(e);
                                    setstudata({
                                      ...studata,
                                      Sex: e.target.value,
                                    });
                                  }}
                                  //onChange={(e) => handlestudentrequirevalue(e)}
                                >
                                  <option selected value="">
                                    Select value
                                  </option>
                                  <option value="1">Female</option>
                                  <option value="0">Male</option>
                                </Form.Select>
                              </Form.Group>
                            </Col>
                            <Col sm>
                              <Form.Group
                                as={Col}
                                controlId="validationCustom01"
                              >
                                <b>
                                  {" "}
                                  <Form.Label>
                                    Student date of birth – DD/MM/YY (required)
                                  </Form.Label>
                                </b>
                                <Form.Control
                                  required
                                  type="date"
                                  placeholder="Specify student date of birth"
                                  value={studata.Birthdate}
                                  onChange={(e) => {
                                    setstudata({
                                      ...studata,
                                      Birthdate: e.target.value,
                                    });
                                  }}
                                />
                                <Form.Control.Feedback type="invalid">
                                  Please choose Student Date of Birth.
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                          </Row>
                        </div>
                      )}
                      {studentrequire === "0" && (
                        <Row>
                          <Col sm>
                            <Form.Group as={Col} controlId="validationCustom01">
                              <b>
                                {" "}
                                <Form.Label>
                                  Please select an existing student (required)
                                </Form.Label>
                              </b>
                              <Form.Select
                                aria-label=" select "
                                value={studata.ExistingStudent}
                                onChange={(e) => {
                                  setstudata({
                                    ...studata,
                                    ExistingStudent: e.target.value,
                                  });
                                }}
                              >
                                <option>Select value</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">
                                Please Specify application.
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                      )}
                      <Form.Control.Feedback type="invalid">
                        Please Specify request.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm>
                    <Form.Group
                      as={Col}
                      md="mb-6"
                      controlId="validationCustom03"
                    >
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
                        value={studata.ContactRelationship}
                        onChange={(e) => {
                          setstudata({
                            ...studata,
                            ContactRelationship: e.target.value,
                          });
                        }}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col sm>
                    <Form.Group as={Col} controlId="validationCustom01">
                      <b>
                        {" "}
                        <Form.Label>
                          Is this application for a student in care or leaving
                          care? (required)
                        </Form.Label>
                      </b>

                      <Form.Select
                        aria-label=" select "
                        //  onChange={(e) => }
                        value={studata.Application}
                        onChange={(e) => {
                          handleshowhide(e);
                          setstudata({
                            ...studata,
                            Application: e.target.value,
                          });
                        }}
                      >
                        <option>Select value</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
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
                            Travel assistance will only be considered for a
                            student in care or leaving care in care in the
                            Telford and Wrekin area.
                          </div>
                          <b>
                            {" "}
                            <Form.Label>
                              {" "}
                              Please provide the full name of the social worker
                              for the student in care (required)
                            </Form.Label>
                          </b>
                          <Form.Control
                            required
                            type="text"
                            value={studata.SociaLworker}
                            onChange={(e) => {
                              setstudata({
                                ...studata,
                                SociaLworker: e.target.value,
                              });
                            }}
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
                          What type of education will the student be in?
                          (required)
                        </Form.Label>
                      </b>{" "}
                      <select
                        className="form-control"
                        name={studata.EducationSchoolType}
                        onChange={(e) => {
                          setEducationschool(e.target.value);
                          setstudata({
                            ...studata,
                            EducationSchoolType: e.target.value,
                          });
                        }}
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
                      {(Educationschool == 126560000 ||
                        Educationschool == 126560001) && (
                        <div className="col-md-12 form-group">
                          <Row>
                            <Col sm>
                              <Form.Group
                                as={Col}
                                md="mb-12"
                                controlId="validationCustom03"
                              >
                                <b>
                                  {" "}
                                  <Form.Label>
                                    {" "}
                                    Does the student live at a different address
                                    than you? (required)
                                  </Form.Label>
                                </b>

                                <Form.Select
                                  aria-label="select "
                                  className="form-control"
                                  name={
                                    studata.StudentDetailsLivesAtDifferentAddress
                                  }
                                  onChange={(e) => {
                                    handlelocation(e)
                                    setstudata({
                                      ...studata,
                                      StudentDetailsLivesAtDifferentAddress:
                                        e.target.value,
                                    });
                                  }}
                                >
                                  <option value="">Select value</option>
                                  <option value="1">Yes</option>
                                  <option value="0">No</option>
                                </Form.Select>

                                {studentLocation === "1" && (
                                  <div className="col-md-12 form-group">
                                    <Row>
                                      <Col sm>
                                        <Form.Group
                                          as={Col}
                                          md="mb-6"
                                          controlId="validationCustom03"
                                        >
                                          <b>
                                            {" "}
                                            <Form.Label>
                                              House name/number
                                            </Form.Label>
                                          </b>

                                          <Form.Control
                                            required
                                            type="text"
                                            placeholder="Specify house name/number"
                                            value={
                                              studata.StudentDetailsAddressLine1
                                            }
                                            onChange={(e) => {
                                              setstudata({
                                                ...studata,
                                                StudentDetailsAddressLine1:
                                                  e.target.value,
                                              });
                                            }}
                                          />
                                        </Form.Group>
                                      </Col>
                                      <Col sm>
                                        <Form.Group
                                          as={Col}
                                          controlId="validationCustom01"
                                        >
                                          <b>
                                            {" "}
                                            <Form.Label>Street name</Form.Label>
                                          </b>
                                          <Form.Control
                                            required
                                            type="text"
                                            placeholder="Specify street name"
                                            value={
                                              studata.StudentDetailsAddressLine2
                                            }
                                            onChange={(e) => {
                                              setstudata({
                                                ...studata,
                                                StudentDetailsAddressLine2:
                                                  e.target.value,
                                              });
                                            }}
                                          />
                                          <Form.Control.Feedback type="invalid">
                                            Please choose a street name.
                                          </Form.Control.Feedback>
                                        </Form.Group>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col sm>
                                        <Form.Group
                                          as={Col}
                                          md="mb-6"
                                          controlId="validationCustom03"
                                        >
                                          <b>
                                            {" "}
                                            <Form.Label>Locality</Form.Label>
                                          </b>
                                          <Form.Control
                                            required
                                            type="text"
                                            placeholder="Specify locality"
                                            value={
                                              studata.StudentDetailsAddressLine3
                                            }
                                            onChange={(e) => {
                                              setstudata({
                                                ...studata,
                                                StudentDetailsAddressLine3:
                                                  e.target.value,
                                              });
                                            }}
                                          />
                                        </Form.Group>
                                      </Col>
                                      <Col sm>
                                        <Form.Group
                                          as={Col}
                                          controlId="validationCustom01"
                                        >
                                          <b>
                                            {" "}
                                            <Form.Label>Town/city</Form.Label>
                                          </b>
                                          <Form.Control
                                            required
                                            type="text"
                                            placeholder="Specify town/city"
                                            value={
                                              studata.StudentDetailsAddressLine4
                                            }
                                            onChange={(e) => {
                                              setstudata({
                                                ...studata,
                                                StudentDetailsAddressLine4:
                                                  e.target.value,
                                              });
                                            }}
                                          />
                                          <Form.Control.Feedback type="invalid">
                                            Please choose a town/city.
                                          </Form.Control.Feedback>
                                        </Form.Group>
                                      </Col>
                                    </Row>

                                    <Row>
                                      <Form.Group
                                        as={Col}
                                        md="6"
                                        controlId="validationCustom05"
                                      >
                                        <b>
                                          {" "}
                                          <Form.Label>Post code</Form.Label>
                                        </b>
                                        <Form.Control
                                          type="text"
                                          placeholder="Specify post code"
                                          required
                                          value={
                                            studata.StudentDetailsAddressPostcode
                                          }
                                          onChange={(e) => {
                                            setstudata({
                                              ...studata,
                                              StudentDetailsAddressPostcode:
                                                e.target.value,
                                            });
                                          }}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          Please provide a valid post code.
                                        </Form.Control.Feedback>
                                      </Form.Group>
                                    </Row>
                                    <hr />
                                  </div>
                                )}
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm>
                              <Form.Group
                                as={Col}
                                md="mb-12"
                                controlId="validationCustom03"
                              >
                                <b>
                                  {" "}
                                  <Form.Label>
                                    Name of school/college attending (required)
                                  </Form.Label>
                                </b>
                                <Form.Select
                                  aria-label=" select "
                                  className="form-control"
                                >
                                  <option value="">
                                    {" "}
                                    Name of school/college attending
                                  </option>

                                  {schoollist.map((school) => (
                                    <option
                                      value={school.attributeValue}
                                      key={school.attributeValue}
                                      setKey={key}
                                    >
                                      {school.attributeName}
                                    </option>
                                  ))}
                                </Form.Select>
                                <Form.Text id="passwordHelpBlock" muted>
                                  Please contact is if the school/college is
                                  missing from the above list either on 01952
                                  384545 or{" "}
                                  <u style={{ color: "red" }}>
                                    transport@telford.gov.uk
                                  </u>
                                </Form.Text>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm>
                              <Form.Group
                                as={Col}
                                md="mb-12"
                                controlId="validationCustom03"
                              >
                                <b>
                                  {" "}
                                  <Form.Label>
                                    {" "}
                                    Date admitted to school - DD/MM/YYYY
                                    (required)
                                  </Form.Label>
                                </b>
                                <Form.Control
                                  required
                                  type="date"
                                  placeholder="Specify Date admitted to school"
                                  value={studata.EducationSchoolAdmittanceDate}
                                  onChange={(e) => {
                                    setstudata({
                                      ...studata,
                                      EducationSchoolAdmittanceDate:
                                        e.target.value,
                                    });
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Form.Group
                                as={Col}
                                controlId="validationCustom01"
                              >
                                <Form.Label>
                                  <b>
                                    {" "}
                                    On what grounds are you applying for?
                                    (required)
                                  </b>
                                </Form.Label>

                                <select
                                  className="form-control"
                                  value={groundsforapplicationValue}
                                  onChange={handleApplying}
                                >
                                  <option value="">Select Choose</option>

                                  {groundsforapplication.map(
                                    (Applyingground) => (
                                      <option
                                        value={Applyingground.attributeValue}
                                        key={Applyingground.attributeValue}
                                      >
                                        {Applyingground.attributeName}
                                      </option>
                                    )
                                  )}
                                </select>

                                {groundsforapplicationValue == 126560001 && (
                                  <div className="col-md-12 form-group">
                                    <br />
                                    <Row>
                                      <br />
                                      <Col sm>
                                        <Form.Group
                                          as={Col}
                                          md="mb-6"
                                          controlId="validationCustom03"
                                        >
                                          <Form.Label>
                                            <b>
                                              Proof of Free School Meals (FSM)
                                              entitlement
                                            </b>
                                          </Form.Label>
                                          {["radio"].map((type) => (
                                            <div
                                              key={`inline-${type}`}
                                              className="mb-3"
                                            >
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
                                        <Form.Group
                                          as={Col}
                                          md="mb-6"
                                          controlId="validationCustom03"
                                        >
                                          <Form.Label>
                                            <b>
                                              The maximum level of working tax
                                              credits
                                            </b>
                                          </Form.Label>
                                          {["radio"].map((type) => (
                                            <div
                                              key={`inline-${type}`}
                                              className="mb-3"
                                            >
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
                                  <i
                                    class="fa fa-exclamation-circle"
                                    aria-hidden="true"
                                  ></i>
                                  Post Sixteen applicants are required to
                                  contribute towards transport payments,
                                  Applicants on low income will contribute less
                                  but are required to upload documentary
                                  evidence as part of this application to prove
                                  low income status.
                                </span>
                                <hr></hr>
                                <Form.Group
                                  as={Col}
                                  md="mb-11"
                                  controlId="validationCustom03"
                                >
                                  {["radio"].map((type) => (
                                    <div
                                      key={` agree-${type}`}
                                      className="mb-3"
                                    >
                                      <Form.Check
                                        type={type}
                                        id={`agree-${type}`}
                                        label={
                                          <b>
                                            Please check this box to confirm
                                            that you understand the above
                                            statement and are prepared to
                                            contribute to transport costs
                                            (required)
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
                              <Form.Group
                                as={Col}
                                md="mb-12"
                                controlId="validationCustom03"
                              >
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
                                  <option value="0">No</option>
                                </Form.Select>
                                <Form.Text id="passwordHelpBlock" muted>
                                  Please contact is if the school/college is
                                  missing from the above list either on 01952
                                  384545 or{" "}
                                  <u style={{ color: "red" }}>
                                    transport@telford.gov.uk
                                  </u>
                                </Form.Text>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm>
                              <Form.Group
                                as={Col}
                                md="mb-12"
                                controlId="validationCustom03"
                              >
                                <b>
                                  {" "}
                                  <Form.Label>
                                    {" "}
                                    Title of the course (required)
                                  </Form.Label>
                                </b>
                                <Form.Control
                                  required
                                  type="text"
                                  placeholder="Specify course title"
                                  value={studata.EducationCourseTitle}
                                  onChange={(e) => {
                                    setstudata({
                                      ...studata,
                                      EducationCourseTitle: e.target.value,
                                    });
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm>
                              <Form.Group
                                as={Col}
                                md="mb-12"
                                controlId="validationCustom03"
                              >
                                <b>
                                  {" "}
                                  <Form.Label>
                                    {" "}
                                    What qualification will this course lead to?
                                    - BTEC, NVQ, A levels, etc (required)
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
                              <Form.Group
                                as={Col}
                                controlId="validationCustom01"
                              >
                                <b>
                                  {" "}
                                  <Form.Label>
                                    How many hours per week will the student be
                                    completing this course? (required)
                                  </Form.Label>
                                </b>
                                <Form.Select aria-label=" select ">
                                  <option>Select value</option>
                                  <option value="1">Under 10 hours</option>
                                  <option value="0">10 to 15 hours</option>
                                  <option value="0">16 to 20 hours</option>
                                  <option value="0">Over 20 hours</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  Please choose a How many hours per week will
                                  the student be completing this course?
                                  (required).
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm>
                              <Form.Group
                                as={Col}
                                md="mb-12"
                                controlId="validationCustom03"
                              >
                                <b>
                                  {" "}
                                  <Form.Label>
                                    {" "}
                                    Is this the student's first year of studying
                                    this course? (required)
                                  </Form.Label>
                                </b>
                                <Form.Select aria-label=" select ">
                                  <option>Select value</option>
                                  <option value="1">Yes</option>
                                  <option value="0">No</option>
                                </Form.Select>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm>
                              <Form.Group
                                as={Col}
                                md="mb-12"
                                controlId="validationCustom03"
                              >
                                <b>
                                  {" "}
                                  <Form.Label>
                                    {" "}
                                    Is the student studying at their nearest and
                                    suitable school/college offering this course
                                    (required)
                                  </Form.Label>
                                </b>
                                <Form.Select
                                  aria-label="select "
                                  name="usertype"
                                  className="form-control"
                                  onChange={(e) => handleStudentstate(e)}
                                >
                                  <option value="">Select value</option>
                                  <option value="1">Yes</option>
                                  <option value="0">No</option>
                                </Form.Select>

                                {showstudentstate === "0" && (
                                  <div className="col-md-12 form-group">
                                    <Row>
                                      <Col sm>
                                        <Form.Group
                                          as={Col}
                                          md="mb-12"
                                          controlId="validationCustom03"
                                        >
                                          <b>
                                            {" "}
                                            <Form.Label>
                                              {" "}
                                              Please State Why{" "}
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
                                  </div>
                                )}
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm>
                              <Form.Group
                                as={Col}
                                md="mb-12"
                                controlId="validationCustom03"
                              >
                                <b>
                                  {" "}
                                  <Form.Label>
                                    {" "}
                                    Why can't transport be provided by the
                                    student's family or friends? (required){" "}
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
                              <Form.Group
                                as={Col}
                                md="mb-12"
                                controlId="validationCustom03"
                              >
                                <b>
                                  {" "}
                                  <Form.Label>
                                    {" "}
                                    Does the student receive Disability Living
                                    Allowance (DLA)? (required){" "}
                                  </Form.Label>
                                </b>
                                <Form.Select aria-label=" select ">
                                  <option>Select value</option>
                                  <option value="1">Yes</option>
                                  <option value="0">No</option>
                                </Form.Select>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm>
                              <Form.Group
                                as={Col}
                                md="mb-12"
                                controlId="validationCustom03"
                              >
                                <b>
                                  {" "}
                                  <Form.Label>
                                    {" "}
                                    Has the student applied to their chosen
                                    school/college for a bursary? (required){" "}
                                  </Form.Label>
                                </b>
                                <Form.Select
                                  aria-label="select "
                                  className="form-control"
                                  value={studata.EducationHasAppliedForBursary}
                                  onChange={(e) => {
                                    setstudata({
                                      ...studata,
                                      EducationHasAppliedForBursary:
                                        e.target.value,
                                    });
                                  }}
                                >
                                  <option value="">Select value</option>
                                  <option value="1">Yes</option>
                                  <option value="0">No</option>
                                </Form.Select>

                                {request === "0" && (
                                  <div
                                    style={{
                                      backgroundColor: "#FFFFE0",
                                      textalign: "center",
                                    }}
                                  >
                                    If you or the student haven't already
                                    applied for a bursary from the chosen
                                    school/college please do so before
                                    submitting your application for travel
                                    assistance.
                                  </div>
                                )}
                              </Form.Group>
                            </Col>
                          </Row>
                        </div>
                      )}
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
                          Does the student have a current Education, Health and
                          Care Plan (EHCP)? (required)
                        </Form.Label>
                      </b>
                      <Form.Select
                        aria-label="select "
                        name="usertype"
                        className="form-control"
                        value={studata.EducationHasEHCPPlan}
                        onChange={(e) => {
                          setstudata({
                            ...studata,
                            EducationHasEHCPPlan: e.target.value,
                          });
                        }}
                      >
                        <option value="">Select value</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </Form.Select>

                      {showECHP === "1" && (
                        <div className="col-md-12 form-group">
                          <Col sm>
                            <Form.Group as={Col} controlId="validationCustom01">
                              <b>
                                {" "}
                                <Form.Label>
                                  Please tell us the date the EHCP was finalized
                                  (this can be found on the front cover)
                                </Form.Label>
                              </b>
                              <Form.Control
                                required
                                type="date"
                                placeholder="Specify date the EHCP"
                                value={studata.EHCP}
                                onChange={(e) => {
                                  setstudata({
                                    ...studata,
                                    EHCP: e.target.value,
                                  });
                                }}
                              />
                              <Form.Control.Feedback type="invalid">
                                Please choose date the EHCP.
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </div>
                      )}
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
                        <option value="0">No</option>
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
                          What date would you like transport assistance to
                          start? DD/MM/YYYY (required)
                        </Form.Label>
                      </b>{" "}
                      <Form.Control
                        required
                        type="date"
                        placeholder="DD/MM/YYYY"
                        value={studata.TransportDate}
                        onChange={(e) => {
                          setstudata({
                            ...studata,
                            TransportDate: e.target.value,
                          });
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Specify date.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <p>
                      This date is for information only.Please note that we
                      cannot confirm a start date untill after your application
                      has been agreed.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group as={Col} controlId="validationCustom01">
                      <Form.Label>
                        <b>
                          {" "}
                          Please provide any other details that you feel will
                          help us to make a decision on whether we can offer
                          travel assistant to the student.
                        </b>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Specify Additional Details"
                        value={studata.Details}
                        onChange={(e) => {
                          setstudata({
                            ...studata,
                            Details: e.target.value,
                          });
                        }}
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
                        Please provide any other detail for two emergency
                        contacts, other than anyone whose details have already
                        been provided on this form,they must be 18 years or
                        older
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group
                        as={Col}
                        md="mb-6"
                        controlId="validationCustom03"
                      >
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
                          value={studata.Fullname}
                          onChange={(e) => {
                            setstudata({
                              ...studata,
                              Fullname: e.target.value,
                            });
                          }}
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
                            What is the relationship of emergency contact 1 to
                            the student? (required)
                          </Form.Label>
                        </b>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Specify relationship"
                          value={studata.Relationshipdetail}
                          onChange={(e) => {
                            setstudata({
                              ...studata,
                              Relationshipdetail: e.target.value,
                            });
                          }}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a relationship.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group
                        as={Col}
                        md="mb-6"
                        controlId="validationCustom03"
                      >
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
                          value={studata.EHCP}
                          onChange={(e) => {
                            setstudata({
                              ...studata,
                              Relationshipdetail: e.target.value,
                            });
                          }}
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
                          value={studata.ContactEmail}
                          onChange={(e) => {
                            setstudata({
                              ...studata,
                              ContactEmail: e.target.value,
                            });
                          }}
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
                      <Form.Group
                        as={Col}
                        md="mb-6"
                        controlId="validationCustom03"
                      >
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
                          value={studata.fullname1}
                          onChange={(e) => {
                            setstudata({
                              ...studata,
                              fullname1: e.target.value,
                            });
                          }}
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
                            What is the relationship of emergency contact 2 to
                            the student? (required)
                          </Form.Label>
                        </b>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Specify relationship"
                          value={studata.emergencycontact2}
                          onChange={(e) => {
                            setstudata({
                              ...studata,
                              emergencycontact2: e.target.value,
                            });
                          }}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a relationship.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <Form.Group
                        as={Col}
                        md="mb-6"
                        controlId="validationCustom03"
                      >
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
                          value={studata.emergencycontact}
                          onChange={(e) => {
                            setstudata({
                              ...studata,
                              emergencycontact: e.target.value,
                            });
                          }}
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
                          value={studata.emailaddress2}
                          onChange={(e) => {
                            setstudata({
                              ...studata,
                              emailaddress2: e.target.value,
                            });
                          }}
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
                        application for student travel assistance but will be
                        used to to determine the correct support is provided if
                        your application is successful.
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
                     <Form.Select
                      aria-label="select "
                      name={studata.SendOrMedicalHasSendOrMedicalNeeds}
                      className="form-control"
                       onChange={(e) => {
                          handlestudentneed(e)
                          setstudata({
                            ...studata,
                            SendOrMedicalHasSendOrMedicalNeeds: e.target.value,
                          });
                        }}
                     >
                      <option value="">Select value</option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </Form.Select>
                    {studentneed === "1" && (
                      <div className="col-md-12 form-group">
                        <Col sm>
                          <Form.Group as={Col} controlId="validationCustom01">
                            <b>
                              {" "}
                              <Form.Label>
                                Please describe the special educational needs or
                                medical needs of the student (required)
                              </Form.Label>
                            </b>
                            <Form.Control
                              required
                              as="textarea"
                              rows={3}
                              placeholder="Specify describe the special educational needs or medical needs of the student "
                              value={studata.educationneed}
                              onChange={(e) => {
                                setstudata({
                                  ...studata,
                                  educationneed: e.target.value,
                                });
                              }}
                            />
                            <Form.Control.Feedback type="invalid">
                              Please describe the special educational needs or
                              medical needs of the student .
                            </Form.Control.Feedback>
                            <b>
                              <Form.Label>
                                Does the student have mobility issues?
                                (required)
                              </Form.Label>
                            </b>

                            <Form.Select
                              aria-label="select "
                              value={studata.MobiliyHasIssues}
                              className="form-control"
                             
                               onChange={(e) => {
                                        handlemobility(e)
                                        setstudata({
                                          ...studata,
                                          MobiliyHasIssues: e.target.value,
                                        });
                                      }}
                              
                            >
                              <option value="">Select value</option>
                              <option value="1">Yes</option>
                              <option value="0">No</option>
                            </Form.Select>

                            {showmobility === "1" && (
                              <div className="col-md-12 form-group">
                                <Col sm>
                                  <Form.Group
                                    as={Col}
                                    controlId="validationCustom01"
                                  >
                                    <b>
                                      {" "}
                                      <Form.Label>
                                        Please state the mobility issues that
                                        that student has (required)
                                      </Form.Label>
                                    </b>
                                    <Form.Control
                                      required
                                      row={3}
                                      as="textarea"
                                      placeholder="Specify  the mobility issues that that student has (required) "
                                      name={studata.MobilityDetails}
                                      onChange={(e) => {
                                        setstudata({
                                          ...studata,
                                          MobilityDetails: e.target.value,
                                        });
                                      }}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please choose mobility issues that that
                                      student has (required)
                                    </Form.Control.Feedback>
                                  </Form.Group>
                                </Col>
                                <Col sm>
                                  <Form.Group
                                    as={Col}
                                    controlId="validationCustom01"
                                  >
                                    <b>
                                      {" "}
                                      <Form.Label>
                                        Does the student use any of the
                                        following equipment?
                                      </Form.Label>
                                    </b>

                                    <select
                                      className="form-control"
                                      name={studata.MobilityEquipment}
                                      onChange={(e) => {
                                        setEquipmentValue(e.target.value);
                                        setstudata({
                                          ...studata,
                                          MobilityEquipment: e.target.value,
                                        });
                                      }}
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
                                    </select>

                                    {(equipmentValue == 126560001 ||
                                      equipmentValue == 126560003 ||
                                      equipmentValue == 126560002) && (
                                      <div className="col-md-12 form-group">
                                        <Col sm>
                                          <Form.Group
                                            as={Col}
                                            controlId="validationCustom01"
                                          >
                                            <b>
                                              {" "}
                                              <Form.Label>
                                                Please supply the height and
                                                length of the wheelchair or
                                                buggy (required)
                                              </Form.Label>
                                            </b>
                                            <Form.Control
                                              required
                                              type="text"
                                              placeholder="Specify supply the height and length of the wheelchair or buggy "
                                              name={
                                                studata.MobilityEquipmentDimensions
                                              }
                                              onChange={(e) => {
                                                setstudata({
                                                  ...studata,
                                                  MobilityEquipmentDimensions:
                                                    e.target.value,
                                                });
                                              }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                              Please supply the height and
                                              length of the wheelchair or buggy
                                              (required).
                                            </Form.Control.Feedback>
                                            <b>
                                              <Form.Label>
                                                Can the student transfer to a
                                                seat whilst traveling?
                                                (required)
                                              </Form.Label>
                                            </b>{" "}
                                            <Form.Select
                                              aria-label="select "
                                              name="usertype"
                                              className="form-control"
                                              onChange={(e) =>
                                                handlesShowEquipment(e)
                                              }
                                            >
                                              <option value="">
                                                Select value
                                              </option>
                                              <option value="1">Yes</option>
                                              <option value="0">No</option>
                                            </Form.Select>
                                          </Form.Group>
                                        </Col>
                                      </div>
                                    )}

                                    <Form.Control.Feedback type="invalid">
                                      Please choose Does the student use any of
                                      the following equipment?
                                    </Form.Control.Feedback>
                                  </Form.Group>
                                </Col>

                                <Col sm>
                                  <Form.Group
                                    as={Col}
                                    controlId="validationCustom01"
                                  >
                                    <b>
                                      <Form.Label>
                                        Does the student suffer from seizures?
                                        (required)
                                      </Form.Label>
                                    </b>

                                    <Form.Select
                                      aria-label="select "
                                      name="usertype"
                                      className="form-control"
                                      onChange={(e) => handleseizure(e)}
                                    >
                                      <option>Select value</option>
                                      <option value="1">Yes</option>
                                      <option value="0">No</option>
                                    </Form.Select>
                                    {showseizure === "1" && (
                                      <div className="col-md-12 form-group">
                                        <Col sm>
                                          <Form.Group
                                            as={Col}
                                            controlId="validationCustom01"
                                          >
                                            <b>
                                              {" "}
                                              <Form.Label>
                                                Please state the type of seizure
                                                that the student suffers from
                                                (required)?
                                              </Form.Label>
                                            </b>
                                            <Form.Control
                                              required
                                              as="textarea"
                                              placeholder=" Please state the type of seizure that the student suffers from (required)"
                                              name={studata.SeizuresType}
                                              onChange={(e) => {
                                                setstudata({
                                                  ...studata,
                                                  SeizuresType: e.target.value,
                                                });
                                              }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                              Please choose type of medication
                                              and any special considerations to
                                              take in the transportation and
                                              storage of the medication
                                              (required)
                                            </Form.Control.Feedback>
                                          </Form.Group>
                                        </Col>
                                        <Col sm>
                                          <Form.Group
                                            as={Col}
                                            controlId="validationCustom01"
                                          >
                                            <b>
                                              {" "}
                                              <Form.Label>
                                                Please state any signs that the
                                                student may show before a
                                                seizure occurs?
                                              </Form.Label>
                                            </b>
                                            <Form.Control
                                              required
                                              as="textarea"
                                              placeholder=" Please state any signs that the student may show before a seizure occurs"
                                              name={studata.SeizuresSigns}
                                              onChange={(e) => {
                                                setstudata({
                                                  ...studata,
                                                  SeizuresSigns: e.target.value,
                                                });
                                              }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                              Please choose any signs that the
                                              student may show before a seizure
                                              occurs
                                            </Form.Control.Feedback>
                                          </Form.Group>
                                        </Col>
                                        <Col sm>
                                          <Form.Group
                                            as={Col}
                                            controlId="validationCustom01"
                                          >
                                            <b>
                                              {" "}
                                              <Form.Label>
                                                How often do the seizures occur?
                                                (required)
                                              </Form.Label>
                                            </b>
                                            <Form.Control
                                              required
                                              type="text"
                                              placeholder=" Please state How often do the seizures occur?"
                                              name={studata.SeizuresFrequency}
                                              onChange={(e) => {
                                                setstudata({
                                                  ...studata,
                                                  SeizuresFrequency:
                                                    e.target.value,
                                                });
                                              }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                              How often do the seizures occur?
                                              (required)
                                            </Form.Control.Feedback>
                                          </Form.Group>
                                        </Col>
                                      </div>
                                    )}

                                    <Form.Control.Feedback type="invalid">
                                      Please Specify Does the student suffer
                                      from seizures? (required).
                                    </Form.Control.Feedback>
                                  </Form.Group>
                                </Col>
                                <Col sm>
                                  <Form.Group
                                    as={Col}
                                    controlId="validationCustom01"
                                  >
                                    <b>
                                      <Form.Label>
                                        Does any medication need to be
                                        transported with the student? (required)
                                      </Form.Label>
                                    </b>

                                    <Form.Select
                                      aria-label="select "
                                      className="form-control"
                                    >
                                      <option>Select value</option>
                                      <option value="1">Yes</option>
                                      <option value="0">No</option>
                                    </Form.Select>

                                    {showmedication === "1" && (
                                      <div className="col-md-12 form-group">
                                        <Col sm>
                                          <Form.Group
                                            as={Col}
                                            controlId="validationCustom01"
                                          >
                                            <b>
                                              {" "}
                                              <Form.Label>
                                                Please specify the type of
                                                medication and any special
                                                considerations to take in the
                                                transportation and storage of
                                                the medication? (required)
                                              </Form.Label>
                                            </b>
                                            <Form.Control
                                              required
                                              as="textarea"
                                              row={3}
                                              placeholder="Specify type of medication and any special considerations to take in the transportation and storage of the medication (required)
                      "
                                            />
                                            <Form.Control.Feedback type="invalid">
                                              Please choose type of medication
                                              and any special considerations to
                                              take in the transportation and
                                              storage of the medication
                                              (required)
                                            </Form.Control.Feedback>
                                          </Form.Group>
                                        </Col>
                                      </div>
                                    )}

                                    <Form.Control.Feedback type="invalid">
                                      Please Specify Does any medication need to
                                      be transported with the student?
                                    </Form.Control.Feedback>
                                  </Form.Group>
                                </Col>
                              </div>
                            )}

                            <Form.Control.Feedback type="invalid">
                              Please Specify type.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </div>
                    )}
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
                        Does the student require any of the following?
                        (required)
                      </b>
                    </Form.Label>

                    <select
                      className="form-control"
                      value={seatTypesValue}
                      onChange={handlestudentrequire}
                    >
                      <option value="">Select value</option>

                      {SeatTypes.map((seat) => (
                        <option
                          value={seat.attributeValue}
                          key={seat.attributeValue}
                        >
                          {seat.attributeName}
                        </option>
                      ))}
                    </select>

                    {(seatTypesValue == 126560001 ||
                      seatTypesValue == 126560002 ||
                      seatTypesValue == 126560003 ||
                      seatTypesValue == 126560004) && (
                      <div className="col-md-12 form-group">
                        <Col sm>
                          <Form.Group as={Col} controlId="validationCustom01">
                            <b>
                              {" "}
                              <Form.Label>
                                Does the student require a special harness or
                                seatbelt? (required)
                              </Form.Label>
                            </b>
                            <Form.Select
                              aria-label="select "
                              name="usertype"
                              className="form-control"
                              value={studata.specialharness}
                              onChange={(e) => {
                                handlestudentshowrequest(e);
                                setstudata({
                                  ...studata,
                                  specialharness: e.target.value,
                                });
                              }}
                            >
                              <option>Select value</option>
                              <option value="1">Yes</option>
                              <option value="0">No</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              Please choose Does the student require a special
                              harness or seatbelt.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col sm>
                          <Form.Group as={Col} controlId="validationCustom01">
                            <b>
                              {" "}
                              <Form.Label>
                                Please specify the type of seat including height
                                and weight of the seat, seat belt or
                                enhancements needed (required)
                              </Form.Label>
                            </b>
                            <Form.Control
                              required
                              as="textarea"
                              placeholder="Specify  Type of seat including height and weight of the seat, seat belt or enhancements needed "
                              value={studata.heightweight}
                              onChange={(e) => {
                                setstudata({
                                  ...studata,
                                  heightweight: e.target.value,
                                });
                              }}
                            />
                            <Form.Control.Feedback type="invalid">
                              Please choose Type of seat including height and
                              weight of the seat, seat belt or enhancements
                              needed .
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </div>
                    )}

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
                        Will the student try to take off their seatbelt ?
                        (required)
                      </b>
                    </Form.Label>
                    <Form.Select aria-label=" select ">
                      <option>Select value</option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
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
                        Does the student have a basic understanding of road
                        safety ? (required)
                      </Form.Label>
                    </b>
                    <Form.Select aria-label=" select ">
                      <option>Select value</option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please enter student have a basic understanding of road
                      safety
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
                    <Form.Select
                      aria-label="select "
                      name="usertype"
                      className="form-control"
                      onChange={(e) => handletransport(e)}
                    >
                      <option value="">Select value</option>
                      <option value="0">No</option>
                      <option value="1">Yes</option>
                    </Form.Select>

                    {showtransport === "0" && (
                      <div className="col-md-12 form-group">
                        <Col sm>
                          <Form.Group as={Col} controlId="validationCustom01">
                            <b>
                              {" "}
                              <Form.Label>
                                Please state why the student can't share
                                transport (required)
                              </Form.Label>
                            </b>
                            <Form.Control
                              required
                              as="textarea"
                              rows={3}
                              placeholder="Specify why"
                            />
                            <Form.Control.Feedback type="invalid">
                              Please choose state why the student can't share
                              transport (required).
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </div>
                    )}
                    <Form.Control.Feedback type="invalid">
                      Please enter student able to share the transport with
                      other passengers?
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Col>
                    <Form.Group as={Col} controlId="validationCustom01">
                      <Form.Label>
                        <b>
                          {" "}
                          Please give any other details that you feel would help
                          us to make the journey easier for the student?
                        </b>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Specify other Details"
                        value={studata.journeydetails}
                        onChange={(e) => {
                          setstudata({
                            ...studata,
                            journeydetails: e.target.value,
                          });
                        }}
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
                          What helps calm the student if they become upset
                          during transport?
                        </b>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Specify other Details"
                        value={studata.upset}
                        onChange={(e) => {
                          setstudata({
                            ...studata,
                            upset: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Label>
                      <b>
                        {" "}
                        Has the student ever taken part in travel training that
                        has been committed by the council? (required)
                      </b>
                    </Form.Label>
                    <Form.Select aria-label=" select ">
                      <option>Select value</option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please enter Has the student ever taken part in travel
                      training that has been provided by the council ?
                      (required).
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Col>
                    <Form.Group as={Col} controlId="validationCustom01">
                      <Form.Label>
                        <b>
                          {" "}
                          What helps calm the student if they become upset
                          during transport?{" "}
                        </b>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Specify other Details"
                        value={studata.upsetdetail}
                        onChange={(e) => {
                          setstudata({
                            ...studata,
                            upsetdetail: e.target.value,
                          });
                        }}
                      />
                    </Form.Group>
                  </Col>
                  {/* <Col>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Select file</Form.Label>
                      <Form.Control
                        type="file"
                        accept=".png,.jpg,.jpeg,.pdf,.docx,doc"
                        // value={studata.EducationCourseTitle}
                        onChange={(e) => {
                          // handleFileChange
                          setstudata({
                            ...studata,
                            DocumentViewerControl: e.target.value,
                          });
                        }}
                        //DocumentViewerControl
                      />
                    </Form.Group>
                  </Col> */}
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
                      Please continue to step 2 where you will be able to upload
                      any supporting documentatoin before submiting your
                      application.
                    </span>
                  </Col>
                </Row>
                <div></div>
                {/* //handleSubmit */}
                <Button variant="success" onClick={handleClick}>
                  <i class="far fa-arrow-alt-circle-right"></i> <span></span>
                  Submit application
                </Button>
              </Form>
            </div>
          )}
        </div>
      </Alert>
    </div>
  );
}

export default TelfordRequestForm;
