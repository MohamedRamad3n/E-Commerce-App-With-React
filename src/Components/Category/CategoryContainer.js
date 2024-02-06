import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
const CategoryContainer = ({ data, loading }) => {
  return (
    <Container>
      <div className="admin-content-text mt-3">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data.length ? (
            data.map((item, index) => {
              return <CategoryCard key={index} title={item.name} img={item.image} />; //background={colors[index]}
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

export default CategoryContainer;
