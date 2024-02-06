import { useInsertDataWithImage } from "../../hook/useCreateCategory";
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCT, GET_ALL_PRODUCT_WITH_SORT, GET_ERROR, GET_PRODUCT_LIKE, GET_SPECIFIC_PRODUCT } from "../type";
import useGetData from '../../hook/useGetData'
import useDeleteData from "../../hook/useDeleteData";

export const createProduct = (formData) => async (dispatch) => {
    try {
        // const res = await baseUrl.get("/api/v1/categories");
        const response = await useInsertDataWithImage(
            "/api/v1/products",
            formData
        );
        dispatch({
            type: CREATE_PRODUCT,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e,
        });
    }
};

//get allproduct 
export const getAllProduct = (limit) => async (dispatch) => {
    try {
        // const res = await baseUrl.get("/api/v1/categories");
        const response = await useGetData(`/api/v1/products?limit=${limit}`);
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e,
        });
    }
};

//get All product with sort by price
export const getAllProductWithSort = () => async (dispatch) => {
    try {
        // const res = await baseUrl.get("/api/v1/categories");
        const response = await useGetData("/api/v1/products?sort=price");
        dispatch({
            type: GET_ALL_PRODUCT_WITH_SORT,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e,
        });
    }
};

//get specific product 
export const getSpecificProduct = (id) => async (dispatch) => {
    try {
        // const res = await baseUrl.get("/api/v1/categories");
        const response = await useGetData(`/api/v1/products/${id}`);
        dispatch({
            type: GET_SPECIFIC_PRODUCT,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e,
        });
    }
};

//get product like another product using category_id
export const getProductLike = (id) => async (dispatch) => {
    try {
        // const res = await baseUrl.get("/api/v1/categories");
        const response = await useGetData(`/api/v1/products?category=${id}`);
        dispatch({
            type: GET_PRODUCT_LIKE,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e,
        });
    }
};


//Delete Product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        // const res = await baseUrl.get("/api/v1/categories");
        const response = await useDeleteData(`/api/v1/products/${id}`);
        dispatch({
            type: DELETE_PRODUCT,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e,
        });
    }
};

// to get page of product
export const getAllProductPage = (page) => async (dispatch) => {
    try {
      // const res = await baseUrl.get("/api/v1/categories");
      const response = await useGetData(
        `/api/v1/products?limit=4&page=${page}`
      );
      dispatch({
        type: GET_ALL_PRODUCT,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "ERROR" + e,
      });
    }
  };