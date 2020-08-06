import React from 'react';

import './Input.styled.sass';

const Input = ({ label, currentValue, handleChange }) => {
    return (
        <>
            <label>{label}</label>
            <input className='inputContainer' type="text" value={currentValue} onChange={(e) => handleChange(e.target.value)} />
        </>
    );
};

export default Input;
