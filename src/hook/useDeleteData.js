import baseUrl from "../Api/BaseUrl";
const useDeleteData = async (url, param) => {
    const res = await baseUrl.delete(url, param);
    return res.data;
};
export default useDeleteData;