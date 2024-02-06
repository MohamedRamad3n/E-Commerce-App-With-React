import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../redux/actios/productAction';

const View_Search_Product_Hook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProduct());
    }, []);
    const allProduct = useSelector((state) => state.allProduct.allProducts);
    let items = []
    if (allProduct) {
        items = allProduct.data;
    }
    else {
        items = []
    }
    return [items]
}

export default View_Search_Product_Hook