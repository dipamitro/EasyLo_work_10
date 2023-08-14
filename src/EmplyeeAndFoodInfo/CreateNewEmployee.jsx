import React, { useState } from 'react';
import {Button,  Modal, Form, Row, Col } from 'react-bootstrap';
import './CreateNewEmployee.css'

const CreateNewEmployee = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  onClick={handleShow}>
        Create New
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Employee Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="middleName">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control type="text" placeholder="Middle Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="spouseName">
              <Form.Label>Spouse Name</Form.Label>
              <Form.Control type="text" placeholder="Spouse Name" />
            </Form.Group>
            <Form.Group controlId="fatherName">
              <Form.Label>Father Name</Form.Label>
              <Form.Control type="text" placeholder="Father Name" />
            </Form.Group>
            <Form.Group controlId="motherName">
              <Form.Label>Mother Name</Form.Label>
              <Form.Control type="text" placeholder="Mother Name" />
            </Form.Group>
            <Form.Group controlId="designation">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" placeholder="Designation" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Phone Number (11 digits)" />
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="dob">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="doj">
                  <Form.Label>Date of Joining</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="nidNumber">
              <Form.Label>NID Number</Form.Label>
              <Form.Control type="text" placeholder="NID Number" />
            </Form.Group>
            <Form.Group controlId="photo">
              <Form.Label>Photo</Form.Label>
              <Form.Control type="file" accept="image/*" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          
        </Modal.Footer>
      </Modal>
      
    </>
  );
};

export default CreateNewEmployee;
