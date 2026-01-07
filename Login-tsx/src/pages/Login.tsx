import PageTitle from "../components/PageTitle";
import user_icon from "../assets/icons8-user-male-24.png"
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import {Helmet} from "react-helmet";


export default function Login() {
  return (

    <>
      <Helmet>
        <title>Login </title>
      </Helmet>

      <section className="py-5 bg-light min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-7 col-lg-5">
              <div className="bg-white  p-md-5 shadow rounded-4">

                <div className="d-flex justify-content-center mb-3">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}>
                    <img src={user_icon} alt="" />
                  </div>
                </div>
                <PageTitle title={"Login"} />
                <LoginForm />
                <div className="text-center mt-3 ">
                  Not Registered?
                  <Link to="/register" className="text-decoration-none fs-6 ps-1  ">
                    Create an account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>



  );
}
