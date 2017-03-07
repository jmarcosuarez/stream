import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import Stream from './components/Stream';
import User from './components/Stream/components/Profile';
import Followers from './components/Stream/components/Followers';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Stream} />
        <Route path="users/:username" component={User}>
          <Route path="followers" component={Followers} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

