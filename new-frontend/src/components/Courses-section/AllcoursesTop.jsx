import React from "react";
import { Container, Row, Col } from "reactstrap";
import Stack from "react-bootstrap/Stack";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

import "./courses.css";

const AllcoursesTop = () => {
  return (
    <Container>
      <Stack
        className="mt-5 justify-content-between align-items-center py-1 px-3 bg-light"
        direction="horizontal"
        gap={5}
      >
        <div className=" mt-3">
          <Form.Group className="mb-3">
            <Form.Control placeholder="Search A Course..." />
          </Form.Group>
        </div>
        <div className="mt-3">
          <Form.Group className="mb-3">
            <Form.Select>
              <option>Search By Category</option>
              <option>Category A</option>
              <option>Category B</option>
              <option>Category C</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="mt-3">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              SortBy Options
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Lastest</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Most Popular</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Ascending </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Descending</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Stack>
    </Container>
  );
};

export default AllcoursesTop;
