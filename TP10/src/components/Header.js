import logo_generic from './img/logo_generic.png';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';


export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container">
            <img className="navbar-brand" src={logo_generic} height="100" alt="paraguasho"/>
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={""}>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/MoreInfo"}>Quienes Somos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/Products"}>Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/Contact"}>Contacto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/Cart"}><FaCartPlus/></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}
