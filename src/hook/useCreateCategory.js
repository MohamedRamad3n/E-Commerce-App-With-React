import baseUrl from "../Api/BaseUrl";
const useInsertData = async (url, param) => {
  const res = await baseUrl.post(url, param);
  return res;
};
const useInsertDataWithImage = async (url, param, formData) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  const res = await baseUrl.post(url, param, config);
  console.log(res);
  return res;
};
export { useInsertData, useInsertDataWithImage };