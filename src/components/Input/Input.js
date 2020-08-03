import React, { useState } from 'react';

const Input = ({ label, currentValue, handleChange }) => {
    const [disabled, setDisabled] = useState(true);
    return (
        <div>
            <label>{label}</label>
            <input type="text" value={currentValue} onChange={(e) => handleChange(e.target.value)} disabled={disabled}></input>
            <button onClick={() => setDisabled(!disabled)}>Edit</button>
        </div>
    );
};

export default Input;
