import React, { useState } from "react";
import { Container } from "react-bootstrap";

import logo from "../../assets/logo.svg";
import "../../styles/components/auth.css";

const LoginForm = ({ login }) => {
  const [payload, setPayload] = useState({
    email: "admin@admin.com",
    password: "12345",
  });

  const handleChange = (e, { name }) => {
    setPayload({ ...payload, [name]: e.target.value });
  };

  const handleSubmit = () => {
    const { email, password } = payload;

    if (!email) {
      alert("Please enter email");
      return false;
    }

    if (!password) {
      alert("Please enter password");
      return false;
    }

    login({ email, password });
  };

  return (
    <Container className={"form-wrapper"}>
      <form className="form-signin">
        <div className="text-center mb-4">
          <img className="mb-4" src={logo} alt="" width="80" height="80" />
        </div>

        <div className="form-label-group">
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required=""
            autoFocus=""
            autoComplete="off"
            value={payload.email}
            onChange={handleChange}
          />
          <label htmlFor="inputEmail">Email address</label>
        </div>

        <div className="form-label-group">
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
            autoComplete="off"
            value={payload.password}
            onChange={handleChange}
          />
          <label htmlFor="inputPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          className="btn btn-lg btn-primary btn-block"
          onClick={handleSubmit}
          type="button"
        >
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted text-center">© 2020</p>
      </form>
    </Container>
  );
};

export default LoginForm;
