import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.styled.sass';

const Navigation = () => {
    return (
        <div className='container'>
            <Link to='/settings'>Settings</Link>
            <Link to='/portfolio'>Portfolio</Link>
        </div>
    );
};

export default Navigation;
