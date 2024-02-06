import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import Home_Category_Hook from "../../CustomHooks/Category/Home_Category_Hook";

const HomeCategory = () => {
  const [loading, data] = Home_Category_Hook();
  return (
    <Container>
      <SubTitle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data.length ? (
            data.slice(0, 6).map((item, index) => {
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

export default HomeCategory;
