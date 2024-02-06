import categoryReducer from "./CategoryReducer";
import brandReducer from "./brandReducer";
import { combineReducers } from "redux";
import subcategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";
export default combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  subCategory: subcategoryReducer,
  allProduct:productReducer,
});
