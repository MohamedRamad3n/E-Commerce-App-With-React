import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/actios/brandAction";

const Home_Brand_Hook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllBrand());
    }, []);
    const brand = useSelector((state) => state.allBrand.brand);
    const loading = useSelector((state) => state.allBrand.loading);
    // const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
    return [loading, brand]
}

export default Home_Brand_Hook;
