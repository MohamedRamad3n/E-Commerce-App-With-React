import Footer from "./Components/Utility/Footer";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CartPage from "./Pages/Cart/CartPage";
import ChoosePaymentMethodPage from "./Pages/CheckOut/ChoosePaymentMethodPage";
import AdminAllProductPage from "./Pages/Admin/AdminAllProductPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetails";
import AdminAddBoardPage from "./Pages/Admin/AdminAddBoardPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./Pages/Admin/AdminAddProductPage";
import UserAllOrderPage from "./Pages/User/UserAllOrderPage";
import UserFavoriteProductsPage from "./Pages/User/UserFavoriteProductsPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import UserAllAddressPage from "./Pages/User/UserAllAddressPage";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage";
import UserEditAddressPage from "./Pages/User/UserEditAddressPage";
import AdminEditProductPage from "./Pages/Admin/AdminEditProductPage";
function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductPage />} />
          <Route
            path="/order/paymethoud"
            element={<ChoosePaymentMethodPage />}
          />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage />} />
          <Route path="admin/addbrand" element={<AdminAddBoardPage />} />
          <Route path="admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route
            path="admin/addsubcategory"
            element={<AdminAddSubCategoryPage />}
          />
          <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
          <Route path="/user/allorders" element={<UserAllOrderPage />} />
          <Route
            path="/user/favoriteproducts"
            element={<UserFavoriteProductsPage />}
          />
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route path="/user/addresses" element={<UserAllAddressPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />
          <Route path="/admin/editproduct/:id" element={<AdminEditProductPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
