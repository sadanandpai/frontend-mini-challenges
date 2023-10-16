import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { startSignUp } from '../actions/auth';
import { toast } from 'react-toastify';


export const SignupPage = ({ startSignUp }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      toast.error('Passwords don\'t match😅', {
        autoClose: 5000,
        closeButton: false,
        closeOnClick: true,
        hideProgressBar: true,
        position: 'bottom-center'
      });
    } else {
      startSignUp(user.email, user.password);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <main>
        <section className="sign-up--container">
          <form className="sign-up--form" onSubmit={ onSubmit }>
            <h2>Sign-Up</h2>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter e-mail"
              onChange={ onChange }
            />
            <input 
              type="password"
              name="password"
              pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])\S{6,}"
              title="Use a password with a minimum of 6 characters, an uppercase and lowercase letter and at least one number."
              required
              placeholder="Enter password"
              onChange={ onChange }
            />
            <input 
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirm password"
              onChange={ onChange }
            />
            <button type="submit" className="button">Create Account</button>
          </form>
        </section>
      </main>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  startSignUp: (email, password) => dispatch(startSignUp(email, password))
});

export default connect(undefined, mapDispatchToProps)(SignupPage);