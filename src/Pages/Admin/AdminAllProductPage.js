import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSidBar from "../../Components/Admin/AdminSidBar";
import AdminAllProduct from "../../Components/Admin/AdminAllProduct";
import Pagination from "../../Components/Utility/Pagination";
import View_All_Product_Hook from "../../CustomHooks/admin/View_All_Product_Admin_Hook";

const AdminAllProductPage = () => {
  const [items, DataPagination, getPage] = View_All_Product_Hook()
  if (DataPagination) {
    var pageCount = DataPagination.numberOfPages;
  }
  else {
    pageCount = 0
  }
  return (
    <Container>
      <Row>
        <Col sm="3" lg="2" md="2">
          <AdminSidBar />
        </Col>
        <Col sm="9" lg="10" md="10">
          <AdminAllProduct items={items} />
          {pageCount > 1 ? (
            <Pagination pageCount={pageCount} onPress={getPage} />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProductPage;
