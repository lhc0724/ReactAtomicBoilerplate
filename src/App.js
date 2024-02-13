import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { ToastContainer } from 'react-toastify';
import { useAuth0 } from '@auth0/auth0-react';
import en from './lang/en.json';
import ko from './lang/ko.json';
import Content from './Content';
import UnauthenticatedContent from './UnauthenticatedContent';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0 } from './components/module';

const App = () => {
  const { isLoading, isAuthenticated, error } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return <Content />;
  }

  return <UnauthenticatedContent />;
};

// 설정된 언어 데이터 가져오기
const locale = localStorage.getItem('locale') ?? 'ko';
const messages = { en, ko }[locale];

export const Root = () => {
  return (
    <Router>
      <IntlProvider locale={locale} messages={messages}>
        <Auth0>
          <App />
        </Auth0>
        <ToastContainer />
      </IntlProvider>
    </Router>
  );
};
