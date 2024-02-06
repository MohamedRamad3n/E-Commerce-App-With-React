import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {  getAllProductWithSort } from '../../redux/actios/productAction';

const View_SortedProduct_Hook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProductWithSort());
    }, []);
    const allProduct = useSelector((state) => state.allProduct.SortedProduct);
    let products = []
    if (allProduct) {
        products = allProduct.data.slice(0, 4);
    }
    else {
        products = []
    }
    return [products]
}

export default View_SortedProduct_Hook