import * as yup from 'yup';

const registerSchema = yup.object().shape({
    email : yup
    .string()
    .email("Email formatinda daxil edin")
    .required("Email daxil edin"),

    password : yup
    .string()
    .required("Sifreni daxil edin")
    .min(8,"Minumum 8 simvol olmalidir"),

    confirmPassword : yup
    .string()
    .oneOf([yup.ref("password")],"Şifrələr uyğun deyil" )
    .required("Şifrələr uyğun deyil")
})


export default registerSchema;