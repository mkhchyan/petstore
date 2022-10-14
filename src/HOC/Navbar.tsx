import React, { FC, useState } from 'react';

import Logo from '../assets/images/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import '../assets/styles/style.scss'

interface IStateNavbar {
    isOpen: boolean;
}

const Navbar: FC = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={Logo} alt="Hotel Booking" />
                    </Link>
                    <button type="button" className="nav-btn" >
                        <GiHamburgerMenu className="nav-icon" />
                    </button>
                </div>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;