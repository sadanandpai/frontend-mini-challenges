import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route { ...rest } component={ (props) => (
    isAuthenticated ? (
      <React.Fragment>
        <Header />
        <main>
          <Component {...props} />
        </main>
      </React.Fragment>
    ): (
      <Redirect to='/' /> 
    )
  )} />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);