import React from 'react'
import { Link } from "react-router-dom";

const ErrorMessage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <p>Author not found. Would you like to add an author?</p>
            <Link to={"/api/authors"}>Create an Author</Link>
            {/* Image needed for a custom 404 page */}
            <img src="" alt="Error--404--Errror" />
        </div>
    )
}

export default ErrorMessage