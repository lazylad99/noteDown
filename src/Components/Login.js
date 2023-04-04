import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login(props) {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: creds.email, password: creds.password }),
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Logged In", "success");
    } else {
      props.showAlert(json.error, "danger");
    }
  };

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  return (

    <div className="container mt-5 d-flex flex-column justify-content-center">
      <h1>Login</h1>
      {/* <p>To use NoteDown, please login here.</p> */}
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={creds.email}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            style={{ width: "600px" }}
            autoFocus
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={creds.password}
            id="password"
            name="password"
            onChange={onChange}
            style={{ width: "600px" }}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="mt-3">
          <label>New Here? </label><Link to="/signup"> SignUp</Link>
        </div>
      </form>
    </div>
  );
}
