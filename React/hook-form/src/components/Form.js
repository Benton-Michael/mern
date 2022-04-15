import React, { useState } from "react";

// Using the synthetic event onChange to take in the characters
// for each of the empty strings

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // This is an object that holds the styles for the results div
  const formDataDivStyles = {
    textAlign: "left",
    width: "450px",
    margin: "auto",
  };

  const inputDataDivStyles = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    border: "1px solid grey",
    padding: "0px 10px",
    margin: "5px",
  };

  // The return statement here can only be a single React element.
  // return doesn't have to be a div. It can also be the form
  // or any other element.
  return (
    <div>
      <form style={{ marginTop: "20px" }}>
        <div style={inputDataDivStyles}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </form>

      <div style={inputDataDivStyles}>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div style={inputDataDivStyles}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={inputDataDivStyles}>
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div style={inputDataDivStyles}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div style={formDataDivStyles}>
        <h3 style={{ textAlign: "center" }}> Your Form Data </h3>
        <p>
          <label>First Name:</label> {firstName}
        </p>
        <p>
          <label>Last Name: </label> {lastName}
        </p>
        <p>
          <label>Email: </label> {email}
        </p>
        <p>
          <label>Password: </label>
        </p>
        <p>
          <label>Confirm Password: </label> {confirmPassword}
        </p>
      </div>
    </div>
  );
};

export default Form;
