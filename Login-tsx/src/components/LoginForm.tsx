import { login } from '../api/api';
import loginSchema from '../validation/login';
import Button from './Button'
import Label from './Label'
import TextInput from "./UI/TextInput";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import type { User, FormType } from '../types/type';
import { useDispatch } from 'react-redux';
import { setToken } from '../store/slices/auth';
import { useState } from 'react';





export default function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [loading,setLoading]=useState<boolean>(false)

  const formik = useFormik<FormType>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async ({ email, password }) => {
      try {
        setLoading(true)      
        const user: User = {
          email,
          password,
          returnSecureToken: true
        }
        const result = await login(user);
        if (result.data.idToken) {
          setLoading(false)
          
          toast.success("Hesaba daxil oldunuz", {
            position: "top-center",
            autoClose: 1800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })

          dispatch(setToken(result.data.idToken))
          navigate("/")
          formik.resetForm();

        }
      } catch (err) {
        toast.error("Xeta bas verdi.", {
          position: "top-center",
          autoClose: 1800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="mt-4 ">
      <TextInput type="email" placeholder="E-mail" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className={`form-control rounded-3 ${formik.errors.email && formik.touched.email ? 'is-invalid' : ""}`} />
      {
        formik.errors.email && formik.touched.email && (
          <p className='text-danger ps-2' style={{ marginTop: "-9px", marginBottom: "6px" }}>
            {formik.errors.email}
          </p>
        )
      }
      <TextInput type="password" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className={`form-control rounded-3 ${formik.errors.password && formik.touched.password ? 'is-invalid' : ""}`} />
      {
        formik.errors.password && formik.touched.password && (
          <p className='text-danger ps-2' style={{ marginTop: "-9px", marginBottom: "6px" }}>
            {formik.errors.password}
          </p>
        )
      }

      <div className="d-grid mb-3">
        <Button loading ={loading} type="submit" btn_text="Login" />
      </div>

      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <Label />

        <div className="text-end pb-4">
          <a href="#" className="text-decoration-none">
            Forgot Password
          </a>
        </div>
      </div>
    </form>
  );
}
