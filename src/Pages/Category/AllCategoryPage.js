import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";
import All_Category_Page_Hook from "../../CustomHooks/Category/All_Category_Page_Hook";
const AllCategoryPage = () => {
  const [data, loading, pageCount, getPage] = All_Category_Page_Hook();
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={data.data} loading={loading} />
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}
    </div>
  );
};

export default AllCategoryPage;
