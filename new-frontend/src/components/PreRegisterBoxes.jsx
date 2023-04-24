import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "reactstrap";
const PreRegisterBoxes = () => {
  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <Row
        style={{
          width: "50%",
          height: "550px",
          flexDirection: "row",
          // justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Col
        // md={{ span: 6, offset: 1 }}
        >
          <Card style={{ width: "100%", height: "200px" }}>
            <Card.Body>
              <Card.Text>Want To Register As A Minister</Card.Text>
              <Card.Text>Please Fill All Input</Card.Text>
              <Button variant="primary">Click Here</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "100%", height: "200px" }}>
            <Card.Body>
              <Card.Text>Want To Register As A Student</Card.Text>
              <Card.Text>Please Fill All Input</Card.Text>
              <Button variant="primary">Click Here</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PreRegisterBoxes;
