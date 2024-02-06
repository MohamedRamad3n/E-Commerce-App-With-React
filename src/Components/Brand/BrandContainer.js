import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
const BrandContainer = ({ loading, data }) => {
  return (
    <Container>
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          data.length ? (
            data.map((item, index) => {
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

export default BrandContainer;
