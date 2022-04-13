import React from 'react';

const PersonCard = (props) => {
    // JSX begins here
    // component - grouping of funcionality
    const { firstName, lastName, age, hair } = props;

    return (
        <div className="container">
            <h2>
                {lastName}, {firstName}
            </h2>

            <p>Age: {age}</p>
            <p>Hair Color: {hair}</p>
        </div>
    );
}

export default PersonCard;