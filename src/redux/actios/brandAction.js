import { GET_ALL_BRAND, GET_ERROR, CREATE_BRAND ,GET_ONE_BRAND} from "../type";
import useGetData from "../../hook/useGetData";
import { useInsertDataWithImage } from "../../hook/useCreateCategory";
export const getAllBrand = (limit) => async (dispatch) => {
    try {
        // const res = await baseUrl.get("/api/v1/categories");
        const response = await useGetData(`/api/v1/brands?limit=${limit}`);
        dispatch({
            type: GET_ALL_BRAND,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e,
        });
    }
};

//get specific brand
export const getOneBrand = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/brands/${id}`);

        dispatch({
            type: GET_ONE_BRAND,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

export const getAllBrandPage = (page) => async (dispatch) => {
    try {
        // const res = await baseUrl.get("/api/v1/categories");
        const response = await useGetData(
            `/api/v1/brands?limit=3&page=${page}`
        );
        dispatch({
            type: GET_ALL_BRAND,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "ERROR" + e,
        });
    }
};
export const createBrand = (formData) => async (dispatch) => {
    try {
        // const res = await baseUrl.get("/api/v1/categories");
        const response = await useInsertDataWithImage(
            "/api/v1/brands",
            formData
        );
        console.log(response);
        dispatch({
            type: CREATE_BRAND,
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
