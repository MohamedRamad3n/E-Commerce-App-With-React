import { useEffect, useState } from "react";
import notify from "../../CustomHooks/useNotification";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actios/categoryAction";
import "react-toastify/dist/ReactToastify.css";
import { createSubCategory } from "../../redux/actios/subCategoryAction";
const Add__Sub_Category_Hook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!navigator.onLine) {
            notify("هناك مشكله فى الاتصال بالانترنت", "warn")
            return;
        }
        dispatch(getAllCategory());
    }, [])
    const [id, setID] = useState('0')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    //get last catgeory state from redux
    const category = useSelector(state => state.allCategory.category)


    //get last sub catgeory state from redux
    const subcategory = useSelector(state => state.subCategory.subcategory)

    //on change dropdown menu
    const handelChange = (e) => {
        console.log(e.target.value)
        setID(e.target.value)
    }

    //to save name
    const onChangeName = (e) => {
        e.persist();
        setName(e.target.value)
    }
    //on save data 
    const handelSubmit = async (e) => {
        e.preventDefault();
        if (!navigator.onLine) {
            notify("هناك مشكله فى الاتصال بالانترنت", "warn")
            return;
        }
        if (id === "0") {
            notify("من فضلك اختر تصنيف رئيسي", "warn")
            return;
        }
        if (name === "") {
            notify("من فضلك ادخل اسم التصنيف", "warn")
            return;
        }

        setLoading(true)
        await dispatch(createSubCategory({
            name,
            category: id
        }))
        setLoading(false)

    }
    useEffect(() => {

        if (loading === false) {
            setName("")
            setID("0")
            if (subcategory)
                console.log(subcategory)
            if (subcategory.status === 201) {
                notify("تمت الاضافة بنجاح", "success")
            }
            else if (subcategory === "Error AxiosError: Request failed with status code 400") {
                notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "warn")
            }
            else {
                notify("هناك مشكله فى عملية الاضافة", "warn")
            }

            setLoading(true)
        }
    }, [loading])


    return [id, name, loading, category, subcategory, handelChange, handelSubmit, onChangeName]
};

export default Add__Sub_Category_Hook;
