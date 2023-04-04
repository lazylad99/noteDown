import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
  const [creds, setCreds] = useState({ name: '', email: '', password: '', cpassword: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = creds;
    const response = await fetch('http://localhost:5000/api/auth/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      navigate('/');
      props.showAlert("Account Created Successfully", "success");
    } else {
      props.showAlert(json.error, "danger");
    }
  };

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  return (
      <div className='container mt-5 d-flex flex-column justify-content-center'>
        <h1>Sign Up</h1>
        <p>Want access to NoteDown, make an account here.</p>
        <form onSubmit={handleSubmit} className='mt-3' >
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Username
            </label>
            <input
              type='text'
              className='form-control'
              value={creds.username}
              id='name'
              name='name'
              onChange={onChange}
              style={{ width: '600px' }}
              autoFocus
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              value={creds.email}
              id='email'
              name='email'
              aria-describedby='emailHelp'
              onChange={onChange}
              style={{ width: '600px' }}
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              value={creds.password}
              id='password'
              name='password'
              onChange={onChange}
              style={{ width: '600px' }}
              minLength={5}
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='cpassword' className='form-label'>
              Confirm Password
            </label>
            <input
              type='password'
              className='form-control'
              // value={creds.password}
              id='cpassword'
              name='cpassword'
              onChange={onChange}
              style={{ width: '600px' }}
              required
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
  );
}
