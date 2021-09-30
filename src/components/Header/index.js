import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">

                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link "  to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;