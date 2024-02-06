import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Utility/SearchCountResult";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../../Components/Utility/SideFilter";
import CardProductContainer from "../../Components/Products/CardProductContainer";
import View_Search_Product_Hook from "../../CustomHooks/Product/View_Search_Product_Hook";
const ShopProductsPage = () => {
  const [items] = View_Search_Product_Hook()
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title={`هناك عدد ${items.length} نتيجة بحث`} />
        <Row className="d-flex flex-row">
          <Col sm="2" md="1" xs="2" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" md="11" xs="10">
            <CardProductContainer items={items} title="" btntitle="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopProductsPage;
