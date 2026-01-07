import * as yup from 'yup';

const addProductsOneSchema = yup.object().shape({
    photoUrl : yup
    .string()
    .required(" "),

    name : yup
    .string()
    .required("Mehsulun adin daxil edin"),

    desc : yup
    .string()
    .required("Mehsulun aciqlamasinin daxil edin")

});

export default addProductsOneSchema;