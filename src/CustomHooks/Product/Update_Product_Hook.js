import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actios/categoryAction";
import { getAllBrand } from "../../redux/actios/brandAction";
import { getSubCategory } from "../../redux/actios/subCategoryAction";
import notify from "../useNotification";
import { createProduct, getSpecificProduct } from "../../redux/actios/productAction";

const Update_Product_Hook = (id) => {
    const [images, setImages] = useState({});
    const [prodName, setProdName] = useState('');
    const [prodDescription, setProdDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
    const [priceAfter, setPriceAfter] = useState('السعر بعد الخصم');
    const [qty, setQty] = useState('الكمية المتاحة');
    const [category_id, setCategoryId] = useState('');
    const [brandId, setBrandId] = useState('');

    const onChangeProdName = (event) => {
        event.persist();
        setProdName(event.target.value)
    }
    //to change name state
    const onChangeDesName = (event) => {
        event.persist();
        setProdDescription(event.target.value)
    }
    //to change name state
    const onChangePriceBefor = (event) => {
        event.persist();
        setPriceBefore(event.target.value)
    }
    //to change name state
    const onChangePriceAfter = (event) => {
        event.persist();
        setPriceAfter(event.target.value)
    }  //to change name state
    const onChangeQty = (event) => {
        event.persist();
        setQty(event.target.value)
    }
    const onChangeColor = (event) => {
        event.persist();
        setSelectColor(!selectColor)
    }

    //  const [subCatId, setSubCatId] = useState([]);
    const [selectedSubId, setSelectedSubId] = useState([])
    const [selectColor, setSelectColor] = useState(false)
    const [options, setOptions] = useState([])
    const [colors, setColor] = useState([]);
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    useEffect(() => {
        const run = async () => {
            await dispatch(getSpecificProduct(id))
            await dispatch(getAllCategory());
            await dispatch(getAllBrand());
        }
        run();
    }, []);
    const item = useSelector((state) => state.allProduct.specificProduct)
    const category = useSelector((state) => state.allCategory.category);
    const brand = useSelector((state) => state.allBrand.brand);
    const subCategory = useSelector((state) => state.subCategory.subcategory);
    console.log(item);
    const onSelect = (selectedList) => {
        setSelectedSubId(selectedList)
    };
    const onRemove = (selectedList) => {
        setSelectedSubId(selectedList)
    };

    const onSelectCat = async (e) => {
        setCategoryId(e.target.value)
    }
    useEffect(() => {
        if (category_id != 0) {
            const run = async () => {
                await dispatch(getSubCategory(category_id));
            }
            run();
        }
    }, [category_id])
    useEffect(() => {
        if (subCategory) {
            setOptions(subCategory.data)
        }
    }, [subCategory])
    const onSelectBrand = (e) => {
        setBrandId(e.target.value)
    }
    const handleChange = (color) => {
        setColor([...colors, color.hex])
        setSelectColor(!selectColor)
    }
    const deleteColor = (color) => {
        const newColors = colors.filter((e) => e !== color)
        setColor(newColors)
    }
    // to convert image 64base to file 
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    //to show data of product in fild
    useEffect(() => {
        if (item) {
            setProdName(item.data.title)
            setProdDescription(item.data.description)
            setPriceBefore(item.data.price)
            setQty(item.data.quantity)
            setCategoryId(item.data.category)
            setBrandId(item.data.brand)
            setColor(item.data.availableColors)
            setImages(item.data.images)
        }
    }, [item])
    //to save data
    const handleSubmit = async (e) => {

    }
    const products = useSelector((state) => state.allProduct.products);
    useEffect(() => {
        if (loading === false) {
            setCategoryId(0)
            setImages([])
            setColor([])
            setQty("الكمية المتاحة");
            setPriceBefore('السعر قبل الخصم')
            setProdName('')
            setProdDescription('')
            setPriceAfter("السعر بعد الخصم")
            setSelectedSubId([])
            setTimeout(() => {
                setLoading(true)
            }, 2000);
            if (products.status === 201) {
                notify("تم الاضافة بنجاح", "success")
            }
            else {
                notify("هناك مشكلة في عملية الاضافة", "error")
            }
        }

    }, [loading]);
    return [category_id, brandId, onChangeProdName, onChangeDesName, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeQty, images, setImages, qty, prodName, prodDescription, priceAfter, priceBefore, category, options, onSelect, onRemove, onSelectBrand, brand, colors, deleteColor, selectColor, handleChange, handleSubmit, onSelectCat]
}

export default Update_Product_Hook
