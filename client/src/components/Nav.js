import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css'

const Nav = ({ user, setUser }) => {

    const logout = async () => {
        try {

            console.log('inside logout function')
            await fetch('http://127.0.0.1:8000/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            })

            setUser(null)

        } catch (error) {
            console.log(error)
        }
    }

    let menu;


    if (!user) {

        menu = (

            <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <Link to='/'>
                                <li className="nav-link px-2 text-secondary">Home</li>
                            </Link>
                        </ul>
                        <div className="text-end">
                            <Link to='/login'>
                                <button type="button" className="btn btn-outline-primary me-2">Login</button>
                            </Link>
                            <Link to='/register'>
                                <button type="button" className="btn btn-primary">Sign-up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    } else {

        menu = (

            <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <Link to='/'>
                                <li className="nav-link px-2 text-primary">Home</li>
                            </Link>
                            <Link to='/projects'>
                                <li className="nav-link px-2 text-primary">Projects</li>
                            </Link>
                            <Link to='/issues'>
                                <li className="nav-link px-2 text-primary">Issues</li>
                            </Link>
                        </ul>
                        <div className="text-end">
                            <Link to='/login' onClick={logout}>
                                <button type="button" className="btn btn-outline-primary me-2">Logout</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

    return (
        <div>
            {menu}
        </div>
    );
};

export default Nav;