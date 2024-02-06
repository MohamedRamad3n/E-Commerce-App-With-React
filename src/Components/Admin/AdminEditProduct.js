import React from 'react';

import Multiselect from "multiselect-react-dropdown";
import add from "../../images/add.png";
import MultiImageInput from 'react-multiple-image-input';

import { ToastContainer } from "react-toastify";
import { CompactPicker } from "react-color";
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Update_Product_Hook from '../../CustomHooks/Product/Update_Product_Hook';
const AdminEditProduct = () => {
    const { id } = useParams()
    const [category_id,brandId,onChangeProdName, onChangeDesName, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeQty, images, setImages, qty, prodName, prodDescription, priceAfter, priceBefore, category, options, onSelect, onRemove, onSelectBrand, brand, colors, deleteColor, selectColor, handleChange, handleSubmit, onSelectCat] = Update_Product_Hook(id);
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> تعديل المنتج : {prodName}</div>
                <Col sm="8">
                    <div className="text-form pb-2"> صور للمنتج</div>
                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        allowCrop={false}
                        max={5}
                    />
                    <input
                        value={prodName}
                        onChange={onChangeProdName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                    />
                    <textarea
                        value={prodDescription}
                        onChange={onChangeDesName}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                    />
                    <input
                        value={priceBefore}
                        onChange={onChangePriceBefor}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                    />
                    <input
                        value={priceAfter}
                        onChange={onChangePriceAfter}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر بعد الخصم "
                    />
                    <input
                        value={qty}
                        onChange={onChangeQty}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder=" الكمية المتاجة "
                    />
                    <select
                    value={category_id}
                        name="cat"
                        onChange={onSelectCat}
                        className="select input-form-area mt-3 px-2 "
                    >
                        <option value="0">اختر التصنيف</option>
                        {
                            category.data ? (
                                category.data.map((item, index) => {
                                    return (
                                        <option key={index} value={item._id}>{item.name}</option>)
                                })) : null
                        }
                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                    value={brandId}
                        onChange={onSelectBrand}
                        name="brand"
                        id="brand"
                        className="select input-form-area mt-3 px-2 "
                    >
                        <option value="0">اختر ماركة</option>
                        {
                            brand.data ? (
                                brand.data.map((item, index) => {
                                    return (
                                        <option key={index} value={item._id}>{item.name}</option>)
                                })) : null
                        }
                    </select>
                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">
                        {
                            colors.length >= 1 ? (
                                colors.map((color, index) => {
                                    return (
                                        <div key={index}
                                            onClick={() => deleteColor(color)}
                                            className="color ms-2 border mt-1"
                                            style={{ backgroundColor: color }}
                                        >
                                        </div>
                                    )
                                })
                            ) : null
                        }
                        <img onClick={onChangeColor} src={add} alt="" width="30px" height="35px" style={{ cursor: 'pointer' }} />
                        {
                            selectColor === true ? <CompactPicker onChangeComplete={handleChange} /> : null
                        }

                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    );
};
export default AdminEditProduct;
