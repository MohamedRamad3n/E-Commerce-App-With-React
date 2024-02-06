import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSidBar from '../../Components/Admin/AdminSidBar';
import AdminAddProducts from '../../Components/Admin/AdminAddProducts';

const AdminAddProductPage = () => {
  return (
    <Container >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            <AdminSidBar />
        </Col>

        <Col sm="9" xs="10" md="10">
             <AdminAddProducts />
        </Col>
    </Row>
</Container>
  );
}

export default AdminAddProductPage;
