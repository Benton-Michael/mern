import React, { useState } from 'react';

const Product = (props) => {

    // Allow us to give a default value
    // getter for inStock/ 
    // setter method is: setInStock
    // default value provided is 5
    const [ inStock, setInStock] = useState(props.initalStock);

    return (
        <div>
            <h2>{ props.title }</h2>
            <p>Description { props.description } </p>
            <p>Cost: { props.cost }</p>
            <p>In Stock: { inStock }</p>
            {/* Setter method for the inStock value */}
            {/* Button using the synthetic event onClick */}
            <button onClick={(event) => setInStock(inStock - 1)}>
                Buy { props.title }
            </button>
        </div>
    )
}

export default Product;