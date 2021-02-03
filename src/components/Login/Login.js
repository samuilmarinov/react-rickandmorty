import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
      <MDBRow className="container loginform">
        <MDBCol>
          <form onSubmit={handleSubmit}>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput label="username" icon="user" group type="text" validate error="wrong"
                success="right" onChange={e => setUserName(e.target.value)} />
              <MDBInput label="password" icon="lock" group type="password" validate onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="text-center">
              <MDBBtn type="submit">Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};