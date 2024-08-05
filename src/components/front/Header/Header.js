import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ cartItemCount }) => {
  return (
    <header className='header'>
      <div>
        <h1>
          <Link to='/' className='logo'>E-Commerce Shoe Store</Link>
        </h1>
      </div>
      <div className='header-link'>
        <ul>
          <li>
            <Link to='/signup' className='nav-link'>Signup</Link>
          </li>
          <li>
            <Link to='/login' className='nav-link'>Login</Link>
          </li>
          <li>
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li>
            <Link to='/contact' className='nav-link'>Contact</Link>
          </li>
          <li>
            <Link to='/cart' className='nav-link'>
              Cart ({cartItemCount})
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

