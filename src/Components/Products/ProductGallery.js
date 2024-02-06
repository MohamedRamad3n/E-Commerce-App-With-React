import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from "../../images/mobile.png";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import View_Specific_Product_Hook from "../../CustomHooks/Product/View_Specific_Product_Hook";
const ProductGallery = () => {
  const { id } = useParams();
  const [product,images] = View_Specific_Product_Hook(id)
  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2"
    >
      <ImageGallery
        items={images}
        defaultImage={mobile}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductGallery;
