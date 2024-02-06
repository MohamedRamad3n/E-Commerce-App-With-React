import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container style={{ minHeight: "750px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">تسجيل الدخول</label>
          <input
            placeholder="الايميل..."
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            placeholder="كلمه السر..."
            type="password"
            className="user-input text-center mx-auto"
          />
          <button className="btn-login mx-auto mt-4">تسجيل الدخول</button>
          <label className="mx-auto my-4">
            ليس لديك حساب ؟{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <label className="mx-auto my-4">
        <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
          <span style={{ cursor: "pointer" }} className="text-danger">
            الدخول بحساب الادمن
          </span>
        </Link>
        <Link to="/user/allorders" style={{ textDecoration: "none" , margin: "20px"  }}>
          <span
            style={{ cursor: "pointer"}}
            className="text-danger"
          >
            الدخول بحساب المستخدم
          </span>
        </Link>
      </label>
    </Container>
  );
};

export default LoginPage;
