import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actios/categoryAction";

const Home_Category_Hook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllCategory());
    }, []);
    const data = useSelector((state) => state.allCategory.category.data);
    const loading = useSelector((state) => state.allCategory.loading);
    // const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
    return [loading,data]
}

export default Home_Category_Hook;
