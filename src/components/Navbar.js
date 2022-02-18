import React from 'react';
import { Link } from 'react-router-dom';
import logoimage from './img/style/logo.png';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light text-center fw-bold" style={{backgroundColor:'#FCFCFC'}}>
                <div className="container-fluid my-2">
                    <Link className="navbar-brand ms-5" to="/">
                        <img src={logoimage} className='img-fluid' alt='logo'
                            style={{ height: '30px'}} />
                         Skillark</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-right" id="navbarNavAltMarkup">
                        <div className="nav navbar-nav ms-auto">
                            <ul className="navbar-nav mb-lg-0">
                                <li className="nav-item mx-1">
                                    <Link className="nav-link" to='/'>Home</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link className="nav-link" to='/trainings'>Live Trainings</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link className="nav-link" to='/counselling'>Career Counselling</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link className="nav-link" to='/careers'>Careers</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link className="nav-link" to='/contactus'>Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/login'>Log In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/register'>Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  rounded-circle bg-ska-secondary text-ska-primary" style={{ textDecoration: 'none', width: '40px' }}
                                        data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                        S
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Setting</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Shiva Singh
                    </div>
                    <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
