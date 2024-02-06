import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle";
const CardProductContainer = ({ title, btntitle, pathText, items }) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="my-2 d-flex justify-content-between">

        {
          items ? (
            items.map((item, index) => {
              return (
                <ProductCard item={item} key={index} />
              )
            })
          ) : null
        }
      </Row>
    </Container>
  );
};

export default CardProductContainer;
