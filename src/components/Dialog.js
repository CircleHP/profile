import React from 'react';

//need to import the information from the file 2PersonalInformation.js"
//instead of const "user"
const user = {
    firstname: 'Magnus',
    lastname: 'Andersson',
    personalnumber: 123456+'-'+1234
}

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        date: new Date().toLocaleString() 
    };
}

    render() {
        return (
            <div className="Dialog">
            <p>Välkommen {user.firstname}! Ditt innehav blev senast uppdaterad {this.state.date}. Ta gärna en titt!</p>
            </div>
        );
    }
}
   
export default Dialog;
