import React from "react";
import { Container } from "react-bootstrap";
import ChoosePaymentMethod from "../../Components/CheckOut/ChoosePaymentMethod";

const ChoosePaymentMethodPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <ChoosePaymentMethod />
    </Container>
  );
};

export default ChoosePaymentMethodPage;
