import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className='navbar__links'>
                    <Link to=''>Main</Link>
                    <Link to='/movies'>Movies</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;