import { useDispatch } from "react-redux";
import { nextStep } from "../../store/slices/products";
import { useFormik } from "formik";
import TextInput from "../UI/TextInput";
import addProductsOneSchema from "../../validation/addProductsOne";


export default function StepOne() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            photoUrl: "",
            name: "",
            desc: "",
        },
        validationSchema : addProductsOneSchema,
        onSubmit: values => {
            dispatch(nextStep())
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} >
                <div className="mb-3">
                    <label className="form-label">Product Photo</label>
                    <TextInput type="text" placeholder="Enter Product Photo Url" name="photoUrl" value={formik.values.photoUrl} onChange={formik.handleChange} onBlur={formik.handleBlur} className={`form-control rounded-3 ${formik.errors.photoUrl && formik.touched.photoUrl ? 'is-invalid' : ""}`} />

                </div>

                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <TextInput type="text" placeholder="Enter product name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className={`form-control rounded-3 ${formik.errors.name && formik.touched.name ? 'is-invalid' : ""}`} />

                </div>


                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        id="desc" name="desc" onChange={formik.handleChange} onBlur={formik.handleBlur}
                        value={formik.values.desc}
                        className={`form-control rounded-3 ${formik.errors.desc && formik.touched.desc ? 'is-invalid' : ""}`}
                        placeholder="Enter description"
                    ></textarea>
                </div>

                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-primary"
                        type="submit">
                        Next
                    </button>
                </div>
            </form>

        </>
    );
}
