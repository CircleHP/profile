import React from 'react';

import Dialog from 'components/Dialog';

// firstName: '',
//     lastName: '',
//     personalNumber: '',
//     adress: '',
//     city: '',
//     postNumber: '',
//     phoneNumber: '',
//     email: '',

const Home = ({ userData }) => {
    return (
        <div>
            Home
            <Dialog userData={userData} />
            <img src={userData.img} alt='user-avatar' />
            <div>
                First Name: {userData.firstName}
            </div>
            <div>
                Last Name: {userData.lastName}
            </div>
        </div>
    );
};

export default Home;
