import React from 'react';

const SettingsTabs = ({ setCurrentTab }) => {
    return (
        <div>
            <button onClick={() => setCurrentTab('1')}>tab 1</button>
            <button onClick={() => setCurrentTab('2')}>tab 2</button>
            <button onClick={() => setCurrentTab('3')}>tab 3</button>
        </div>
    );
};

export default SettingsTabs;
