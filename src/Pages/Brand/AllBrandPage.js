import React from "react";
import BrandContainer from "../../Components/Brand/BrandContainer";
import All_Brand_Page_Hook from "../../CustomHooks/Brand/All_Brand_page_Hook";
import Pagination from "../../Components/Utility/Pagination";

const AllBrandPage = () => {
  const [brand, loading, pageCount, getPage] = All_Brand_Page_Hook();
  return (
    <div style={{ minHeight: "670px" }}>
      <BrandContainer data={brand.data} loading={loading} />
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}
    </div>
  );
};

export default AllBrandPage;
