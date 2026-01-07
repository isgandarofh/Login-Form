import { useDispatch } from "react-redux";
import { prevStep } from "../../store/slices/products";
import { useFormik } from "formik";


export default function StepTwo() {
  const dispatch = useDispatch();
  const formik = useFormik({
        initialValues: {
            category :  "",
            price : "",
            count : "",
        },
        
        onSubmit: values => {
            
        },
    });

  return (
    <>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select className="form-select">
          <option value="">Select category</option>
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          placeholder="Price"
        />
      </div>

      <div className="mb-4">
        <label className="form-label">Count</label>
        <input
          type="number"
          className="form-control"
          placeholder="Count"
        />
      </div>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-outline-secondary"
          onClick={() => dispatch(prevStep())}
        >
          Back
        </button>

        <button className="btn btn-success">
          Add Product
        </button>
      </div>
    </>
  );
}
