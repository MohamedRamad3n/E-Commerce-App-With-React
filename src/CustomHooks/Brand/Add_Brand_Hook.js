import { useEffect, useState } from "react";
import notify from "../../CustomHooks/useNotification";
import avatar from "../../images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { createBrand } from "../../redux/actios/brandAction";
import "react-toastify/dist/ReactToastify.css";
const Add_Brand_Hook = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  //when image change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };
  const data = useSelector((state) => state.allBrand.brand);
  //save data in dataBase
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    if (name === "" || selectedFile === null) {
      notify("من فضلك اكمل البيانات", "warn");
    }
    setLoading(true);
    setIsPress(true);
    await dispatch(createBrand(formData));
    setLoading(false);
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (loading === false) {
      setImg(avatar);
      setName("");
      setSelectedFile(null);
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);

      if (data.status === 201) {
        notify("تمت عملية الاضافة بنجاح", "success");
      } else {
        notify(" هناك مشكلة في  عملية الاضافة ", "error");
      }
    }
  }, [loading]);
  return [
    img,
    name,
    isPress,
    handleSubmit,
    loading,
    onImageChange,
    onNameChange,
  ];
};

export default Add_Brand_Hook;
