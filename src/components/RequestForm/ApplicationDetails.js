import ListGroup from "react-bootstrap/ListGroup";
import { FaWpforms } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import { Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function ApplicationDetailsData() {
  return (
    <div>
      
        <h5>
          Step 1 - Application Details
        </h5>
     
      <div className="mt-3 p-4">
        <p>
          Before completing this application form please ensure you have read
          the Transport Policy relevant to your application as well as the
          guidance notes on applying for travel assistance:
        </p>
      </div>

      <Row>
        <Col xs={6}>
          <div className="mt-3 p-4">
            <ListGroup>
              <ListGroup.Item action variant="light">
                Home to School Transport Policy (opens new window)
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                Post 16 Transport Policy. (opens new window)
              </ListGroup.Item>
              <ListGroup.Item action variant="light">
                Post 16 Transport Policy 2021 2022 (opens new window)
              </ListGroup.Item>
            </ListGroup>
            <strong className="text-danger">Please note that:</strong>
            <ListGroup>
              <ListGroup.Item action variant="primary">
                We are unable to provide travel assistance to children under
                primary school age.
              </ListGroup.Item>
              <ListGroup.Item action variant="primary">
                The student, or carer on behalf of the student, should apply for
                a bursary from the chosen school/college before making an
                application for travel assistance.
              </ListGroup.Item>
              <ListGroup.Item action variant="primary">
                You should allow up to 20 working days for your application to
                be processed, however more complex cases may take longer.
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <h2>
          Privacy Notice under the General Data Protection Regulations 2018
        </h2>
        <Col>
          <p>
            Telford & Wrekin Council Strategic Transport are collecting personal
            data to enable the best possible advice, care or support to be
            provided to you, your child, a family member or someone you care for
            whilst travelling with Telford and Wrekin Council in line with
            Article 9(2)(c) & (h) of the General Data Protection Regulations
            2018 or equivalent United Kingdom legislation.
          </p>
         
          <p>Telford & Wrekin Council will only share your personal data collected with the transport provider that is chosen to provide your transport, we will not share any of your personal data
with any other external organisations unless required to do so by law. However, there may be occasions where we request further information from key third party organisations such
as Health or Provider organisations. For further details on the council's privacy arrangements please view the privacy page on the council's website page.
</p>
        </Col>
      </Row>
    </div>
  );
}

export default ApplicationDetailsData;
