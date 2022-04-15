import "./App.css";
import Form from "./components/Form";
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  return (
    <div className="App">
      <>
        <form onSubmit={() => {}}>
          <div>
            <label htmlFor="">First Name</label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          </div>

          {firstName.length < 2 && firstName.length > 0 ? (
            <p>Your first name must be at least 2 characters in length</p>
          ) : null}

          <div>
            <label htmlFor="">Last Name</label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} />
          </div>

          {lastName.length < 2 && lastName.length > 0 ? (
            <p>Your last name must be at least 2 characters in length</p>
          ) : null}

          <div>
            <label htmlFor="">Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>

          {email.length < 5 && email.length > 0 ? (
            <p>Your email must be at least 5 characters in length</p>
          ) : null}

          <div>
            <label htmlFor="">Password</label>
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
          </div>

          {password.length < 8 && password.length > 0 ? (
            <p>Your Password must be at least 8 characters</p>
          ) : null}

          <div>
            <label htmlFor="">Confirm Password</label>
            <input
              type="text"
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>

          {confirmPass !== password ? <p>Passwords must match!</p> : null}
        </form>

        <h2>Your Form Data</h2>
        <h3>First Name </h3>
        <span>{firstName}</span>

        <h3>Last Name </h3>
        <span>{lastName}</span>

        <h3>Email </h3>
        <span>{email}</span>

        <h3>Password </h3>
        <span>{password}</span>

        <h3>Confirm Password</h3>
        <span>{confirmPass}</span>
      </>
    </div>
  );
}

export default App;
