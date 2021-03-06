/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import GithubUser from './GithubUser';

class Following extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.fetchData();
  }
  /* eslint-disable no-unused-vars */
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.params.username !== this.props.params.username) {
      this.fetchData();
    }
  }
  fetchData() {
    fetch(`https://api.github.com/users/${this.props.params.username}/following`)
      .then(response => response.json())
      .then(
        (following) => {
          this.setState({
            following,
          });
        },
      );
  }
  render() {
        // If the state doesn't have a Following key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
    if (!this.state.following) {
      return (<div className="Following-page">LOADING...</div>);
    }

    return (
      <div className="following-page">
        <h2>Following: {this.props.params.username}</h2>
        <ul>
          {this.state.following.map((follower, key) => <GithubUser key={key} follower={follower} />)}
        </ul>
      </div>
    );
  }
}

export default Following;
