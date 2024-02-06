import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSidBar from "../../Components/Admin/AdminSidBar";
import AdminAddBrand from "../../Components/Admin/AdminAddBrand";

const AdminAddBoardPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSidBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAddBrand />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddBoardPage;
