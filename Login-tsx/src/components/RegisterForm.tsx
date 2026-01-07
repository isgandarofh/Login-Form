import { register } from '../api/api';
import registerSchema from '../validation/register';
import Button from './Button'
import { useFormik } from 'formik';
import TextInput from './UI/TextInput';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import type { User, RegisterFormType } from '../types/type';
import { useState } from 'react';


export default function RegisterForm() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)

    const formik = useFormik<RegisterFormType>({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: registerSchema,
        onSubmit: async ({ email, password }) => {
            try {
                setLoading(true)
                const user: User = {
                    email,
                    password,
                    returnSecureToken: true
                }
                const result = await register(user)
                if (result.data.idToken) {
                    setLoading(false)
                    navigate("/login")
                    toast.success("Qeydiyyat ugurlu oldu", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                    formik.resetForm();


                    
                }
            } catch (error) {
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

            <TextInput type="password" placeholder="Password" name="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className={`form-control rounded-3 ${formik.errors.password && formik.touched.password ? 'is-invalid' : ""}`} />
            {
                formik.errors.password && formik.touched.password && (
                    <p className='text-danger ps-2' style={{ marginTop: "-9px", marginBottom: "6px" }}>
                        {formik.errors.password}
                    </p>
                )
            }
            <TextInput type="password" placeholder="Confirm Password" name="confirmPassword" value={formik.values.confirmPassword} onBlur={formik.handleBlur} onChange={formik.handleChange} className={`form-control rounded-3 ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'is-invalid' : ""}`} />
            {
                formik.errors.confirmPassword && formik.touched.confirmPassword && (
                    <p className='text-danger ps-2' style={{ marginTop: "-9px", marginBottom: "6px" }}>
                        {formik.errors.confirmPassword}
                    </p>
                )
            }

            <div className="d-grid mb-3">
                <Button loading={loading} type='submit' btn_text={"Create account"} />
            </div>
        </form>
    )
}
