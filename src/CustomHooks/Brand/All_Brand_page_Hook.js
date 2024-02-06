import { useEffect } from "react";
import {
    getAllBrand,
    getAllBrandPage,
} from "../../redux/actios/brandAction";
import { useDispatch, useSelector } from "react-redux";

const All_Brand_Page_Hook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllBrand(3));
    }, []);
    const brand = useSelector((state) => state.allBrand.brand);
    const loading = useSelector((state) => state.allBrand.loading);
    console.log(brand);
    //to get page count
    let pageCount = 0;
    if (brand.paginationResult) {
        pageCount = brand.paginationResult.numberOfPages;
        console.log(pageCount);
    }

    //when press pagination
    const getPage = (page) => {
        dispatch(getAllBrandPage(page));
        console.log(page);
    };
    return [brand, loading, pageCount, getPage];
};

export default All_Brand_Page_Hook;
