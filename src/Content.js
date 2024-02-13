import React, { Suspense, useCallback, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import routes from './app-routes';
import useErrorBoundary from './hooks/useErrorBoundary';
import { useLocalStorage } from './hooks';
import { storage } from './contants';

const Content = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [, setAuthToken] = useLocalStorage(storage.TOKEN, '');
  const error = useErrorBoundary();

  // token 저장
  const setToken = useCallback(async () => {
    const token = await getAccessTokenSilently();
    setAuthToken(token);
  }, [getAccessTokenSilently, setAuthToken]);

  useEffect(() => {
    setToken();
  }, [setToken]);

  useEffect(() => {
    if (error.message.length > 0) {
      toast(error.message);
    }
  }, [error]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(({ path, component }) => {
            return <Route exact key={path} path={path} component={component} />;
          })}
          <Redirect to={process.env.REACT_APP_START_ROUTE} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
