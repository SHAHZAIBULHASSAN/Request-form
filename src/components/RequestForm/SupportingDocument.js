import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Comfirmation from "./Confirmation";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

const  Attachment =(props)=> {
   const [selectedFile, setSelectedFile] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validated, setValidated] = useState(false);
  const handlestudentshowrequest = (event) => {
    const getuser = event.target.value;
    //setShowrequest(getuser);
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };
 const studata=props.studata;

  const validateSelectedFile = () => {
    const MAX_FILE_SIZE = 51200; // 50MB

    if (!selectedFile) {
      setErrorMsg("Please choose a file");
      setIsSuccess(false);
      return;
    }

    const fileSizeKiloBytes = selectedFile.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("File size is greater than maximum limit");
      setIsSuccess(false);
      return;
    }

    setErrorMsg("");
    setIsSuccess(true);
  };
  const [isShown, setIsShown] = useState(true);
  const handleSubmit = (event) => {
    console.log(studata);
    console.log("Clicked");
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(props.studata);
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

  const handleClick = event => {
    event.preventDefault();
    setIsShown(current => !current);
  };

  return (
    <div className="mt-3 p-4">
      
    <Alert variant="muted " className="mt-3">
      <div className="d-grid gap2 p-5 ">


   { isShown? (
      <div>
        
        <div>
      <h2></h2>
      <h5>Step 2 - Supporting Documentation</h5>

      <div className="mt-3 p-4">
        <p>
          If you are applying on medical grounds you must provide supporting
          evidence for a medical consultant. Upload up to a maximum of 5
          relevant supporting document(s) below before continuing with your
          application.
          <br></br>
          The following files types are permitted: doc, docx, jpeg, jpg, pdf,
          png.
        </p>
        <Row>
          <Col>
            <Form.Group controlId="formFile" className="mb-3">
              <b>
                {" "}
                <Form.Label onChange={handleFileChange}>
                 Select file
                </Form.Label>
              </b>
              {/* <input
                type="file"
                name="file"
               
              /> */}
              <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Select file</Form.Label>
        <Form.Control type="file"   accept=".png,.jpg,.jpeg,.pdf,.docx,doc"
        // value={studata.EducationCourseTitle}
        onChange={(e) => {
         // handleFileChange
        //   setstudata({
        //     ...studata,
        //     DocumentViewerControl: e.target.value,
        //   });
         }}
        //DocumentViewerControl
            />
      </Form.Group>

              <div className="space-between">
                <strong className="text-danger">Maximum file size: 50MB</strong>
                <br></br>
                {/* //validateSelectedFile */}
                <Button variant="primary" onClick={handleSubmit}>
                  Upload
                </Button>
              </div>
            </Form.Group>
           
            {isSuccess ? (
              <p className="success-message">Validation successful</p>
            ) : null}
            <p className="error-message">{errorMsg}</p>
            <Button variant="success" onClick={handleSubmit}
           >
              <i class="far fa-arrow-alt-circle-right"></i> <span></span>
              Continue to Step 3
            </Button>
          </Col>
        </Row>
      </div>
    </div>
      </div>
    ):(

    <div><Comfirmation/></div>
  )}
  </div>
      </Alert>
    </div>
  )
}
export default Attachment;
