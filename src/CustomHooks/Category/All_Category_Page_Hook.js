import { useEffect } from "react";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actios/categoryAction";
import { useDispatch, useSelector } from "react-redux";

const All_Category_Page_Hook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory(6));
  }, []);
  const data = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  console.log(data);
  //to get page count
  let pageCount = 0;
  if (data.paginationResult) {
    pageCount = data.paginationResult.numberOfPages;
  }

  //when press pagination
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
    console.log(page);
  };
  return [data, loading, pageCount, getPage];
};

export default All_Category_Page_Hook;
