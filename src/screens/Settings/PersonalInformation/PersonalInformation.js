import React, { useState } from 'react';

import { saveDataToLocalStorage } from 'store';

import Input from 'components/Input';
import './PersonalInformation.styled.sass';

const PersonalInformation = ({ userData, setUserData }) => {

    const [img, setImage] = useState(userData.img);

    const [firstName, setFirstName] = useState(userData.firstName);
    const [lastName, setLastName] = useState(userData.lastName);
    const [personalNumber, setPersonalNumber] = useState(userData.personalNumber);
    const [adress, setAdress] = useState(userData.adress);
    const [email, setEmail] = useState(userData.email);
    const [city, setCity] = useState(userData.city);
    const [postNumber, setPostNumber] = useState(userData.postNumber);
    const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber);


    const userDataObject = {
        img: img,
        firstName: firstName,
        lastName: lastName,
        personalNumber: personalNumber,
        adress: adress,
        city: city,
        postNumber: postNumber,
        phoneNumber: phoneNumber,
        email: email,
    };

    const handleSave = () => {
        setUserData(userDataObject);
        saveDataToLocalStorage(userDataObject);
    };

    return (
        <div className='input-form'>
            <Input label='Photo' currentValue={img} handleChange={setImage} /><br/> 
            <Input label='First name' currentValue={firstName} handleChange={setFirstName} /><br/> 
            <Input label='Last name' currentValue={lastName} handleChange={setLastName} /><br/> 
            <Input label='Number' currentValue={personalNumber} handleChange={setPersonalNumber} /><br/> 
            <Input label='Adress' currentValue={adress} handleChange={setAdress} /><br/> 
            <Input label='City' currentValue={city} handleChange={setCity} /><br/> 
            <Input label='Post number' currentValue={postNumber} handleChange={setPostNumber} /><br/> 
            <Input label='Phone number' currentValue={phoneNumber} handleChange={setPhoneNumber} /><br/> 
            <Input label='Email' currentValue={email} handleChange={setEmail} /><br/> 
            <button onClick={() => handleSave()} className='button-save'>Spara</button><br/> 
        </div>
    );
};

export default PersonalInformation;
