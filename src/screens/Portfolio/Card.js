import React from "react";

const Card = ({companyName, invested, actionType, numberOfActions, actionNumber, ownershipInterest, votingPower, download}) => {

return (
    <tr>
        <td>{companyName}</td>
        <td>{invested}</td>
        <td>{actionType}</td>
        <td>{numberOfActions}</td>
        <td>{actionNumber}</td>
        <td>{ownershipInterest}</td>
        <td>{votingPower}</td>
        <button onClick={download} />
    </tr>
    );
};
export default Card;