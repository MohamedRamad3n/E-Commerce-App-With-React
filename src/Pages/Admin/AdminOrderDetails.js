import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminOrderDetails from "../../Components/Admin/AdminOrderDetails";
import AdminSidBar from "../../Components/Admin/AdminSidBar";
const AdminOrderDetailsPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSidBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminOrderDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminOrderDetailsPage;
