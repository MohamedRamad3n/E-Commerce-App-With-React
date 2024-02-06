import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSidBar from "../../Components/Admin/AdminSidBar";
import AdminAddSubCategory from "../../Components/Admin/AdminAddSubCategory";
const AdminAddSubCategoryPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSidBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAddSubCategory />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddSubCategoryPage;
