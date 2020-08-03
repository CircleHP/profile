import React, { useState } from 'react';

import { saveDataToLocalStorage } from 'store';

import Input from 'components/Input';

const PersonalInformation = ({ userData, setUserData }) => {
    const [firstName, setFirstName] = useState(userData.firstName);
    const [lastName, setLastName] = useState(userData.lastName);
    const [personalNumber, setPersonalNumber] = useState(userData.personalNumber);
    const [adress, setAdress] = useState(userData.adress);
    const [email, setEmail] = useState(userData.email);
    const [city, setCity] = useState(userData.city);
    const [postNumber, setPostNumber] = useState(userData.postNumber);
    const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber);

    const [img, setImage] = useState(userData.img);

    const userDataObject = {
        firstName: firstName,
        lastName: lastName,
        personalNumber: personalNumber,
        adress: adress,
        email: email,
        city: city,
        postNumber: postNumber,
        phoneNumber: phoneNumber,
        img: img,
    };

    const handleSave = () => {
        setUserData(userDataObject);
        saveDataToLocalStorage(userDataObject);
    };

    return (
        <div>
            <Input label='First name' currentValue={firstName} handleChange={setFirstName} />
            <Input label='Last name' currentValue={lastName} handleChange={setLastName} />
            <Input label='Number' currentValue={personalNumber} handleChange={setPersonalNumber} />
            <Input label='Adress' currentValue={adress} handleChange={setAdress} />
            <Input label='Email' currentValue={email} handleChange={setEmail} />
            <Input label='City' currentValue={city} handleChange={setCity} />
            <Input label='Post number' currentValue={postNumber} handleChange={setPostNumber} />
            <Input label='Phone number' currentValue={phoneNumber} handleChange={setPhoneNumber} />
            <Input label='Avatar' currentValue={img} handleChange={setImage} />
            <button onClick={() => handleSave()}>Save</button>
        </div>
    );
};

export default PersonalInformation;
