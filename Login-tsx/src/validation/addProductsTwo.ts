import * as yup from "yup";

const addProductsTwoSchema = yup.object().shape({
  category: yup
    .string()
    .required("Kateqoriya seçilməlidir"),

  price: yup
    .number()
    .required("Qiyməti daxil edin"),

  count: yup
    .number()
    .min(1, "Say ən azı 1 olmalıdır")
    .required("Say daxil edin")
});

export default addProductsTwoSchema;
