import { GET_ERROR, CREATE_SUB_CATEGORY, GET_SUB_CATEGORY } from "../type";
import { useInsertData } from "../../hook/useCreateCategory";
import useGetData from "../../hook/useGetData";
//create sub category with pagination
export const createSubCategory = (data) => async (dispatch) => {
    try {
        const response = await useInsertData("/api/v1/subcategories", data);
        dispatch({
            type: CREATE_SUB_CATEGORY,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}
//get sub category
export const getSubCategory = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/categories/${id}/subcategories`);
        console.log(response);
        dispatch({
            type: GET_SUB_CATEGORY,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}
