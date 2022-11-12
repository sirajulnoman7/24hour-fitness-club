import React from 'react';
import logo from '../../images/24hourlogo-removebg-preview.png';
import './Header.css'
const Header = () => {
    return (
        <div className='bg-black px-8'>
            <nav className='display: flex justify-between align-center'>
                <img src={logo} alt="" />
                <div className='manus text-bold'>
                    <a className='text-bold' href="#membership">MEMBERSHIP</a>
                    <a href="#gym-near-me">GYM NEAR ME</a>
                    <a href="#classes">CLASSES</a>
                    <a href="#training">TRAINING</a>
                    <a href="#virtual">VIRTUAL</a>
                    <a href="#login">LOGIN</a>
                    <a href="#join"><span className='bg-red-500 rounded mx-4 px-5 py-2 join'>JOIN</span></a>
                </div>
            </nav>
        </div>
    );
};

export default Header;