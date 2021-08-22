import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes';
import { BrowserRouter as Router } from 'react-router-dom';
import TopBar from 'components/topBar';
import { CurrentUserProvider } from 'contexts/currentUser';
import CurrentUserChekcer from 'components/currentUserChecker';

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChekcer>
        <Router>
          <TopBar/>
          <Routes/>
        </Router>
      </CurrentUserChekcer>
    </CurrentUserProvider>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

;
