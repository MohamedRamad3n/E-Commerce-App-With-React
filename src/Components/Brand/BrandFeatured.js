import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import BrandCard from "./BrandCard";
import Home_Brand_Hook from "../../CustomHooks/Brand/Home_Brand_Hook";

const BrandFeatured = ({ title, btntitle }) => {
  const [loading, brand] = Home_Brand_Hook();

  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          brand.data.length ? (
            brand.data.map((item, index) => {
              return <BrandCard img={item.image} key={index} />; //background={colors[index]}
            })
          ) : (
            <h1>لايوجد بيانات</h1>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default BrandFeatured;
