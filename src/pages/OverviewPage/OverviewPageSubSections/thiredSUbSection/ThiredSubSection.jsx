import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CorporateActions from "./CorporateActions";
import FinancialRatios from "./FinancialRatio";
import ContactIR from "./ContactIRCard";

const ThiredSubSection = () => {
  return (
    <Container fluid className="mt-4 subsection">
      <Row className="g-4 d-flex align-items-stretch"> 
        <Col xs={12} md={6} lg={4} className="d-flex flex-column">
          <CorporateActions />
        </Col>
        <Col xs={12} md={6} lg={4} className="d-flex flex-column">
          <FinancialRatios />
        </Col>
        <Col xs={12} md={12} lg={4} className="d-flex flex-column">
          <ContactIR />
        </Col>
      </Row>
    </Container>
  );
}

export default ThiredSubSection;