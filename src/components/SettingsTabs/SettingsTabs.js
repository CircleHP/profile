import React from 'react';
import './SettingsTabs.styled.sass';

const SettingsTabs = ({ setCurrentTab }) => {
    return (
        <div>
            <button className='tab-button' onClick={() => setCurrentTab('1')}>Min Profil</button>
            <button className='tab-button' onClick={() => setCurrentTab('2')}>Byt Lösenord</button>
            <button className='tab-button' onClick={() => setCurrentTab('3')}>Preferencer</button>
        </div>
    );
};

export default SettingsTabs;
