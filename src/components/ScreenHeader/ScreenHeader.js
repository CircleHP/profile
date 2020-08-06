import React from 'react';

import './ScreenHeader.styled.sass';

const ScreenHeader = ({ label }) => {
    return (
        <div className='screen-header-container'>
            {label}
        </div>
    );
};

export default ScreenHeader;
