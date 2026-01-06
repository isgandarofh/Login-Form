import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import { ToastContainer } from 'react-toastify';
import Error from "./pages/Error";
import RequiredAuth from "./components/RequiredAuth";
import DefaultLayout from "./components/layout/DefaultLayout";
import ProductsAdd from "./pages/ProductsAdd";

export default function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />


          <Route element={<RequiredAuth />}>
            <Route element = {<DefaultLayout/>}>
              <Route path="/" element={<Home />} />
              <Route path="/products-add" element={<ProductsAdd />} />
            </Route>
          </Route>
        </Routes>
        <ToastContainer />
      </Router>
    </>
  )
}
