import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeToken } from "../store/slices/auth";




export default function Nav() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(removeToken())
        navigate("/login", {replace : true});
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><Link className="nav-link" to="/products-add">Products Add</Link></li>
                        <button className="btn btn-outline-danger rounded-3 ms-3" onClick={handleLogout}>
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
