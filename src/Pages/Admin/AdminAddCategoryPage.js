import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSidBar from '../../Components/Admin/AdminSidBar';
import AdminAddCategory from '../../Components/Admin/AdminAddCategory';

const AdminAddCategoryPage = () => {
  return (
    <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSidBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAddCategory />
                </Col>
            </Row>
        </Container>
  );
}

export default AdminAddCategoryPage;
