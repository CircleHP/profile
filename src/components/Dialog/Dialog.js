import React from 'react';

const Dialog = ({ userData }) => {
    const date = new Date().toLocaleString().slice(0, 10);

    return (
        <div className="Dialog">
            <p>Välkommen {userData.firstName}! Ditt innehav blev senast uppdaterad {date}. Ta gärna en titt!</p>
        </div>
    );
};

export default Dialog;