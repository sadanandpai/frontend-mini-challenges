import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => {
  const location = useLocation().pathname;

  return (
    <header className="main-header">
      <nav>
        <Link className='main-header__title' to="/dashboard">
          <h1>
            Expense <br />
            <span>Tracker</span>
          </h1>
        </Link>
        { location === '/' && (<Link className="main-header__link" to="/signup">Create Account</Link>) }
        { location === '/signup' && (<Link className="main-header__link" to="/">Login</Link>) }
        { location !== '/' && location !== '/signup' && (
          <button className="button-logout" title="Log Out" onClick={ startLogout }>
            <svg viewBox="0 0 24 24">
              <path
                d="M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z"
              />
              <path
                d="M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z"
              />
            </svg>
            <span>Log Out</span>
          </button>
        )}
      </nav>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
