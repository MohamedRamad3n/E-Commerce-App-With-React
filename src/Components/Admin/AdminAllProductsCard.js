import React, { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/actios/productAction";
const AdminAllProductsCard = ({ items }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    dispatch(deleteProduct(items._id))
    setShow(false)
    window.location.reload();
  }
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>حذف المنتج</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل انت متاكد من حذف المنتج</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div onClick={handleShow} className="d-inline item-delete-edit">ازاله</div>
            <Link to={`/admin/editproduct/${items._id}`} style={{ textDecoration: "none" }}>
              <div className="d-inline item-delete-edit">تعديل</div>
            </Link>
          </Col>
        </Row>
        <Link to={`/product/${items._id}`} style={{ textDecoration: "none" }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={items.imageCover} />
        </Link>
        <Card.Body>
          <Card.Title>
            <div className="card-title">
              {items.title}{" "}
            </div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between">
              <div className="card-rate">{items.ratingsQuantity}</div>
              <div className="d-flex">
                <div className="card-currency mx-1">جنيه</div>
                <div className="card-price">{items.price}</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard;
