import { useDispatch, useSelector } from 'react-redux'
import { getProductLike, getSpecificProduct } from '../../redux/actios/productAction';
import { useEffect } from 'react';
import mobile from "../../images/mobile.png";
import { getOneCategory } from '../../redux/actios/categoryAction';
import { getOneBrand } from '../../redux/actios/brandAction';
const View_Specific_Product_Hook = (id) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSpecificProduct(id))
  }, []);

  const specificProduct = useSelector((state) => state.allProduct.specificProduct);
  const oneCategory = useSelector((state) => state.allCategory.category)
  const oneBrand = useSelector((state) => state.allBrand.brand)
  const productLike = useSelector((state) => state.allProduct.productLike);
  //to get one product
  let product = []
  if (specificProduct) {
    product = specificProduct.data;
  }
  else {
    product = []
  }

  //to get one brand
  useEffect(() => {
    if (product.brand)
      dispatch(getOneBrand(product.brand))
    if (product.category)
      dispatch(getOneCategory(product.category))
    if (product.category)
      dispatch(getProductLike(product.category))
  }, [product]);

  //to get product Like
  let productsLike = []
  if (productLike) {
    productsLike = productLike.data;
  }
  else {
    productsLike = []
  }
  //to get one product
  let brands = []
  if (oneBrand) {
    brands = oneBrand.data;
  }
  else {
    brands = []
  }
  //to get images of product
  let images = [];
  if (product.images) {
    images = product.images.map((img) => {
      return (
        {
          original: img,
        }
      )
    })
  }
  else {
    images = [{
      original: `${mobile}`,
    }]
  }

  //to get one category
  let cat = []
  if (oneCategory) {
    cat = oneCategory.data;
  }
  else {
    cat = []
  }
  return [product, images, cat, brands, productsLike]
}

export default View_Specific_Product_Hook
