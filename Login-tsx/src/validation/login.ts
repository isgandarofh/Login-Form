import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email : yup
    .string()
    .email("Email formatinda daxil edin")
    .required("Email daxil edin"),

    password : yup
    .string()
    .required("Sifreni daxil edin")
    .min(8,"Minumum 8 simvol olmalidir"),

});

export default loginSchema;