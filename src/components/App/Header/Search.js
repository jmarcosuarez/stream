import React from 'react';
import { browserHistory as history } from 'react-router';
import styles from '../App.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleSubmit(e) {
    e.preventDefault();
    history.push(`/users/${this.refs.userInput.value}`)
  }

  render() {
    return (
      <div className={styles.search}>        
        <form onSubmit={this._handleSubmit}>
          <input ref="userInput" className="search-page__input" type="text" />
          <button className="search-page__button">Search</button>
        </form>
      </div>
    );
  }
};

export default Search;
