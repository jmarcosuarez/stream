## ABOUT

This app searches users within github using Github API. Searching starts using the search box at the header of the app. Once the form is send, the found user is displayed along with links to:

  - A list of its repos
  - A list of its followers
  - A list of its followings

Following any of those links displays its contents right below the current view of the user. 

## Getting started

### Install dependencies

Execute `npm install` to install all dependencies.

### Development environment

#### Start the app

Execute `npm run start` to run the development server on **[http://localhost:8080](http://localhost:8080)**.

## TECH STACK

  - [React](https://facebook.github.io/react/)
  - [React Router](https://github.com/reactjs/react-router)  - Navigation component
  - [Redux](http://redux.js.org/) - State container for JavaScript apps
  - [Redux Thunk](https://github.com/gaearon/redux-thunk) - Asynchronous actions
  - [Webpack](https://webpack.github.io/) babel
  - [Babel](https://babeljs.io/) Webpack 2 – Latest version of webpack
  
  - [Mocha](https://mochajs.org/) - Test framework for node.js
  - [Chai](http://chaijs.com/) - Assertion framework for node.js
  - [Enzyme](http://airbnb.io/enzyme/) - Test utility helper for react components

CSS wise I am using css modules. I prefer css modules because it doesn't pollute the global scope and it has good performance. Also there's bootstrap but only using it in very specific occasions and not for structuring html, for that I use plain css (flexbox model).

## WHATS MISSING

Theres plenty to call as missing but ill focus here on whats done right now, even not all the way through.

A few components got state while it should be redux the one to handle it. Those are the components Followers, Followings and Repos. Basically Profile its already hooked into redux so it helps to see how this three components will end up when hooked into redux. That would mean making the component a container, eliminating state and the constructor, and passing it an action whose callback will reach the API, instead of fetching data from withing the component.

Fetching data on componentWillMount() is a lousy way of fetching data and doesn't give to reusable components. Another way of initialization of the component is through react-router OnEnter callback. This way we get rid of using lifecycle components on load-time. 

## METHODOLOGY

This app makes heavy use of react router to inject views on different childrens positions. This all starts on the header, the form presented there uses React router browserHistory to programmatically change the url. The app starts at an emptly state and after the search the Profile component in loaded. All subsequent components are children of this one so they all will be layeded right below. 

The use of a react lifecycle method componentDidUpdate() was needed precisely because selecting users in the followers or following listings had to change the already loaded user. Meaning the loaded user had to give way to the new user if a selection on any list was made. Another lifecycle method used was componentDidMount(), used to fetch data from the Github API once the component finished its loaded phase.

## TESTS
The setup is done to test React components. However, test are only set for the main component and there's definitively missing plenty of components and tests to do. If you like to see test on immutable structures you may take a look at the agenda repository. 
I use mocha as test framework, chai as assertion library and jsdom to provide  a pure JavaScript DOM implementation which runs in node. Also Enzyme is used as a helper with react components.



