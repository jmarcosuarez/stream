import React from 'react';
import { browserHistory as history } from 'react-router';
import styles from '../App.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    history.push(`/users/${this.textInput.value}`);
  }

  render() {
    return (
      <div className={styles.search}>
        <form onSubmit={this.handleSubmit}>
          <input ref={(input) => { this.textInput = input; }} className="input" type="text" />
          <button className="button">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
