import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './domain/account';

const UnauthenticatedContent = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <div />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default UnauthenticatedContent;
