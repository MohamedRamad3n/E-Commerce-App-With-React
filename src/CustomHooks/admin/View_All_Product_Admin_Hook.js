import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct, getAllProductPage } from '../../redux/actios/productAction';

const View_All_Product_Hook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProduct(5));
    }, []);
    const allProduct = useSelector((state) => state.allProduct.allProducts);
    let items = []
    if (allProduct) {
        items = allProduct.data;
    }
    else {
        items = []
    }
    let DataPagination = []
    if (allProduct) {
        DataPagination = allProduct.paginationResult;
    }
    else {
        DataPagination = []
    }
    //when press pagination
    const getPage = (page) => {
        dispatch(getAllProductPage(page));
        console.log(page);
    };
    return [items, DataPagination, getPage]
}

export default View_All_Product_Hook