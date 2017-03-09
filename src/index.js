/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import App from './components/App';
import Stream from './components/Stream';
import User from './components/Stream/components/Profile';
import Followers from './components/Stream/components/Followers';
import Following from './components/Stream/components/Following';
import Repos from './components/Stream/components/Repos';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Stream} />
        <Route path="users/:username" component={User}>
          <Route path="followers" component={Followers} />
          <Route path="following" component={Following} />
          <Route path="repos" component={Repos} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'),
);

