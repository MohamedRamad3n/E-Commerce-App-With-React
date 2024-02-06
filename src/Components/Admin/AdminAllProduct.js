import React from 'react';
import { Row } from 'react-bootstrap';
import AdminAllProductsCard from './AdminAllProductsCard';

const AdminAllProduct = ({ items }) => {
  return (
    <div>
      <div className='admin-content-text'>ادارة جميع المنتجات</div>
      <Row className='justify-content-start'>
        {
          items ? (
            items.map((items, index) => <AdminAllProductsCard items={items} key={index} />)
          ) : <h4>لا يوجد بيانات</h4>
        }


      </Row>

    </div>
  );
}

export default AdminAllProduct;
