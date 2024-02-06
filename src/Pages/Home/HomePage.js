import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import View_Product_Hook from "../../CustomHooks/Product/View_Product_Hook";
import View_SortedProduct_Hook from "../../CustomHooks/Product/View_SortedProduct_Hook";

const HomePage = () => {
  const [items] = View_Product_Hook();
  const [products] = View_SortedProduct_Hook();
  return (
    <div className="font">
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        items={items}
        title="الاكثر مبيعا"
        btntitle="المزيد"
        pathText="/products"
      />
      <DiscountSection />
      <CardProductsContainer
        items={products}
        title="احدث الازياء"
        btntitle="المزيد"
        pathText="/products"
      />
      <BrandFeatured title="اشهر الماركات" btntitle="المزيد" />
    </div>
  );
};

export default HomePage;
