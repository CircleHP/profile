import React, { useState } from 'react';

import { saveDataToLocalStorage } from 'store';

import Input from 'components/Input';
import './Password.styled.sass';

const Password = ({ userData, setUserData }) => {

    const [currentPassword, setCurrentPassword] = useState(userData.currentPassword);
    const [newPassword, setNewPassword] = useState(userData.newPassword);
    const [confirmNewPassword, setConfirmNewPassword] = useState(userData.confirmNewPassword);
    

    const userDataObject = {
        currentPassword: currentPassword,
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword,
    };

    const handleSave = () => {
        setUserData(userDataObject);
        saveDataToLocalStorage(userDataObject);
    };

    return (
        <div className='input-password'>
            <Input label='Nuvarande lösenord' currentValue={currentPassword} handleChange={setCurrentPassword} /><br/> 
            <Input label='Nytt lösenord' currentValue={newPassword} handleChange={setNewPassword} /><br/> 
            <Input label='Bekräfta nytt lösenord' currentValue={confirmNewPassword} handleChange={setConfirmNewPassword} /><br/> 
            <button onClick={() => handleSave()} className='button-save'>Spara</button><br/> 
        </div>
    );
};

export default Password;