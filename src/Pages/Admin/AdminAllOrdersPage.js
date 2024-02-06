import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminAllOrders from "../../Components/Admin/AdminAllOrders";
import AdminSidBar from "../../Components/Admin/AdminSidBar";
import Pagination from "../../Components/Utility/Pagination";
const AdminAllOrdersPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSidBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAllOrders />
         <Pagination />
        </Col>
      </Row>
    </Container>
  );
};
export default AdminAllOrdersPage;
