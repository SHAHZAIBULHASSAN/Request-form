
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";




function Attachment() {
  const [selectedFile, setSelectedFile] = useState();
const [errorMsg, setErrorMsg] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);

const handleFileChange = (event) => {
  if(event.target.files.length > 0){
    setSelectedFile(event.target.files[0]);
  }
};




const validateSelectedFile = () => {
  
  const MAX_FILE_SIZE = 5120 // 5MB

  if (!selectedFile) {
    setErrorMsg("Please choose a file");
    setIsSuccess(false)
    return
  }

  const fileSizeKiloBytes = selectedFile.size / 1024

 
  if(fileSizeKiloBytes > MAX_FILE_SIZE){
    setErrorMsg("File size is greater than maximum limit");
    setIsSuccess(false)
    return
  }

  setErrorMsg("")
  setIsSuccess(true)
};
  <div>
    <h5>Step 2 - Supporting Documentation</h5>

    <div className="mt-3 p-4">
      <p>
        If you are applying on medical grounds you must provide supporting
        evidence for a medical consultant. Upload up to a maximum of 5 relevant
        supporting document(s) below before continuing with your application.
        The following files types are permitted: doc, docx, jpeg, jpg, pdf, png.
      </p>
    </div>

    <Row>
      <Col xs={6}>
        <div className="mt-3 p-4">
          <hr></hr>
          <Form.Group controlId="formFile" className="mb-3">
            <b>
              {" "}
              <Form.Label>Select file</Form.Label>
            </b>

            <Form.File
              onChange={handleFileChange}
              label="No file chosen"
              accept=".png,.jpg,.jpeg,.pdf,.docx,doc"
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <strong className="text-danger"></strong>
            <Button variant="primary" onClick={validateSelectedFile}>
              Upload
            </Button>{" "}
          </Form.Group>
          
            <div className="space-between">
              <p className="info-message">Maximum file size:50MB</p>
            </div>
            {isSuccess ? (
              <p className="success-message">Validation successful</p>
            ) : null}
            <p className="error-message">{errorMsg}</p>

           
          
        </div>
      </Col>
    </Row>
    <hr></hr>
  </div>;
}
export default Attachment;
