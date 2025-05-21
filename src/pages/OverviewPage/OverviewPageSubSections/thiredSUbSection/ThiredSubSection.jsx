import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CorporateActions from "./CorporateActions";
import FinancialRatios from "./FinancialRatio";
import ContactIR from "./ContactIRCard";

const ThiredSubSection = () => {
  return (
    <Container className="mt-4">
      <Row className="g-4">
        <Col xs={12} md={6} lg={4}>
          <CorporateActions />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <FinancialRatios />
        </Col>
        <Col xs={12} md={12} lg={4}>
          <ContactIR />
        </Col>
      </Row>
    </Container>
  );
};

export default ThiredSubSection;
