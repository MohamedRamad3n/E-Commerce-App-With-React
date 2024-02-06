import React from "react";
import { Container } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import CardProductContainer from '../../Components/Products/CardProductContainer'
import View_Specific_Product_Hook from "../../CustomHooks/Product/View_Specific_Product_Hook";
import { useParams } from "react-router-dom";
const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, images, cat, brands, productsLike] = View_Specific_Product_Hook(id);
  let items = [];
  if (productsLike) {
    items = productsLike.slice(0, 4)
  }
  else {
    items = []
  }
  console.log(productsLike);
  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        <CardProductContainer items={items} title='منتجات قد تعجبك' />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
