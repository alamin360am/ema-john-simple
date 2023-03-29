import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="Logo" />
            <ul className="list">
                <li><a href="/order">Order</a></li>
                <li><a href="/order-review">Order Review</a></li>
                <li><a href="/manage-inventory">Manage Inventory</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Header;