import React, { useState } from 'react';

const PersonCard = (props) => {
    // JSX begins here
    // component - grouping of funcionality
    // The component called PersonCard will display a single person's
    // information by way of the values provided as props

    const { firstName, lastName, age, hair } = props;
    const [stateAge, setStateAge] = useState(age);

    return (
        <div className="container">
            <h2>
                {lastName}, {firstName}
            </h2>

            <p>Age: {stateAge}</p>
            <p>Hair Color: {hair}</p>
            <button onClick={(event)=> setStateAge(stateAge + 1)}> Bday Button for{firstName} {lastName} </button>
        </div>
    );
}

export default PersonCard;