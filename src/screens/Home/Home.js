import React from 'react';
import './Home.styled.sass';
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
        <div className='page'>
        <div className='homeLabel'>Hem</div>

            <Dialog userData={userData} />

            <div className='user-container'>

                <div>
                    <td>
                    <img src={userData.img} alt='user-avatar' className='round'/>
                    </td>
                    <td>
                        <div>
                            <h2>{userData.firstName} {userData.lastName}</h2>
                            <p>Person Nr/Organisations Nr</p>
                            <h3>{userData.personalNumber}</h3>
                        </div>
                    </td>
                </div>

                <div className='industries'>
                    <p>Föredragna Industrier</p>

                    <tr>
                        <td>
                        Industri 1
                        </td>
                        <td>
                        Industri 2
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Industri 3
                        </td>
                        <td>
                        Industri 4
                        </td>
                    </tr>
                </div>

                <div className='contact-information'>
                    <p>Kontaktuppgifter</p>

                    <tr>
                        <td>Telefon:</td>
                        <td>{userData.phoneNumber}</td>
                    </tr>

                    <tr>
                        <td>Mail:</td>
                        <td>{userData.email}</td> 
                    </tr>

                    <tr>
                        <td>Address:</td>
                        <td>{userData.adress}</td>
                    </tr>
                    
                    <tr>
                        <td>Postnummer:</td>
                        <td>{userData.postNumber}</td>
                    </tr>
                    
                    <tr>
                        <td>Postort:</td>
                        <td>{userData.city}</td>
                    </tr>

                </div>
            </div>
        </div>
    );
};

export default Home;
