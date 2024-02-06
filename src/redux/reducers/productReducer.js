import { GET_ERROR, CREATE_PRODUCT, GET_ALL_PRODUCT, GET_ALL_PRODUCT_WITH_SORT, GET_SPECIFIC_PRODUCT, GET_PRODUCT_LIKE, DELETE_PRODUCT } from "../type";

const initial = {
    products: [],
    loading: true,
};
const productReducer = (state = initial, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case GET_ALL_PRODUCT:
            return {
                ...state,
                allProducts: action.payload,
                loading: false,
            };
        case GET_ALL_PRODUCT_WITH_SORT:
            return {
                ...state,
                SortedProduct: action.payload,
                loading: false,
            };
        case GET_SPECIFIC_PRODUCT:
            return {
                ...state,
                specificProduct: action.payload,
                loading: false,
            };
        case GET_PRODUCT_LIKE:
            return {
                ...state,
                productLike: action.payload,
                loading: false,
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                allProducts: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                products: action.payload,
                loading: true,
            };
        default:
            return state;
    }
};
export default productReducer;