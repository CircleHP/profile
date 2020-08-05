import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from 'images/Image1.png';
import './Navigation.styled.sass';

const Navigation = () => {
    return (
        <div className='container'>
            <div className="logo">
                <img src={imgLogo} alt='logo'></img>
            </div>
            <div className='sidebar'>
                <Link to='/'><i className="fas fa-home"></i>Home</Link><br/>
                <Link to='/portfolio'><i className="fas fa-briefcase"></i>Portfolio</Link><br/>
                <Link to='/settings'><i className="fas fa-cog"></i>Settings</Link>
            </div>
            <div className='logout'>
                <Link><i className="fas fa-sign-out-alt"></i>Logga ut</Link>
            </div>
        </div>
    );
};

export default Navigation;
