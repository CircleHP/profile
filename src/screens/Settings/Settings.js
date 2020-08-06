import React, { useState } from 'react';

import PersonalInformation from './PersonalInformation';
import SettingsTabs from 'components/SettingsTabs';

import './Settings.styled.sass';
import Password from './Password';
import Preferences from './Preferences';

const Settings = ({ userData, setUserData }) => {
    const [currentTab, setCurrentTab] = useState('1');

    return (
        <div className='settingsContainer'>
            <div className='settingsLabel'>Settings</div>
            <div className='settingsTabs'>
                <SettingsTabs setCurrentTab={setCurrentTab} />
                {(() => {
                    switch (currentTab) {
                        case '1':
                            return <PersonalInformation userData={userData} setUserData={setUserData} />

                        case '2':
                            return <Password userData={userData} setUserData={setUserData} />

                        case '3':
                            return <Preferences userData={userData} setUserData={setUserData} />

                        default:
                            return <PersonalInformation userData={userData} setUserData={setUserData} />
                    }
                })()}
            </div>
        </div>
    );
};

export default Settings;
