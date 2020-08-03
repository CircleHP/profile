import React, { useState } from 'react';

import PersonalInformation from './PersonalInformation';
import SettingsTabs from 'components/SettingsTabs';

import './Settings.styled.sass';

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
                            return <div>Tab num.2</div>

                        case '3':
                            return <div>Tab num.3</div>

                        default:
                            return <PersonalInformation userData={userData} setUserData={setUserData} />
                    }
                })()}
            </div>
        </div>
    );
};

export default Settings;
